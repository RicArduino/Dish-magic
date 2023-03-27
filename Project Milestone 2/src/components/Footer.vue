<template>
    <div class="footer">
        <nav>
            <div class="footer-list">
                <h1 class="title-bold">Dish Magic</h1>
                <p>Welcome to my culinary website,<br>where you'll find a variety of recipes<br>and cooking tips to satisfy your taste buds. </p>
            </div>
            <div class="footer-list">
                <ul class="footer-ul">
                    <li  class="title-bold"><a href="#">About us</a></li>
                    <li><a href="#"><span>About Dish Magic</span></a></li>
                    <li><a href="#"><span>Privacy policy</span></a></li>
                    <li><a href="#"><span>Terms of service</span></a></li>
                </ul>
            </div>
            <div class="footer-list">
                <ul class="footer-ul">
                    <li class="title-bold"><a href="#">Contact us</a></li>
                    <li>
                        <a href="#"><img src="../assets/Facebook.png"></a>
                        <a href="#"><img src="../assets/Instagram.png"></a>
                        <a href="#"><img src="../assets/LinkedIn.png"></a>
                        <a href="#"><img src="../assets/Twitter.png"></a>
                        
                    </li>
                </ul>
            </div>
            <div class="footer-list">
                <ul class="footer-ul">
                    <li  class="title-bold"><a href="#">Services</a></li>
                    <li><a href="#"><span>Catalog</span></a></li>
                    <li><a href="#"><span>Recipes</span></a></li>
                    <li><a href="#"><span>Add recipes</span></a></li>
                </ul>
            </div>

        </nav>
    </div>


    
    </template>
    
    <script>
    
    </script>
    
    <style scoped lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.footer {
    height: 330px;
    background-color: #FF902B;
    /* Définit la hauteur du footer */
    margin-top: auto;
    /* Place le footer en haut de son conteneur */
}

nav {
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 25%;
    padding-top: 2%;
    font-family: 'Inter', sans-serif;
    color: rgb(255, 255, 255);
}
nav ul li {
    list-style-type: none;
}

nav ul li a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-weight: bold;
}
.title-bold{
    font-weight: bold;
    font-size: 25px;
    padding-bottom: 10px;
    
}
span{
    font-weight:normal;
}
p{
    color: aliceblue;
}

    
    </style>
    
    