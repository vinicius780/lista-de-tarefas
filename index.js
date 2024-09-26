const input = document.querySelector("input");
const ul = document.querySelector("ul");

function addNewList(e) {
  if (e.key === "Enter") {
    console.log(input.value);
    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    ul.appendChild(newLi);

    input.value = "";
  }

}

input.addEventListener("keyup", addNewList);
