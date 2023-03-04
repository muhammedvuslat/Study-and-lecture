// import "./Buton.css"; //! Cssi modül haline getirdik ⬇
import ButonStyle from "./buton.module.css";
const Buton = ({ btn }) => {
  console.log(btn);
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{btn}</button>
      {/* style.module.css dosyasında belirtilen .btn-module kebap case olup jsz alanında kebap case okuyamadağı için "btn-blue" köşeli parantez içerisinde kullanıldı*/}
    </div>
  );
};
export default Buton;
