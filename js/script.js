
//Dom -variabeler för inputruta och knappten

let btn = document.getElementById('btn')
let output = document.getElementById('outputtext');
let historylist=document.getElementById('historyList')

let number =[Math.floor(Math.random() * 100)]
btn.addEventListener('click', function(){
 let input = document.getElementById('userInput').value;

const li=document.createElement("li");
li.innerHTML="you guessed.." + input + " ";
document.getElementById('historyList').appendChild(li);
console.log(output);

 if (input == number){ 
    output.innerHTML = `You guessed right, your number was ${number}`

 } else if (input < number){
    output.innerHTML = "You guessed too low!"
    
 };
 if (input > number){
    output.innerHTML = "You guessed too high!"
 }


});

