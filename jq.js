//Password Validation task-1
$(document).ready(function(){
$('#re-enterPassword').keyup(function(){
var pwd = $('#enterPassword').val(); //this will fetch the value of password field
var cpwd = $('#re-enterPassword').val();//this will fetch the value of confirm password
if(cpwd != pwd){//this condition compares the value of pwd with cpwd
    $('#error').html('*Password Didnot match');
    $('#error').css('color','red');
    return false;
}else{
    $('#error').html('');
    return true;
}
});
});




//Table row color Task-2
$(document).ready(function(){
    $('#even').click(function(){
   
     $('table tr:even').css('background-color','lightgrey');
    });
    $('#odd').click(function(){
        //console.log("odd");
        $('table tr:odd').css('background-color','blue');
       });

});




//Error popup Task-3
$(document).ready(function(){
    $('#flag').click(function(){
        var first = $('#fn').val();
        var last = $('#ln').val();
        if(first == ''){
            $('#fn').css('background-color','red');
            alert('Enter First Name');
            $("#fn").focus(function(){
                $('#fn').css("background-color", "white");
            });
        }


        if(last == ''){
            $('#ln').css('background-color','red');
            alert('Enter Last Name');
            $("#ln").focus(function(){
                $('#ln').css("background-color", "white");
            });
        }
  
    });

});



//para popup Task-9
$(document).ready(function(){
    $('.para').click(function(){
        alert('clicked me!!');
    });
});