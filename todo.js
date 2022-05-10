//Adding element to list.
//array that will store the tasks to be performed 
var todoArr=[];
//this array will store the tasks that are already completed
var done=[];
//this will store the value of revised index when edit functionality to todoArr will be implied
var reviseIndx = -1;
//this will store the value of revised index when edit functionality to done  will be implied
var rev = 0;
//function called on the onclick event of add button
function checklist(){
    var flag=document.getElementById("addTask").innerHTML;
    //following if else conditions will decide that whwre ro add the edited task i.e either inn the todoArr or in the  done section
    if(flag=="Add"){
    var taskToBeDone = document.getElementById("new-task").value;
    todoArr.push(taskToBeDone);

    var displayTodo = "";


    //traversing the todoArr array
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete" onclick = "remove(this)">Delete</button></li>';
    //this displays the tasks to be done through an unordered list with id="incomplete-task"    
        document.getElementById("incomplete-tasks").innerHTML = displayTodo;
    }
    }//if closed



    //this elseif will check if button==update and value of reviseIndx>-1 then it will display the edited task in todo
    else if(flag == "Update" && reviseIndx>-1){
    var taskToBeDone = document.getElementById("new-task").value; 
    document.getElementById("addTask").innerHTML = "Add";
    todoArr[reviseIndx] = taskToBeDone;
    var displayTodo = "";
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete"  onclick = "remove(this)">Delete</button></li>';
        document.getElementById('incomplete-tasks').innerHTML = displayTodo;
    }
    reviseIndx=-1;
    }


    //this will provide same functionality as above but for completed or done section
    else if(flag == "Update" && rev>-1){
    var taskToBeDone = document.getElementById("new-task").value; 
    document.getElementById("addTask").innerHTML = "Add";
    done[rev] = taskToBeDone;
    var displayTodo = "";
    //traversing the done array
    for(var i=0;i<done.length;i++){
    displayTodo += '<li><input type="checkbox" checked onchange="moveToNotDone(this)"><label>'+done[i]+'</label><input type="text"><button class="edit" onclick ="editdone(this)">Edit</button><button class="delete"  onclick = "removeDone(this)">Delete</button></li>';
    document.getElementById('completed-tasks').innerHTML = displayTodo;
    }
    rev=-1;
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
        displayDone += '<li><input type="checkbox" checked onchange="moveToNotDone(this)"><label>'+done[i]+'</label><input type="text"><button class="edit" onclick = "editDone(this)">Edit</button><button class="delete" onclick = "removeDone(this)">Delete</button></li>';
        document.getElementById('completed-tasks').innerHTML = displayDone;
    }

    var ul = document.getElementById("incomplete-tasks");
    ul.innerHTML = "";
    var displayTodo = "";
    //traversing the todoArr array
    for(var i=0;i<todoArr.length;i++){

        displayTodo += '<li><input type="checkbox" unchecked onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete"  onclick = "remove(this)">Delete</button></li>';
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
    displayDone += '<li><input type="checkbox" checked onchange="moveToNotDone(this)"><label>'+done[i]+'</label><input type="text"><button class="edit" onclick ="editDone(this)">Edit</button><button class="delete"  onclick = "removeDone(this)">Delete</button></li>';
    document.getElementById('completed-tasks').innerHTML = displayDone;
    }
    var ul = document.getElementById("incomplete-tasks");
    ul.innerHTML = "";
    var displayTodo="";
    //traversing todo array
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" unchecked onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete" onclick = "remove(this)">Delete</button></li>';
        document.getElementById('incomplete-tasks').innerHTML = displayTodo;
    }



}



//function for editing the task in list tobedone
function editTask(reviseTask){
//<li> is the parent element and flag1 stores that element
    var flag1=reviseTask.parentElement;
    //root stores li first we move to parent element of checkbox i.e li and then to ul which is parent element of li then again to li to fetch indexes
    var root=Array.from(flag1.parentElement.children);
    reviseIndx=root.indexOf(flag1);
    //here the add button changes to update button
    document.getElementById("addTask").innerHTML = "Update";
    document.getElementById("new-task").value = todoArr[reviseIndx];
}

//function for editing the task which are completed
function editDone(reviseTask){

    var flag1=reviseTask.parentElement;
    var root=Array.from(flag1.parentElement.children);
    rev=root.indexOf(flag1);
    document.getElementById("addTask").innerHTML = "Update";
    document.getElementById("new-task").value = done[rev];
    


}


//function to imply functionality to delete button of todo array
function remove(del){
    var flag1=del.parentElement;
    var root=Array.from(flag1.parentElement.children);
    var indx=root.indexOf(flag1);
    todoArr.splice(indx, 1);
    var displayTodo="";
    var flag3 = document.getElementById("incomplete-tasks");
    flag3.innerHTML = "";
    for(var i=0;i<todoArr.length;i++){
        displayTodo += '<li><input type="checkbox" onchange="moveToDone(this)"><label>'+todoArr[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete" onclick = "remove(this)">Delete</button></li>';
    
        document.getElementById('incomplete-tasks').innerHTML = displayTodo;
    }
}

//function to imply delete functionality to done array
function removeDone(del1){
    var flag1=del1.parentElement;
    var node=Array.from(flag1.parentElement.children);
    var indx=node.indexOf(flag1);
    done.splice(indx, 1);
    var displayTodo="";
            var flag4 = document.getElementById("completed-tasks");
            flag4.innerHTML = "";
            for(var i=0;i<done.length;i++){
                displayTodo += '<li><input type="checkbox" onchange="moveToNotDone(this)" checked><label>'+done[i]+'</label><input type="text"><button class="edit" onclick = "editTask(this)">Edit</button><button class="delete" onclick = "removeDone(this)">Delete</button></li>';
            
                document.getElementById('completed-tasks').innerHTML = displayTodo;
            }
}

