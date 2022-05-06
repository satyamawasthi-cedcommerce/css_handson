$(document).ready(function(){
    setInterval(function(){
        $('.test p:first-child').css('color',randomCol());
        $('.test p:last-child').css('color',randomCol());

    },5000);
});
    
    function randomCol(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
   