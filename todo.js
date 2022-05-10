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




//here is a function taht will be active when the checkbox will be checked
function moveToDone(markTask){
    //<li> is the parent element and flag1 stores that element
    var flag1 = markTask.parentElement;
    //root stores li first we move to parent element of checkbox i.e li and then to ul ehich is parent element of li then again to li to fetch indexes
    var root = Array.from(flag1.parentElement.children);
    //indx stores the indexes of the li elements through which we can easily fetch everything residing in the li tag
    var indx=root.indexOf(flag1);
    done.push(todoArr[indx]);
    todoArr.splice(indx,1);

    var displayDone="";

    //traversing the done array
    for(var i=0;i<done.length;i++){
        displayDone += '<li><input type="checkbox" checked onchange="moveToNotDone(this)"><label>'+done[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
        document.getElementById('completed-tasks').innerHTML = displayDone;
    }

    var ul = document.getElementById("incomplete-tasks");
    ul.innerHTML = "";
    var displayTodo = "";
    //traversing the todoArr array
    for(var i=0;i<todoArr.length;i++){

        displayTodo += '<li><input type="checkbox" unchecked onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete"  onclick = "btnDeleteTodo(this)">Delete</button></li>';
        document.getElementById('incomplete-tasks').innerHTML = displayTodo;
    
    }


}




//function for reversing the above functionality
function moveToNotDone(markNotDone){
    //<li> is the parent element and flag1 stores that element
    var flag1=markNotDone.parentElement;
    //root stores li first we move to parent element of checkbox i.e li and then to ul ehich is parent element of li then again to li to fetch indexes
    var root = Array.from(flag1.parentElement.children);
    //indx stores the indexes of the li elements through which we can easily fetch everything residing in the li tag
    var indx=root.indexOf(flag1);
    //here the functionality gets reversed!! elements get pushed back into todo array
    todoArr.push(done[indx]);
    done.splice(indx,1);

    var displayDone = "";
    var ul = document.getElementById("completed-tasks");
    ul.innerHTML = "";
    //traversing the done array
    for(var i=0;i<done.length;i++){
    displayDone += '<li><input type="checkbox" checked onchange="moveToNotDone(this)"><label>'+done[i]+'</label><input type="text"><button class="edit" onclick ="editComplete(this)">Edit</button><button class="delete"  onclick = "btnDeleteComplete(this)">Delete</button></li>';
    document.getElementById('completed-tasks').innerHTML = displayDone;
    }
    var ul = document.getElementById("incomplete-tasks");
    ul.innerHTML = "";
    var displayTodo="";
    //traversing todo array
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" unchecked onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTodo(this)">Edit</button><button class="delete" onclick = "btnDeleteTodo(this)">Delete</button></li>';
        document.getElementById('incomplete-tasks').innerHTML = displayTodo;
    }



}