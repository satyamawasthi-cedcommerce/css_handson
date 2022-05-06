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


//task-6
$(document).ready(function(){
   $('#nxt').click(function(){
       $('#img1').attr('src','https://png.pngtree.com/thumb_back/fh260/back_pic/03/59/01/1157a364cb85901.jpg');
    });
    $('#pre').click(function(){
        $('#img1').attr('src','https://image.shutterstock.com/image-illustration/abstract-blue-red-smoke-steam-260nw-1468643051.jpg')
     });
});