import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //JS kısmı
  return (
    //JSX bu nedenle js kodları süslü içerisinde
    <>
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item;
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}

export default App;
