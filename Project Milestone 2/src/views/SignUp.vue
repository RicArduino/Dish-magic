<template>
    <div></div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from "@/components/NavbarDisconnected.vue";
  import Footer from "@/components/FooterTest.vue";
  export default function HomeView() {
    return (
      <>
        <Navbar />
        <div class="wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1>Sign Up</h1>
                <ul>
                  <li>
                    <input type="text" placeholder="First Name" />
                  </li>
                  <li>
                    <input type="text" placeholder="Last Name" />
                  </li>
                  <li>
                    <input type="text" placeholder="Email" />
                  </li>
                  <li>
                    <input type="text" placeholder="Password" />
                  </li>
                  <li>
                    <input type="text" placeholder="Confirm Password" />
                  </li>
                  <li>
                    <button type="submit">Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  </script>
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