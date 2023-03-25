<template>
  <router-view />
      <Navbar />
            <div class="wrapper">
              <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h1>Log In</h1>
                      <ul>
                        <li>
                          <input type="text" placeholder="Email" />
                        </li>
                        <li>
                          <input v-model="user.password" type="text" placeholder="Password" />
                        </li>
                        <li>
                          <button @click="login" type="submit">Log In</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          <Footer />
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
    </style>
  
  
  <script>
  import Navbar from '../components/NavbarDisconnected.vue'
  import Footer from '../components/FooterTest.vue'
  
  export default {
  
  components: {
      Navbar,
      Footer
    }, 
  
    data (){
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if(this.user.username === '' || this.user.password === '') {
          alert('Please fill in all fields')
          return
        }
        else{
          this.$store.dispatch('login', this.user)
  
        }
  
        
      },
    }
  }
  
  
  </script>