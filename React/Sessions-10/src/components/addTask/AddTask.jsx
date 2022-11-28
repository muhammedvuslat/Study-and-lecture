import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [aTask, setATask] = useState("");
  const [aDate, setADate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: aTask, date: aDate };
    console.log("first", aTask);
    console.log("second", aDate);
    console.log("third", newTask);
    addNewTask(newTask);
    setATask("");
    setADate("");
  };

  const addNewTask = async (newTask) => {
    const url = "https://6384a20c4ce192ac605e5da9.mockapi.io/api/vtask";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please Enter Task"
            onChange={(e) => setATask(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>

          <Form.Control
            type="date"
            onChange={(e) => setADate(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
