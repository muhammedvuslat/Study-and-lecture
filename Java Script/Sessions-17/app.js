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
    //! yeni bir li elementi olusturup bunu DOM'a bas
    createListElement(newTodo);
  }
});

const createListElement = (newTodo) => {
  const li = document.createElement("li");
  li.setAttribute("id", newTodo.id); //! alternatif olarak li.id = newTodo.id [id ismi ve newTodo.id Valuesi]
  //! id="1663754543101" gibi
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(newTodo.text);
  p.appendChild(pTextNode), li.appendChild(p);

  //? delete ikonu olustur ve li elementine bagla

  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  todoUl.appendChild(li);
};
