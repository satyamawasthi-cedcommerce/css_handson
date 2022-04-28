    function estimateWeight() {
        age=document.getElementById('age').value;
        weight=document.getElementById('weight').value;
            if(age>=5&&age<=7){
                if(weight>=15&&weight<=20){
                    document.getElementById('req').innerHTML="Keep it Up!";
                    document.getElementById('req').style.color="green";
                }
                else if(weight<15){
                    document.getElementById('req').innerHTML="You are underWeight.";
                    document.getElementById('req').style.color="Red";
                }
                else {
                    document.getElementById('req').innerHTML="You are overWeight";
                    document.getElementById('req').style.color="Red";
                }
               
            }
            if(age>=8&&age<=10){
                if(weight>=21&&weight<=25){
                    document.getElementById('req').innerHTML="Keep it Up!";
                    document.getElementById('req').style.color="green";
                }
                else if(weight<21){
                    document.getElementById('req').innerHTML="You are underWeight.";
                    document.getElementById('req').style.color="Red";
                }
                else {
                    document.getElementById('req').innerHTML="You are overWeight";
                    document.getElementById('req').style.color="Red";
                }
               
            }
            if(age>11&&age<=15){
                if(weight>=26&&weight<=30){
                    document.getElementById('req').innerHTML="Keep it Up!";
                    document.getElementById('req').style.color="green";
                }
                else if(weight<26){
                    document.getElementById('req').innerHTML="You are underWeight.";
                    document.getElementById('req').style.color="Red";
                }
                else {
                    document.getElementById('req').innerHTML="You are overWeight";
                    document.getElementById('req').style.color="Red";
                }
               
            }
            if(age>=16&&age<=20){
                if(weight>=31&&weight<=40){
                    document.getElementById('req').innerHTML="Keep it Up!";
                    document.getElementById('req').style.color="green";
                }
                else if(weight<15){
                    document.getElementById('req').innerHTML="You are underWeight.";
                    document.getElementById('req').style.color="Red";
                }
                else {
                    document.getElementById('req').innerHTML="You are overWeight";
                    document.getElementById('req').style.color="Red";
                }
               
            }
            if(age<5||age>20){
                    document.getElementById('req').innerHTML="enter valid Details!";
                    document.getElementById('req').style.color="Yellow";

               
            }
           
    }


