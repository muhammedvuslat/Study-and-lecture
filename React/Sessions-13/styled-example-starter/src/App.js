import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
//! ThemeProvider sayesin de karanlık mod uygulaması tasarnalabilir arasına aldığı comnentlerin kendi içerisinde
//! const style tanımlanmış olan renklere erişim sağlatır
const style = {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "768px",
};
const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      {/* ThemeProvider ın prop tanımlaması zorunlu olarak theme={} şeklindedir */}
      <Header />
    </ThemeProvider>
  );
};

export default App;
