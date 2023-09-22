// Define the display function
let outcome = document.getElementById("input-bar");

function display(value) {
    // let outcome = document.getElementById("input-bar");
    outcome.value += value;

    if (value===' '){
        outcome.value = " "; 
    }
}

function evall(){
    console.log(outcome.value)
    outcome.value = eval(outcome.value)
    console.log(outcome.value)
}

function square(){
    console.log(outcome.value)
    outcome.value = outcome.value * outcome.value
}

function reciprocal(){
    console.log(outcome.value)
    outcome.value = 1/outcome.value
}

function squareroot(){
    console.log(outcome.value)
    outcome.value = Math.sqrt(outcome.value)
}
// document.addEventListener('keyup', function(event) {
//     const ENTERKEY = 13;
//         if (event.keyCode === ENTERKEY) {
//             evall()
//           }
    
//   });

