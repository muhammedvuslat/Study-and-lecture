import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  /* const { state } = useLocation();
  /* People componentinden gelen state:person key value yapısını  const {state}= useLocation() ile yakalıyoruz */
  const { state: person } = useLocation();
  /* üst satırda state ismi destructuring ile persona çevrilmiştir */
  console.log(person);
  /* clg person ile gelen veriler people componentinde yapılan fetchden sonra person ile iletilen API verisidir */
  return (
    <div className="container text-center">
      <h2>
        {person.first_name} {person.last_name}
      </h2>
      <img className="rounded  " src={person.avatar} alt="" />
      <p>{person.email}</p>
      <div>
        <button className="btn btn-success me-2" onClick={() => navigate("/")}>
          Go Home
        </button>
        {/* onClick eventı ile navigate i kullanarak home sayfasına gitmesini sağladık ek olarak app.js deki <Route path="/" element={<Home />} /> bak */}
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
        {/* onClick içerisinde kullanılan -1 navigate in bir özelliği olup historydeki bir önce alana döndürür herhangi gibi rakamla istenilen geçmişe dönülebilinir*/}
      </div>
    </div>
  );
};

export default PersonDetail;
