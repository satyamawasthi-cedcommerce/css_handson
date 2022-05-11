//function to display values in the text box
function display(val){
 document.getElementById('solution').value += val;
 return val;

}

//function to clear screen
function emptyScreen(){
 document.getElementById('solution').value = '';

}

//function to solve the expression
function solve(){
 let x = document.getElementById('solution').value;
 let y = eval(x);

    document.getElementById('solution').value = y;

    return y;

}




   
