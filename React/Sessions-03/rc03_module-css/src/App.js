import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //JS kısmı 
  return (
    //JSX bu nedenle js kodları süslü içerisinde
    <>
      {data.map((item)=> {
        return (
          
        )
      })}
      <Card />
    </>
  );
}

export default App;
