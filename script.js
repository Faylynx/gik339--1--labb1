let checkBox = document.getElementById('divStyle');
let textField = document.getElementsByClassName('textfield');
let button = document.getElementsByName('knapp');
let div = document.getElementsByTagName('div');

function inputEvent(e){
    console.log("Target: ", e.target);

    if (e.target.id==="content"){
        let input = e.target.value;
        let output = document.getElementById("div");
        output.innerHTML = input;
    }
}
