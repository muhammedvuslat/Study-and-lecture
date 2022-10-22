import { useState } from "react";
const MouseEvent = () => {
  const [showHint, setShowHint] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();
  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    toggle
      ? (e.target.className = "bg-success text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-warning text-dark w-50 p-4 mt-4");
  };
  console.log(toggle);
  //? mouseMove event
  const handleMouseMove = (e) => {
    // setCoordX(e.nativeEvent.offsetX); //! div içerisindeki konuma göre
    // setCoordY(e.nativeEvent.offsetY); //! div içerisindeki konuma göre
    setCoordX(e.pageX); //! sayfa içerisindeki konuma göre
    setCoordY(e.pageY); //! sayfa içerisindeki konuma göre
  };
  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
      >
        Hover with mouse
      </div>
      {showHint && <p>Hello React</p>}
      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        Double click with mouse
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        Hover with mouse
      </div>

      <p className="text-danger fw-bold">
        X:{coordX} Y:{coordY}
      </p>
    </div>
  );
};

export default MouseEvent;
