import React, { useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [hideButton, setHideButton] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [color, setColor] = useState("outline-warning");
  const [task, setTask] = useState([]);
  const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column ">
      <Button
        onClick={() => {
          setHideButton(!hideButton);
          console.log(hideButton);
          setText(hideButton ? "Show Task Bar" : "Hide Task Bar");
          setColor(hideButton ? "outline-warning" : "outline-success");
        }}
        variant={color}
      >
        {text}
      </Button>
      {hideButton && <AddTask />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
