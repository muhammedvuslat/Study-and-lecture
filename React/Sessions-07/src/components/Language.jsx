import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  // console.log(name, img, options);
  console.log(showImage);
  return (
    <Container
      className="p-3 rounded-2 h-100 lang-card"
      style={{ background: "peachpuff" }}
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6 ">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="text-start h5">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
