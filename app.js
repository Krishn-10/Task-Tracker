let square = document.querySelector(".fa-square");
let trash = document.querySelector(".fa-trash");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
  let el = document.createElement("p");
  el.innerText = inp.value;

  let squareElement = document.createElement("i");
  let trashElement = document.createElement("i");
  squareElement.classList.add("fa-regular");
  squareElement.classList.add("fa-square");
  trashElement.classList.add("fa-solid");
  trashElement.classList.add("fa-trash");

  let task = document.createElement("div");
  task.classList.add("item");
  task.appendChild(squareElement);
  task.appendChild(el);
  task.appendChild(trashElement);
  container.appendChild(task);
  inp.value = "";

});

container.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-square")) {
    e.target.parentElement.classList.add("done");
  }
});

container.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
});