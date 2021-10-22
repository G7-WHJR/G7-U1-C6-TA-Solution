/**Function add(): adds two numbers and displays the answer */
function add() {

    //1. take number 1 from input box "n1" and store it in a variable named "input1"
    var input1=Number(document.getElementById("n1").value);

    //2. take number 2 from input box "n2" and store it in a variable named "input2"
    var input2=Number(document.getElementById("n2").value);
    
    //3. add input 1 and input 2 and store it in a variable named "result"
    var result = input1 + input2;

    //4. display the result in an HTML element with id "answer" 
    document.getElementById("answer").innerHTML=result;
}
    
    