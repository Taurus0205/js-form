var usd = Number(10630.68);
var rub = Number(142.96);
var euro = Number(12624.26);

var elForm = document.querySelector(".form");
var elUserBalance = elForm.querySelector(".form__input");
var elConvertInfo = elForm.querySelector(".convert-info");
var elCurrency = elForm.querySelector(".select");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var userBalance = Number(elUserBalance.value.trim());

  if (userBalance <= 0 || isNaN(userBalance)) {
    elUserBalance.classList.add("form__input-alert");
    elConvertInfo.textContent = "Ma'lumot xato";
    return;
  } else {
    elUserBalance.classList.remove("form__input-alert");
  }

  if (elCurrency.value === "usd") {
    elConvertInfo.textContent = (userBalance / usd).toFixed(2);
  } else if (elCurrency.value === "rubl") {
    elConvertInfo.textContent = (userBalance / rub).toFixed(2);
  } else {
    elConvertInfo.textContent = (userBalance / euro).toFixed(2);
  }
});
