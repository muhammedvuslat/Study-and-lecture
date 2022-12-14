import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { EditTutorial } from "./EditTutorial";
//  //! test data
//  const tutorials = [
//   {
//     id: 1,
//     title: "JS",
//     description: "JS is a programming language",
//   },
//   {
//     id: 2,
//     title: "React",
//     description: "JS library for UI design",
//   },
// ];

const TutorialList = ({ tutorials, getTutorials }) => {
  //! Delete simge işlemi (CRUD - Delete)
  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    try {
      await axios.delete(`${url}/${id}`); //! delete işlemin de ilgili id urlinin oluşturulması için arada /  var
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  //! PUT:  Edit simge işlemi (CRUD - Update)
  //? PATCH : Partialy update (Kısmen güncelleme)
  //! Put: Whole Update,(Tüm Güncelleme,)

  const editTutorial = async (item) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    const { id, title, description } = item; //! havada  Destructuring yapıldı ve item.id yerine id  yazılabilinir ⬇

    try {
      await axios.put(`${url}/${id}`, { title, description }); //! edit işlemin de ilgili id urlinin oluşturulması için arada /  var
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    onClick={() =>
                      editTutorial({
                        id: "1318",
                        title: "Java",
                        description: "Script",
                      })
                    }
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial />
    </div>
  );
};

export default TutorialList;
