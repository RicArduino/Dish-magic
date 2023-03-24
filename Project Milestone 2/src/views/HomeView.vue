<template>
  <div></div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavbarDisconnected.vue";
import Footer from "@/components/FooterTest.vue";
import deco1 from "../assets/deco1.png";
import deco2 from "../assets/deco2.png";
import deco3 from "../assets/deco3.png";
import deco4 from "../assets/deco4.png";
import deco5 from "../assets/deco5.png";
// import deco6 from "../assets/deco6.png";
//import deco7 from "../assets/deco7.png";
//import deco8 from "../assets/deco8.png";
//import deco9 from "../assets/deco9.png";
import deco10 from "../assets/deco10.png";
import deco11 from "../assets/deco11.png";
import dish1 from "../assets/dish1.png";
export default function HomeView() {
  return (
    <>
      <Navbar />
      <div class="wrapper">
        <div class="container-1">
          <img class="deco-1" src={deco1} alt="deco1" />
          <img class="deco-2" src={deco2} alt="deco2" />
          <img class="deco-3" src={deco3} alt="deco3" />
          <div class="container-1-1">
            <h1 class="container-1-1-title">Discover recipe about all type of culture</h1>
            <p class ="container-1-1-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="container-1-1-button-1">Catalog</button>
            <button class="container-1-1-button-2">Random recipe</button>
            <img class="container-1-1-dish-1" src={dish1} alt="dish1" />
          </div>
        </div>
      </div>
      <div class="container-2">
        <img class="container-2-deco-1" src={deco10} alt="deco1" />
        <img class="container-2-deco-2" src={deco11} alt="deco2" />
        <img class="container-2-deco-3" src={deco4} alt="deco3" />
        <img class="container-2-deco-4" src={deco5} alt="deco4" />
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
.deco-1 {
  position: absolute;
  top: 50px;
  right: 60px;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
.deco-2 {
  position: absolute;
  top: 80px;
  right: 480px;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
.deco-3 {
  position: absolute;
  top: 600px;
  right: 80px;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
.wrapper {
  min-height: calc(100% - 330px);
  /* Calcule la hauteur minimale que doit prendre la section pour permettre au footer de se positionner en bas de page */
}
.container-1 {
  position: relative;
  top: 0;
  height: 1000px;
  background: white;
}
.container-1-1 {
  position: absolute;
  width: 916px;
  height: 592px;
  left: 156px;
  top: 200px;
}
.container-1-1-title{
  position: absolute;
width: 674px;
height: 216px;
left: 16px;
top: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 70px;
line-height: 72px;
text-align: left;
/* or 103% */


color: #101A24;
}

.container-1-1-subtitle{
  position: absolute;
width: 376px;
height: 115px;
left: 24px;
top: 280px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
text-align: left;
/* or 181% */


color: #5C6574;
}

.container-1-1-button-1{
  position: absolute;
width: 120px;
height: 54px;
left: 24px;
top: 400px;
background-color: #101A24;
}

.container-1-1-button-2{
  position: absolute;
width: 167px;
height: 54px;
left: 167px;
top: 400px;
}

.container-1-1-dish-1{
  position: absolute;
width: 364px;
height: 364px;
left: 552px;
top: 208px;
}
.container-2 {
  top: 50%;
  height: 1874px;
  background: #101a2422;
}

.container-2-deco-1 {
  position: absolute;
left: 18.6%;
right: 66.29%;
top: 120.24%;

}

.container-2-deco-2 {
  position: absolute;
left: 62.4%;
right: 25.43%;
top:  120.57%;
}

.container-2-deco-3 {
  position: absolute;
left: 81.04%;
right: 10.97%;
top: 170.57%
}

.container-2-deco-4 {
  position: absolute;
left: 73.18%;
right: 20.73%;
top: 170.62%;
  }
</style>