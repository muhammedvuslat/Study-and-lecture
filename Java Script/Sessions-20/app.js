const taxRate = 0.18; //*!Kdv*/
const shippingPrice = 15; //*!Kargo ücreti*/
const shippingFreePrice = 300; //*! Ücretsiz kargo sınırı*/
window.addEventListener("load", () => {
  calculateCartPrice();

  // //*!Local Storage sayfalar arası aktarım için*/
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  // //*! Sessions Storage sayfalar arası aktarım için*/
  // sessionStorage.setItem("taxRate", taxRate);
  // sessionStorage.setItem("shippingPrice", shippingPrice);
  // sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    //*! class name tanımlamasında seçilecek butonda clasın tam ismi alınması gerekli */
    /*console.log("clicked the minus button!"); //*? Clg ile konsolda kontrolünü sağladık  */
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be removed!?`
        )
      ) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    //*! classList tanımlamasında seçilecek butonun clasında bulunan her hangi isim yazılabilinir fakat contain ile var olup olmadığını çek eder tru ise fonk. çalışır
    /*console.log("clicked the plus button!"); //*? Clg ile konsolda kontrolünü sağladık  */
    event.target.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.classList.contains("remove-product")) {
    /*console.log("clicked the remove button!");//*? Clg ile konsolda kontrolünü sağladık  */
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
    /*console.log("clicked other elements!");//*? Clg ile konsolda kontrolünü sağladık  */
  }
});

const calculateProductPrice = (clickedBtn) => {
  const productInfoDiv = clickedBtn.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};
const calculateCartPrice = () => {
  const productTotalPricesDiv = document.querySelectorAll(
    ".product-line-price"
  );
  let subtotal = 0;
  productTotalPricesDiv.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  console.log(shippingPrice);
  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
