//Adding element to list.
//array that will store the tasks to be performed 
var todoArr=[];
//this array will store the tasks that are already completed
var done=[];
//function called on the onclick event of add button
function checklist(){
    var flag=document.getElementById("addTask").innerHTML;
    var taskToBeDone = document.getElementById("new-task").value;
    todoArr.push(taskToBeDone);

    var displayTodo = "";
    //traversing the todoArr array
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
    //this displays the tasks to be done through an unordered list with id="incomplete-task"    
        document.getElementById("incomplete-tasks").innerHTML = displayTodo;
    }
    
}

