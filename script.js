let boxCheck = document.getElementById('divStyle');
let textField = document.getElementsByClassName('textfield');
let button = document.getElementsByName('knapp');
let textDiv = document.getElementsByTagName('div');

function inputEvent(e){
    console.log("Target: ", e.target);
 

    if (e.target.id==="content"){
        let outputField = document.getElementById("outputField");
        outputField.innerHTML = e.target.value;
    }
}

let inputTextfields = document.querySelectorAll('input');
inputTextfields.forEach(input=>{ 
    input.addEventListener('input', inputEvent);
});

boxCheck.addEventListener('change',function(){
    let color = document.getElementById('color').value;
    textDiv.style.backgroundColor = color;

});

