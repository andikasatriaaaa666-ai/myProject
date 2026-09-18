const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTodo = () => {
  if(inputBox.value === ""){
    alert("you must be isi inputanya");
  }else {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.innerHTML = inputBox.value;
    span.innerHTML = "\u00d7"
    li.append(span);
    listContainer.append(li);
    inputBox.value = "";
  }
  saveData()
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask()