// Start
const hideEUConsent = () => {
    document.querySelector(".textus").style.display = "none";
    document.querySelector(".textusik").style.display = "";
    document.querySelector("#spacer").classList.add("klasa");
    return cookieOk;
}

const cookieOk = document.querySelector(".tlaca");
cookieOk.addEventListener("click", () => hideEUConsent());

// 1/3
const hideEUConsentus = () => {
    document.querySelector(".textusik").style.display = "none";
    document.querySelector(".textusak").style.display = "";
    document.querySelector("#spacer").classList.remove("klasa");
    return cookiekus;
}

const cookiekus = document.querySelector(".tlaca1");
cookiekus.addEventListener("click", () => hideEUConsentus());

// 2/3
const hideEUConsentusak = () => {
    document.querySelector(".textusak").style.display = "none";
    document.querySelector(".textusicek").style.display = "";
    return cookiekusak;
}

const cookiekusak = document.querySelector(".tlaca2");
cookiekusak.addEventListener("click", () => hideEUConsentusak());

// 3/3
// Neg
const negativni = () => {
    document.querySelector(".textusicek").style.display = "none";
    document.querySelector(".neg").style.display = "";
    return negativ;
}

const negativ = document.querySelector(".tlaca3");
negativ.addEventListener("click", () => negativni());

// Pos
const pozitivni = () => {
    document.querySelector(".textusicek").style.display = "none";
    document.querySelector(".pos").style.display = "";
    return pozitiv;
}

const pozitiv = document.querySelector(".tlaca4");
pozitiv.addEventListener("click", () => pozitivni());


// Mezernik
document.addEventListener("keydown", event => {
    if (event.key == ` `) {
        document.querySelector(".klasa").click()
        document.querySelector("#spacer").classList.remove("klasa");
        document.querySelector("#ukazSe").classList.remove("ukazSe");
    }
})

// Animace

function move() {
    
    let elem = document.querySelector(".greee")
    let stepValue = 0;
    let id = setInterval(frame, 10);
    
    function frame() {
        
        if (stepValue >= 120) {
            clearInterval(id)
            hideEUConsentus()
        } else {
            elem.style.width = (stepValue + 1) + "%";
            stepValue=(stepValue + 1);
        }
    }
}

// Drag
let correct = 0;
const totalDraggableItems = 3;
const totalMatchingPairs = 3;

const draggableItems = document.querySelector(".draggable-items");
const matchingPairs = document.querySelector(".matching-pairs");
let draggableElements;
let droppableElements;

initiateGame();

function initiateGame() {  
  draggableElements = document.querySelectorAll(".draggable");
  droppableElements = document.querySelectorAll(".droppable");
  
  draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
  });
  
  droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  });
}

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain"
}

//Events fired on the drop target

function dragEnter(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementBrand = event.dataTransfer.getData("text");
  const droppableElementBrand = event.target.getAttribute("data-brand");
  const isCorrectMatching = draggableElementBrand===droppableElementBrand;
  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementBrand);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    correct++;
  }
  if(correct===Math.min(totalMatchingPairs, totalDraggableItems)) { // Game Over!!
    hideEUConsentusak()
  }
}

