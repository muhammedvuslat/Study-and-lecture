//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// //! Fetch işlemi doğru(sağlıklı)olursa
// fetch("https://api.github.com/users") //! API adresi
//   .then((res) => res.json()) //! API adresinden verileri çek json ile obj ye çevir
//   .then((data) => console.log(data)); //! json nı data ismiyle consola yazdır
// //! Fetch işlemi yanlış(hatalı) similasyonu
// fetch("https://api.github.com/user")
//   .then((res) => {
//     //? Error handling
//     if (!res.ok) {
//       throw new Error("Something went wrong"); //! throw fırlatmak atmak demek if de res.ok false ise error fırlat catch ile yakala  değil ise return ile re.json() → data ya aktar clg ile bas
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//? Github örneği için

fetch("https://api.github.com/users")
  .then((res) => {
    //? Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    } else {
      return res.json();
    }
  })
  .then((data) => updateDOM(data))
  .catch((err) => console.log(err));

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    // userDiv.innerHTML += `<h2>${user.login}</h2> //! ayrı ayrı tanımlamak yerine ok işaretleri içerisindeki gibi tanımlamalı şekildede kullanılabilinir
    // <img src="${user.avatar_url}" width="200px" alt="">
    // `;
    //! ↓
    const { login, avatar_url, following_url } = user;
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="150px" alt="" />
    `;
    //! ↑
  });
};
