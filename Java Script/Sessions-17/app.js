const addBtn = document.querySelector("#todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

// todos dizisini localStorage'daki veriler ile guncelle
//! eger localStroge'de todos adinda bir item bulunmaz ise bos array atamasi yap.
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos();

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
    //?Yeni olusturulan todo'yu diziye sakla
    todos.push(newTodo);

    localStorage.setItem("TODOS", JSON.stringify(todos));
    todoInput.value = "";
  }
});

function createListElement(newTodo) {
  const { id, completed, text } = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id", id); //! alternatif olarak li.id = newTodo.id [id ismi ve newTodo.id Valuesi]
  //! id="1663754543101" gibi

  completed ? li.classList.add("checked") : "";

  //! Tik ikonun oluştur ve oluşturulanı li elemntine bağla
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
  p.appendChild(pTextNode), li.appendChild(p);

  //? delete ikonu olustur ve li elementine bagla

  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);
  //? Oluşan  li elementini ul'ye child olarak ata
  todoUl.appendChild(li);
}

todoUl.addEventListener("click", (e) => {
  //!       event listener ile ul etiketinde bir alana basıldıında target hedef olarak verilcek yönt 1
  //   document.querySelector("body").addEventListener("click", (e) => { //! body üzerinde hangi alana tıklanırsa target olarak bildirilicek

  const id = e.target.parentElement.getAttribute("id");

  //!       event delete butonu üzerinden gelmiş ise
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove(); //! target hedefinin class listi fa-trash ise fa-trash ın evebeynini sil yani fa-trash   i       elementinin clası olduğu için bağlı li yi DOM dan siler DOMdan
    todos = todos.filter((todo) => todo.id !== Number(id);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
  //!       event okey butonu üzerinden gelmiş ise
  //?       ilgili li elementinde checked adinda bir class'i varsa bunu sil
  //?       aksi takdirde ekle (DOM) ↓↓↓
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

//!         Enter tuş eklemesi
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});
//!            Başlangıç focusu
window.onload = function () {
  todoInput.focus();
};
