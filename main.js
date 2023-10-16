const createNoteBtn = document.querySelector(".add-note-create-btn");
const createNoteBox = document.querySelector(".box-create-note");
const input = document.querySelector("#input");
const description = document.querySelector("#desc");
const closeNoteBoxBtn = document.querySelector(".close-create-note-box__btn");
const addNoteBtn = document.querySelector(".add-note-btn");
const alertBox = document.querySelector(".alert-box");
const closeAlertBoxBtn = document.querySelector(".close-alert-btn");
const noteWrapper = document.querySelector(".wrapper");
const newDate = new Date();
console.log(newDate);
const getDate = newDate.getDate();
const allMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];
const getMonth = newDate.getMonth();
const getYear = newDate.getFullYear();
const allDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getDay = newDate.getDay();

createNoteBtn.addEventListener("click", () => {
  createNoteBox.classList.add("show-box-create-note");
});

closeNoteBoxBtn.addEventListener("click", () => {
  createNoteBox.classList.remove("show-box-create-note");
});

addNoteBtn.addEventListener("click", () => {
  if (input.value == "" || description.value == "") {
    alertBox.classList.add("show-alert-box");
  } else {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "new-note");
    newDiv.innerHTML = `
    <div class="new-note-header">
    <h3 class="create-title">${input.value}</h3>
    </div>
    <div class="new-note-content">${desc.value}</div>
    <div class="new-note-footer">
    <span class="note-date">${getDate} ${allMonth[getMonth]} - ${getYear} - ${allDay[getDay]}</span>
    <span class="note-options">
    <i class="bi bi-three-dots" onclick="noteOptions(this)"></i>
    <div class="options-box" onclick="deleteNote(this)">
          <i class="bi bi-trash"></i>
          <span>Delete</span>
    </div>
  </span>
  </div>
    `;
    noteWrapper.appendChild(newDiv);
    input.value = "";
    desc.value = "";
    input.focus();
    createNoteBox.classList.remove("show-box-create-note");
  }
});

function noteOptions(opt) {
  let selfSibling = opt.nextElementSibling;
  selfSibling.classList.add("options-box-show");
}

function deleteNote(del) {
  let newNoteTag = del.parentElement.parentElement.parentElement;
  newNoteTag.remove();
}

closeAlertBoxBtn.addEventListener("click", () => {
  alertBox.classList.remove("show-alert-box");
});
