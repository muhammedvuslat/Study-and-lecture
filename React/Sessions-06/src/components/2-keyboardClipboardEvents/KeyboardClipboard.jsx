import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("Please dont enter a number");
      e.preventDefault();
    }
  };
  return (
    <div className="container text-center">
      <h1>CLİPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase(); //! İnputa sadece Büyük harf ile girilmesini sağlar
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <p className="text-start mt-4">{inputValue}</p>
    </div>
  );
};

export default KeyboardClipboard;
