<template>


    <div class="navbarPerso">
        <nav class="navPerso">
            <img src="../assets/logo1.png" alt="logo" class="logoPerso">
            <ul>
                <li><a href="#"><span class="spanPerso">Home</span></a></li>
                <li> <router-link  to="/catalog">Catalog </router-link> </li>
                <li><router-link  to="/about">About </router-link></li>

            </ul>
            <div class="btn-containerPerso">
                <router-link  class="btnPerso btn-outline-primary" to="/signup">Sign Up</router-link> 
                <router-link  class="btnPerso btn-outline-primary" to="/login">Log In</router-link>
            </div>
        </nav>
    </div>




</template>

<script>

</script>

<style scoped lang="scss">
.navbarPerso {
width: 100%;
font-family: 'Inter', sans-serif;
}

.navPerso {
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 5%;
padding-right: 5%;
}

.navPerso ul li {
list-style-type: none;
display: inline-block;
padding: 10px 20px;
}

.navPerso ul li a {
color: black;
text-decoration: none;
font-weight: bold;
}

.spanPerso {
color: #FF902B;
}

.navPerso ul li a:hover {
color: #FF902B;
}

.btnPerso{
background-color: #FF902B;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
font-weight: bold;
cursor: pointer;
text-decoration: none;
}

.logoPerso{
max-width: 200px;
max-height: 100px;
}
.btn-containerPerso{
display: flex;
align-items: center;
justify-content: space-between;
width: 200px;}

</style>

