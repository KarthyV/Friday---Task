var mobileView = document.querySelector(".mobile-view");
var mobileViewList = document.querySelector(".mobile-nav");
var menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", function (e) {
  if (mobileViewList.classList.value.includes("hidden")) {
    mobileViewList.classList.remove("hidden");
  } else {
    mobileViewList.classList.add("hidden");
  }
});
