const Card = (data) => {
  console.log(data);
  const { title, image, desc } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
        <img className="title-img" src={image} alt="img" />
      </div>
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
