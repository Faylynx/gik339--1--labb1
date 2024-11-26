let boxCheck = document.getElementById('divStyle');
let textField = document.querySelectorAll('.textfield');
let button = document.getElementsByName('knapp')[0];
let textDiv = document.getElementsByTagName('div')[1];

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
    const color = document.getElementById('color').value;
    textDiv.style.backgroundColor = color;

});

button.addEventListener('click',function(){
    textDiv.style.display = 'none'
});

