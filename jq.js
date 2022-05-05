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