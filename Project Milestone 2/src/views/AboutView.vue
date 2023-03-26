<template>
  <router-view></router-view>
  <Navbar/>

  <img id="vector1" src="../assets/Vector.png" alt="vec">
  <img id="vector2" src="../assets/Vector-2.png" alt="vec">
  <h1> About us</h1>
  <div class="cards">
    
      <div class="content">
        <div class="photo">
        <img class="photos" src="../assets/ilam.png" alt="per">
      </div>
        <div class="text">
          <p class="name"> <span>Ilam Petetin </span></p>
          <p class="description"> ilam94 on GitHub  </p>
        </div>
      </div>
      <div class="content">
        <div class="photo">
        <img class="photos" src="../assets/lolo.png" alt="per">
      </div>
        <div class="text">
          <p class="name"> <span>Loan Deme </span></p>
          <p class="description"> loooolooo on GitHub </p>
        </div>
      </div>
      <div class="content">
        <div class="photo">
        <img class="photos" src="../assets/vic.png" alt="per">
      </div>
        <div class="text">
          <p class="name"> <span>Victoria Vaniche</span> </p>
          <p class="description"> victoriaav20 on GitHub </p>
        </div>
      </div>
      <div class="content">
        <div class="photo">
        <img class="photos" src="../assets/elyas.jpeg" alt="per">
      </div>
        <div class="text">
          <p class="name"> <span>Elyas truc</span> </p>
          <p class="description"> RicArduino on GitHub </p>
        </div>
      </div>
    </div>

  <Footer/>
 
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');


#vector1{

  position: absolute;
width: 220px;
height: auto;
left: 88px;
top: 167px;
opacity:10%;
z-index:0;

}

#vector2{

position: absolute;
width: 190px;
height: 172.15px;
left: -119px;
top: 269.43px;
opacity:10%;
z-index:0;

}.text p{

  font-family: 'Poppins';
}
span{
  font-weight: 700;
}
#aboutus{
  position: absolute;
width: 645px;
height: 65px;
left: 669px;
top: 215px;

font-family: 'David Libre';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 65px;
/* identical to box height, or 81% */

color: #101A24;
}
.photo{
  
  margin-top:-80px;

}
.photo img{
 width: 80px;
 border-radius:50%;
}
.text{
  width: 200px;

}

.content{
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: white;
  opacity:100%;
  box-shadow: 10px 10px 10px rgb(166, 166, 166);
  display:flex;
  flex-direction: column;
  align-content:center ;
  justify-content: center;
  height:200px;

  
}
.cards{
  margin-left:180px;
  display:flex;
  flex-direction: row;
  align-items: center;
  height:400px;
  z-index:100;
}

</style>
<script>
import Navbar from '../components/NavbarDisconnected.vue'
import Footer from '../components/FooterTest.vue'

  
  export default {
  
  components: {
      Navbar,
      Footer,
   
    }
}
</script>
