const addBtn = document.querySelector("#todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo!");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
  }
});

const createListElement = (newTodo) => {
  const li = document.createElement("li");
  li.setAttribute("id", newTodo.id); //! alternatif olarak li.id = newTodo.id [id ismi ve newTodo.id Valuesi]
  //! id="1663754543101" gibi
  console.log(li);
};
