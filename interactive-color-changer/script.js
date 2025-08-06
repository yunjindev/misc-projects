const btnColor = document.querySelectorAll(".color-btn");
const btnReset = document.getElementById("reset");
const textEntry = document.getElementById("textInput");
const pTag = document.getElementById("text")
const textBtn = document.getElementById("textButton");

btnColor.forEach(button => {
    button.addEventListener("click", function(){
        document.body.style.backgroundColor= button.getAttribute("data-color")
    });
});

btnReset.addEventListener("click", function(){
    document.body.style.backgroundColor="white";
});

function addText(){
    pTag.textContent = textEntry.value;
    document.body.removeChild(textEntry);
    document.body.removeChild(textBtn);
    
}