<template>
  <div class="card">

      <div class="b-card">
          <div b-card-img>
            <img :class="recipesimg" :src="require('../assets/'+ recipe.image)" :alt="cof">
          </div>
          <div b-card class="name">
            <p class="b-card-text"> {{ recipe.name }} </p>
          </div>
      </div>
      
      
  </div>
  
</template>

<script>





export default {
name: 'RecipesCard',
data(){
return{
bgColor:'white'
}
},

methods:{
changebgColor(color){
this.bgColor=color

}
},
props:{
recipe:{
type:Object,
required: true,
},
}

}
</script>

<style>

.b-card{
display: flex;
flex-direction: column;
align-items:center; 
margin-top: 20px;
width:200px;
height:auto;

}


.b-card-text p{
height:50px;
font-family: "David Libre";
}

.show {
display: flex;
}








</style>