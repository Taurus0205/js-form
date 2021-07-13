var usd = 10630.68;
var rub = 142.96;
var euro = 12624.26;

var elForm = document.querySelector(".form");
var userBalance = elForm.querySelector(".form__input");
var convertInfo = elForm.querySelector(".convert-info");
var currency = elForm.querySelector(".select");

console.log(currency.value);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  convertInfo.textContent = userBalance.value / currency.value;
});
