const taxRate = 0.18; //*!Kdv*/
const shippingPrice = 15; //*!Kargo ücreti*/
const shippingFreePrice = 300; //*! Ücretsiz kargo sınırı*/

//*!Local Storage sayfalar arası aktarım için*/
localStorage.setItem("taxRate", taxRate);
localStorage.setItem("shippingPrice", shippingPrice);
localStorage.setItem("shippingFreePrice", shippingFreePrice);
//*! Sessions Storage sayfalar arası aktarım için*/
sessionStorage.setItem("taxRate", taxRate);
sessionStorage.setItem("shippingPrice", shippingPrice);
sessionStorage.setItem("shippingFreePrice", shippingFreePrice);

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    //*! class name tanımlamasında seçilecek butonda clasın tam ismi alınması gerekli */
    /*console.log("clicked the minus button!"); //*? Clg ile konsolda kontrolünü sağladık  */
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (confirm("Product will be removed!?")) {
        // product remove
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    //*! classList tanımlamasında seçilecek butonun clasında bulunan her hangi isim yazılabilinir fakat contain ile var olup olmadığını çek eder tru ise fonk. çalışır
    /*console.log("clicked the plus button!"); //*? Clg ile konsolda kontrolünü sağladık  */
    event.target.previousElementSibling.innerText++;
  } else if (event.target.classList.contains("remove-product")) {
    console.log("clicked the remove button!");
  } else {
    /*console.log("clicked other elements!");//*? Clg ile konsolda kontrolünü sağladık  */
  }
});
