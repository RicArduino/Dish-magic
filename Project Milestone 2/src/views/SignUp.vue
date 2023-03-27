<template>
  <router-view />
  <Navbar />
  <div> 
  <div class="container">
     <div class="row justify-content-center mt-5">
       <div class="col-md-6">
         <div v-show="message" class="alert alert-danger">{{ message }}</div>
         <h4 class="mb-3">New User</h4>
         <div class="form-group">
            <label for="firstname">Firstname</label>
            <input type="text" class="form-control mb-3" id="firstname" placeholder="Enter name" v-model="user.firstName">
          </div>
          <div class="form-group">
            <label for="lastname">Lastname</label>
            <input type="text" class="form-control mb-3" id="lastname" placeholder="Enter lastname" v-model="user.lastName">
          </div>
           <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control mb-3" id="email" placeholder="Enter email" v-model="user.email">
              </div>
              <div class="form-group">
                  <label for="phone">Phone</label>
                  <vue-tel-input id="phone" v-model="user.phone"></vue-tel-input>
                </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control mb-3" id="password" placeholder="Enter password" v-model="user.password">
          </div>
          <div class="form-group">
              <label for="confirmPassword"></label>
              <input type="password" class="form-control mb-3" id="confirmPassword" placeholder="Re-enter password" v-model="user.confirmPassword">
            </div>
           <button class="w-100 btn btn-secondary btn-lg mt-3" type="button"  @click="register">Create account</button>
            <hr class="my-4">
       </div>
     </div>
    </div>

  <Footer />

</div>

</template>
  
<script>

import Navbar from "@/components/NavbarDisconnected.vue";
import Footer from "@/components/FooterTest.vue";
import UserDataService from "@/services/UserDataService";
import VueTelInput from '@/components/phoneInput.vue'

export default {
  name: "SignUp",
  components: {
    Navbar,
    Footer,
    VueTelInput
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        message: ''

      }
    }
  },
  methods: {
    register() {
      const data = {
        name: this.user.name,
        phone: this.user.phone,
        lastname: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
      }
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (this.user.email === '' || this.user.password === '') return alert('Please fill in all fields')
      if (this.user.password !== this.user.confirmPassword) return alert('Passwords do not match')
      if (this.user.email.match(mailformat) === null) {
        return alert('Please enter a valid email address')
      } else {
        console.log(data)
        UserDataService.create(data)
          .then((res) => {
            console.log(res.data)
            // this.$store.commit('setUser', res.data)
            // localStorage.setItem('token', response.data)
            // this.$router.push('/home')
            alert('Your account has been created')
            console.log(this.user)
          })
          .catch((e) => {
            if (e.response.status === 403) {
              alert(e.response.data.message)
            }
            if (e.response.status === 401) {
              alert(e.response.data.message)
            }
            if (e.response.status === 402) {
              alert(e.response.data.message)
            }
            console.log(e)
          })
      }
    }
  },
}


</script>
<!-- <style>
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
}</style> -->