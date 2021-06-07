/**Function add(): adds two numbers from the input and displays the answer */
function add() {

    //take number 1 from input box "n1" and store it in a variable named "input1"
    var input1=Number(document.getElementById("n1").value);
     //take number 1 from input box "n1" and store it in a variable named "input1"
    var input2=Number(document.getElementById("n2").value)
    //add input 1 and input 2 and store it in a variable named "result"
    var result = input1 + input2;

    console.log(result);
    // display the result in an HTML element with id "answer" 
    document.getElementById("answer").innerHTML=result;
}

    
    