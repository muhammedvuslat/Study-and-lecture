import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";

function App() {
  return (
    //! BrowserRoter a index çerisinde app i sarmaladğımız için gerek kalmadı
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        {/* Paths componenti için iç içe geçmiş route yapıyı uygunlandı yani url de path/component */}
        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          {/* index element ile path sayfası açıldığında default olarak tıklanmadan Fullstack sayfası açık olarak gelecek */}
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/people/:id" element={<PersonDetail />} />{" "}
        {/* :id bir değişken parametre olup PersonDetail componentine gönderilir ve useParams ile yakalanır */}
        {/*  <Route path="*" element={<NotFound />} />  */}{" "}
        {/* hatalı URL olduğunda NotFound componentine yönlendirir */}
        <Route path="*" element={<Navigate to="/" />} />
        {/*  hatalı URL olduğunda NotFound componenti yerine home page e yönlendirir */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.
