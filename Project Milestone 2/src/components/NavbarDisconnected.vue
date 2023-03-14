<template>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/SignUp.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

    <title>Sign Up</title>
</head>

<body>
    <header>
        <div class="navbar">
            <nav>
                <img src="../assets/logo1.png" alt="logo" class="logo">
                <ul>
                    <li><a href="#"><span>Home</span></a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Random</a></li>
                    <li><a href="#">Book</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="btn-container">
                    <router-link  class="btn btn-outline-primary" to="/signup">Sign Up</router-link> 
                    <router-link  class="btn btn-outline-primary" to="/login">Log In</router-link>
                </div>
            </nav>
        </div>

    </header>
    <div class="wrapper">
        <!-- Votre contenu ici -->
    </div>
</body>

</template>

<script>

</script>

<style scoped lang="scss">
.navbar {
    width: 100%;
    font-family: 'Inter', sans-serif;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
}

nav ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;
}

nav ul li a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

span {
    color: #FF902B;
}

nav ul li a:hover {
    color: #FF902B;
}

.btn{
    background-color: #FF902B;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

  .logo{
    max-width: 200px;
    max-height: 100px;
  }
  .btn-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;}

</style>

