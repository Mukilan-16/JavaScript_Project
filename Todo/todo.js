let input = document.getElementById("input-area");

let task = document.getElementById("task");

function btnact() {
  let trim = input.value.trim();
  if (trim !== "") {
    const li = document.createElement("li");
    li.textContent = trim;
    task.appendChild(li);

    const dle = document.createElement("button");
    dle.innerText = "REMOVE";
    dle.classList.add("remove-btn");
    li.appendChild(dle);

    dle.addEventListener("click", () => {
      li.remove();
    });
    input.value = "";
  }
}
