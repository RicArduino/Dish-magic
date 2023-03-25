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
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";


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
            <h1 class="container-1-1-title">
              Discover recipe about all type of culture
            </h1>
            <p class="container-1-1-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="container-1-1-button-1">Catalog</button>
            <button class="container-1-1-button-2">Random recipe</button>
            <img class="container-1-1-dish-1" src={dish1} alt="dish1" />
          </div>
        </div>
        <div class="container-2">
          <div class="container-2-1">
            <h1>Favorite Dishes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="container-2-2">
            <div class="products">
              <div class="solo_product">
                <div class="solo_img">
                  <img class="solo_img1" src={dish2} alt="Dish Image" />
                </div>
                <div class="solo_text">
                  <div class="card_title">
                    <p class="product_name">Lumpia with Sauce</p>
                    <p class="product_rate">44 K</p>
                  </div>
                  <div class="card_text">
                    <p class="product_description">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
              </div>
              <div class="solo_product">
                <div class="solo_img">
                  <img class="solo_img1" src={dish3} alt="Dish Image" />
                </div>
                <div class="solo_text">
                  <div class="card_title">
                    <p class="product_name">Tofu Chili</p>
                    <p class="product_rate">21 K</p>
                  </div>
                  <div class="card_text">
                    <p class="product_description">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
              </div>
              <div class="solo_product">
                <div class="solo_img">
                  <img class="solo_img1" src={dish4} alt="Dish Image" />
                </div>
                <div class="solo_text">
                  <div class="card_title">
                    <p class="product_name">Egg and cucumber</p>
                    <p class="product_rate">36 K</p>
                  </div>
                  <div class="card_text">
                    <p class="product_description">Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
              </div>
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
.container-1-1-title {
  position: absolute;
  width: 674px;
  height: 216px;
  left: 16px;
  top: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 72px;
  text-align: left;
  /* or 103% */

  color: #101a24;
}

.container-1-1-subtitle {
  position: absolute;
  width: 376px;
  height: 115px;
  left: 24px;
  top: 280px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  text-align: left;
  /* or 181% */

  color: #5c6574;
}

.container-1-1-button-1 {
  position: absolute;
  width: 120px;
  height: 54px;
  left: 24px;
  top: 400px;
  background-color: #101a24;
}

.container-1-1-button-2 {
  position: absolute;
  width: 167px;
  height: 54px;
  left: 167px;
  top: 400px;
}

.container-1-1-dish-1 {
  position: absolute;
  width: 364px;
  height: 364px;
  left: 552px;
  top: 208px;
}
.container-2 {
  top: 1000px;
  height: 1000px;
  background: #101a2422;
  font-family: "Inter";
}

.container-2-1 {
  position: relative;
  margin: auto auto;
  width: 50%;
  top: 100px;
}
.container-2-2 {
  position: relative;
  margin: auto auto;
  width: 50%;
  top: 100px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.solo_product {
  border: #5c5c5c39 6px solid;
  margin: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  max-width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

.solo_product:hover {
  border: #ffffff 6px solid;
}

.solo_img1 {
  max-width: 150px;
  max-height: 100px;
}

.product_name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: left;

  color: #000000;
}

.product_rate {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  color: #000000;
}

.card_title {
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
  padding-right: 10px;
  padding-left: 10px;
}

.cart {
  text-align: right;
  padding-top: 20px;
  margin-right: 5px;
  font-size: 10px;
}
.card_text{
  font-family: "Inter";
  display: flex;
  align-items: center;
  text-align: center;

  max-width: 200px;
}
.product_description{
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* or 181% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #5C6574;
}
</style>