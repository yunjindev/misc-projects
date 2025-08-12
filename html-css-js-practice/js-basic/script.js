const button = document.getElementById("greetBtn");
const heading = document.getElementById("mainHeading");
const desc = document.getElementById("description");

function greet() {
    alert("hello");
    heading.innerText("text change");
    desc.innerText("text changed in js");
}

button.addEventListener("click", greet);