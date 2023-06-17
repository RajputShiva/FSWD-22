const box = document.getElementById("box");
// console.log(box);

// function logMessage() {
//     console.log('Hi This is a log');
// }
// logMessage();
// or ye 
let count = 0;
const logMessage = () =>{
    console.log('clicked', count++);
}
// logMessage();
box.addEventListener('click', logMessage)