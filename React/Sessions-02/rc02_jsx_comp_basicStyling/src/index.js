import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"; //! App js importu
import "./index.css";
//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.
//* render() metodu içerisinde App componenti cagrilir.

//?--------⬇--------
//! 1. yorumdaki alan
//?--------⬆--------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); //! App js renderı
//?--------⬇--------
//! 2. yorumdaki alan
//?--------⬆--------

//?--------⬇--------

// // ! JSX yapısı
// // const element = (
// //   <>
// //     <h1>Reatc Start</h1>
// //     <p>Hello </p>
// //   </>
// // );
// //! JSX yapısı
// //! JSX - Compenent yapısı
// const App = () => {
//   //! Compenent olarak kullanılması için elementin buyuk harfle başlaması gerekir
//   return (
//     <>
//       <h1>Reatc Start Compenent</h1>
//       <p>Hello </p>
//       <Child /> {/*fonk. dısındaki Compenenti çagırırken*/}
//       <Child /> {/*1 kere tanımla istediğin kadar kullan*/}
//     </>
//   );
// };
// const Child = () => <p> I am a child</p>;
//! JSX - Compenent yapısı
//?--------⬆--------

//?--------⬇--------
//! 2. yorumdaki alan
// root.render(element); //! element jSX renderı
// root.render(<App />); //! element jSX - Compenent renderı /baş harfi buyuk olduğunda Compenent /
//?--------⬆--------
