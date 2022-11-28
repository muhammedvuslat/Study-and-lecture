import axios from "axios";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between  rounded-3 bg-2"
            style={{ backgroundColor: "#F29F10" }}
          >
            <div className="m-1">
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div className=" fs-4 m-1">
              <RiDeleteBin6Line
                onClick={() => {
                  deleteTask(id);
                }}
                style={{
                  color: "#F25C05",
                  cursor: "pointer",
                  boxShadow: "2px 2px 2px #592115",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
