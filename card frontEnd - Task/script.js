const cardName = document.querySelector(".name");
const cardNameInp = document.querySelector("#card_name");
const cardNumber = document.querySelector(".card_number");
const cardNumberInp = document.querySelector("#card_num");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".year");
const cardMonthInp = document.querySelector("#card_month");
const cardYearInp = document.querySelector("#card_year");
const submitBtn = document.querySelector(".submitBtn");
const rightSide = document.querySelector(".right_side");
const thankYou = document.querySelector(".hidden");

cardNumberInp.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  cardNumber.innerHTML = e.target.value;
});

cardNameInp.addEventListener("keyup", function (e) {
  cardName.innerHTML = e.target.value;
});

cardMonthInp.addEventListener("keyup", function (e) {
  cardMonth.innerHTML = e.target.value;
});

cardYearInp.addEventListener("keyup", function (e) {
  cardYear.innerHTML = e.target.value;
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    cardNameInp.value &&
    cardNumberInp.value &&
    cardMonthInp.value &&
    cardYearInp.value
  ) {
    rightSide.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});
