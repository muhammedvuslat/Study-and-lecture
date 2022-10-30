import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorilas, setTutorials] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const getTutorials = async () => {
    try {
      const data = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(Error);
    }
  };

  //! didmount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial />
      <TutorialList tutorilas={tutorilas} />
    </>
  );
};

export default Home;
