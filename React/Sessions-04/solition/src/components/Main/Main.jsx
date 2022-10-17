import "./Main.scss";
import { data } from "../../helper/data";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="cards" key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="img" />
          </div>
        );
      })}
    </div>
  );
};
export default Main;
