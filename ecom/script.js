var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var amnt = document.querySelector(".amount");
var addToCart = document.querySelector(".buy-btn");
var priceCart = document.querySelector(".price-cal");
var totalPrice = document.querySelector(".total-price");
var delCart = document.querySelector(".cart-del");
var emptyCart = document.querySelector(".cart-p");
var insideCart = document.querySelector(".cart-inside");
var cartIcon = document.querySelector(".nav_end_cart");
var cartContainer = document.querySelector(".cart");
var navMenuBtn = document.querySelector(".nav_menuBtn");
var mobileView = document.querySelector(".mobile-view");
var navMenuCloseBtn = document.querySelector(".nav_menuClose");
var imagesThumb = document.querySelector(".images_thumb");
var mainImg = document.querySelector(".left_content_mainImg");
var nextImg = document.querySelector(".img_next");
var prevImg = document.querySelector(".img_prev");

var qty = amnt.innerHTML;
minus.addEventListener("click", function (e) {
  qty = +qty;
  if (qty > 0) qty--;
  amnt.innerHTML = qty;
});

plus.addEventListener("click", function (e) {
  qty = +qty;
  if (qty >= 0) qty++;
  amnt.innerHTML = qty;
});

addToCart.addEventListener("click", function (e) {
  if (qty > 0) {
    emptyCart.classList.add("hidden");
    insideCart.classList.remove("hidden");
    const priceEach = 125;
    const totalCart = priceEach * qty;
    const str = `$${priceEach} x ${qty}`;
    priceCart.textContent = str;
    totalPrice.textContent = `$${totalCart}`;
  }
});

delCart.addEventListener("click", function (e) {
  priceCart.textContent = "";
  totalPrice.textContent = "";
  insideCart.classList.add("hidden");
  emptyCart.classList.remove("hidden");
});

cartIcon.addEventListener("click", function (e) {
  if (cartContainer.classList.value.includes("hidden")) {
    cartContainer.classList.remove("hidden");
  } else {
    cartContainer.classList.add("hidden");
  }
});

navMenuBtn.addEventListener("click", function (e) {
  mobileView.classList.remove("hidden");
});

navMenuCloseBtn.addEventListener("click", function (e) {
  mobileView.classList.add("hidden");
});

imagesThumb.addEventListener("click", function (e) {
  mainImg.src = e.target.src;
});

var currentImg = 1;
nextImg.addEventListener("click", function (e) {
  if (currentImg < 4) {
    currentImg++;
    mainImg.src = `./images/image-product-${currentImg}.jpg`;
  } else {
    currentImg = 1;
    mainImg.src = `./images/image-product-${currentImg}.jpg`;
  }
});

prevImg.addEventListener("click", function (e) {
  if (currentImg > 1) {
    currentImg--;
    mainImg.src = `./images/image-product-${currentImg}.jpg`;
  }
});
