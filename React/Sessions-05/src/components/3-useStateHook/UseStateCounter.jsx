//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import { useState } from "react";

const UseStateCounter = () => {
  //* useState en cok kullanilan Hook'tur.
  //* Bir state'in degisken, dizi ve obje ile kullanilabilmesine olanak saglar.
  //? useState hook'u bir dizi dondurur.Bu dizi array dest ile acilabilir.
  //?  Acilan dizinin 1.elemani state degiskenidir.
  //?  2.si ise state'i degistirmeye izin veren bir setter metodudur.
  //? useState parametre olarak state'in ilk degerini alir.
  const [count, setCount] = useState(0); //! array destructuring

  //! ⬇Obje örneği için
  const [person, setPerson] = useState({
    name: "John",
    surname: "Doe",
    age: 43,
  });
  const incAge = () => {
    //! Bu sekilde bir atama ile sayisal deger state'in uzerine yazilmis oldu.
    //! Dolayisiyla obje yapisi bozuldu.
    //? setPerson(person.age + 1);
    //? setPerson({ name: "Ahmet", surname: "Can", age: 44 });
    setPerson({ ...person, age: person.age + 1 });
  };
  const oriage = () => {
    setPerson({ ...person, age: (person.age = 43) });
  };
  const Decage = () => {
    if (person.age > 43) {
      setPerson({ ...person, age: person.age - 1 });
      console.log(person.age);
    }
  };
  //! ⬆
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center mt-4">
      <section>
        <h1>USESTATE HOOK</h1>
        <h2 className="displat-4 text-danger">COUNT {count} </h2>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-warning">
          Clear{" "}
          {/* //!setCount(0) a eşitler fakat başına fonk. yazılmaz ise 
        //! tıklndıında değil sürekli çalıştırır o yüzden inline fonk. ()=> 
        //! setCount(0) tercih edilir*/}
        </button>
        <button onClick={dec} className="btn btn-danger">
          DEC
        </button>
        {/* <button                 
        onClick={() => count > 0 && setCount(count-1}
        className="btn btn-danger"
      >
        DEC
      </button> //! 0 dan küçük ise eksiye inmemesi için yazılan fonk. inline metodu */}
      </section>
      <section>
        <h1>USESTATE OBJECT</h1>
        <h2>{person.name}</h2>
        <h2>{person.surname}</h2>
        <h4>{person.age}</h4>
        <button onClick={incAge} className="btn btn-danger">
          {" "}
          İnc Age
        </button>
        <button onClick={oriage} className="btn btn-warning m-1">
          {" "}
          Original Age
        </button>
        <button onClick={Decage} className="btn btn-info m-1">
          {" "}
          Dec Age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
