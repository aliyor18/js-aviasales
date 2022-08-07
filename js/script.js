var elSiteForm = document.querySelector(".site-form");
var elSiteInput = elSiteForm.querySelector(".input-form");
var elSiteSelect = elSiteForm.querySelector(".input-select");
var elP = document.querySelector(".hero__desc");
var priceDolar = 500;
var priceEuro = 200;
var priceRubl = 1500;


elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var inputValue = Number(elSiteInput.value);

  var valueDolar = priceDolar * 1100;
  var valueEuro = priceEuro * 1200;
  var valueRubl = priceRubl * 200;

  var valueSum = valueDolar + valueEuro + valueRubl;

  if (inputValue >= valueSum ) {
    elP.textContent = "Sizni pulingiz yetarli, siz sayohatga bora olasiz!";
    console.log("Sizni pulingiz yetarli, siz sayohatga bora olasiz!");
  } else if (isNaN(inputValue)){
    elP.textContent = "Iltimos faqat son kiriting!";
    console.log("Iltimos faqat son kiriting!");
  }
  else {
    elP.textContent = "Uzr sizni pulingiz yetmadi!";
    console.log("Uzr sizni pulingiz yetmadi!");
  }
})

