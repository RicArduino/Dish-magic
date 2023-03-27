<template>
  <router-view />
  <Navbar />
  <div class="container">
     <div class="row justify-content-center mt-5">
       <div class="col-md-6">
         <div v-show="message" class="alert alert-danger">{{ message }}</div>
         <h4 class="mb-3">Login</h4>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control mb-3" id="username" placeholder="Enter username" v-model="user.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control mb-3" id="password" placeholder="Enter password" v-model="user.password">
          </div>
           <button class="w-100 btn btn-secondary btn-lg mt-3" type="button"  @click="login">login </button>
       </div>
     </div>
    </div>

</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

.wrapper {
  min-height: calc(100% - 330px);
  /* Calcule la hauteur minimale que doit prendre la section pour permettre au footer de se positionner en bas de page */
}

.container {
  position: relative;
}

.row {
  margin-bottom: 5%;
  left: 50%;
}

li {
  margin: 10px;
}

button {
  background-color: #ff902b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}

ul {
  padding: 0;
  list-style: none;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 330px;
  background-color: #ff902b;
}
</style>


<script>
import Navbar from '../components/NavbarDisconnected.vue'

import UserDataService from '@/services/UserDataService'
export default {

  components: {
    Navbar,
    
  },

  data() {
    return {
      user: {
        email: '',
        password: '', 
        message:''
      }
    }
  },
  methods: {
    login() {
      const data = {
        email: this.user.email,
        password: this.user.password
      }
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (this.user.email === '' || this.user.password === '') return alert('Please fill in all fields')
      if (this.user.email.match(mailformat) === null) {
        return alert('Please enter a valid email address')
      } else {
        UserDataService.postLogin(data)
          .then((response) => {
            this.$store.dispatch('user', response.data.user)
            this.$router.push({ name: 'home' })
            console.log(response)
            alert('Welcoome' + ' ' + response.data.user.firstname + ' ' + '!')
          })
          .catch(error => {
            // Handle the error here
            alert(error)
          })
      }
    }
  }
}


</script>