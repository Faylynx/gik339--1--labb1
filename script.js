const boxCheck = document.getElementById('divStyle');
const textField = document.querySelectorAll('.textfield');
const button = document.getElementsByName('knapp')[0];
const textDiv = document.getElementsByTagName('div')[0];

function inputEvent(e){
    console.log("Target: ", e.target);
    const name = e.target.name
    console.log("Namn attribut:", name);
 

    if (e.target.id === "content") {
        let outputField = document.getElementById("outputField");
        outputField.innerHTML = e.target.value;
    }
}

Array.from(textField).forEach((input) => { 
    input.addEventListener('input', inputEvent);
    input.addEventListener('blur', inputEvent);
});

const colorField = document.getElementById('color');
colorField.addEventListener('input', function() {
    const color = colorField.value;
    textDiv.style.backgroundColor = color;
})

boxCheck.addEventListener('change',function() {
    console.log("Checkboxen är markerad", boxCheck.checked);

    textDiv.style.backgroundColor = color;

});

button.addEventListener('click',function() {
    textDiv.remove();
});

