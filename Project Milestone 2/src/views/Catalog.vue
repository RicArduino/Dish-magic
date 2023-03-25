<template>
  <div>
 <Navbar /> 

  <div class="container-1">
    <img class="deco-1" src="../assets/deco1.png" alt="deco1" />
    <img class="deco-2" src="../assets/deco2.png" alt="deco2" />
    <img class="deco-3" src="../assets/deco3.png" alt="deco3" />
  </div>
  <div class="container-2">
    <img class="deco-4" src="../assets/deco4.png" alt="deco4" />
    <img class="deco-5" src="../assets/deco5.png" alt="deco5" />
    <img class="deco-10" src="../assets/deco10.png" alt="deco10" />
    <img class="deco-11" src="../assets/deco11.png" alt="deco11" />
  </div>
  <div class="catalog">
    <div id="BtnContainer">
        <button class="bttn active" onclick="filterSelection('all')"> Show all</button>
        <button class="bttn" onclick="filterSelection('asiatic')"> Asiatic</button>
        <button class="bttn" onclick="filterSelection('american')"> American</button>
        <button class="bttn" onclick="filterSelection('european')"> European</button>
    </div>
    <div class="cards">            
      <RecipesCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
    </div>
  </div>

<Footer/>
</div>


</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavbarDisconnected.vue";
import Footer from "@/components/FooterTest.vue";
import RecipesCard from '@/components/RecipesCard.vue';

export default {
  name: 'HomeView',
  components: {
    RecipesCard, Footer, Navbar
   
  },
  data(){

    return{
      recipes:[
      {
      "id": 1,
        "name": "Lumpia with Suace",
        "image": "dish-1.png"
        },
        {
        "id": 2,
        "name": "Egg and Cucumbee",
        "image": "dish-4.png"
        },
        {
        "id": 3,
        "name": "Tofu Chili",
        "image": "dish-5.png"
        },
        {
        "id": 4,
        "name": "Lumpia with Suace",
        "image": "dish-1.png"
        },
        {
        "id": 5,
        "name": "Egg and Cucumbee",
        "image": "dish-4.png"
        },
        {
        "id": 6,
        "name": "Tofu Chili",
        "image": "dish-5.png"
        }
      ]


    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
.container-1 {
  position: relative;
  top: 0;
  height: 1000px;
  background: white;
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

.container-2 {
  top: 50%;
  height: 1874px;
  background: transparent;
}

.deco-10 {
  position: absolute;
left: 18.6%;
right: 66.29%;
top: 120.24%;

}

.deco-11 {
  position: absolute;
left: 62.4%;
right: 25.43%;
top:  120.57%;
}

.deco-4 {
  position: absolute;
left: 81.04%;
right: 10.97%;
top: 170.57%
}

.deco-5 {
  position: absolute;
left: 73.18%;
right: 20.73%;
top: 170.62%;
  }
.catalog{
  position:absolute;
  top:140px
}
.cards{
  display:flex;
  gap :100px;
  flex-wrap:wrap;
  overflow: hidden;
  margin-left:100px;
  margin-top:120px;
  margin-bottom:80px;
}

.bttn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #c3c3c3;
  cursor: pointer;
  font-family: 'David Libre';
  
  font-size:20px;
}

.bttn:hover {
  background-color: #ddd;
}

.bttn.active {
  background-color: #666;
  color: white;
}

</style>
