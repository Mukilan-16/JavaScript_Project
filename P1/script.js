const notescontainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll("#input-box");

function update() {
    const saved = localStorage.getItem("notes");
    if (saved) notescontainer.innerHTML = saved;
} update();

function local() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

btn.addEventListener("click", () => {
    let wrapper = document.createElement("div");
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    wrapper.style.position = "relative";
    wrapper.style.width = "100%";
    wrapper.style.maxWidth = "500px";
    wrapper.style.marginBottom = "20px";

    inputbox.id = "input-box";
    inputbox.setAttribute("contenteditable", "true");

    img.src = "delete_5802947.png";
    img.style.width = "40px";
    img.style.position = "absolute";
    img.style.bottom = "15px";
    img.style.right = "20px";
    img.style.cursor = "pointer";

    wrapper.appendChild(inputbox);
    wrapper.appendChild(img);
    notescontainer.appendChild(wrapper);
    inputbox.focus();
})

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        local();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll("#input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                local();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})