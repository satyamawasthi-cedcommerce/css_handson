var productDetails=[];

    productDetails[0]={Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000};
    productDetails[1]={Company:"Nokia",Model:"S730",Memory:128,Price:22000};
    productDetails[2]={Company:"Xiaomi",Model:"Note",Memory:32,Price:12000};
    productDetails[3]={Company:"Motorola",Model:"G10",Memory:32,Price:15000};
    productDetails[4]={Company:"Apple",Model:"S12",Memory:64,Price:25000};
/*task-1*/
function productCredentials()
{
    
    for(var i=0;i<productDetails.length;i++)
    {
        var row=myTable1.insertRow();
        var cell1=row.insertCell(0);
                     cell1.innerHTML=productDetails[i].Company;

            var cell2=row.insertCell(1);
                    cell2.innerHTML=productDetails[i].Model;

            var cell3=row.insertCell(2);
                    cell3.innerHTML=productDetails[i].Memory;

            var cell4=row.insertCell(3);
                    cell4.innerHTML=productDetails[i].Price;
    }

}

/*task=2*/

function searchForItem()
{

        var Table = document.getElementById("myTable2");
    Table.innerHTML = "";



    var flag=document.getElementById("choice").value;
    var flag1=document.getElementById("in").value;
  for(var i=0;i<=productDetails.length;i++)
  {
    
    
    if(flag == "Company")
    {
        if(productDetails[i].Company == flag1)
        {
            var row=myTable2.insertRow();
            var cell1=row.insertCell(0);
                     cell1.innerHTML=productDetails[i].Company;

            var cell2=row.insertCell(1);
                    cell2.innerHTML=productDetails[i].Model;

            var cell3=row.insertCell(2);
                    cell3.innerHTML=productDetails[i].Memory;

            var cell4=row.insertCell(3);
                    cell4.innerHTML=productDetails[i].Price;

        }
    } 
    if(flag == "Model")
    {
        if(productDetails[i].Model == flag1)
        {
            var row=myTable2.insertRow();
            var cell1=row.insertCell(0);
                     cell1.innerHTML=productDetails[i].Company;

            var cell2=row.insertCell(1);
                    cell2.innerHTML=productDetails[i].Model;

            var cell3=row.insertCell(2);
                    cell3.innerHTML=productDetails[i].Memory;

            var cell4=row.insertCell(3);
                    cell4.innerHTML=productDetails[i].Price;

        }
    } 
    if(flag == "Memory")
    {
        if(productDetails[i].Memory == flag1)
        {
            var row=myTable2.insertRow();
            var cell1=row.insertCell(0);
                     cell1.innerHTML=productDetails[i].Company;

            var cell2=row.insertCell(1);
                    cell2.innerHTML=productDetails[i].Model;

            var cell3=row.insertCell(2);
                    cell3.innerHTML=productDetails[i].Memory;

            var cell4=row.insertCell(3);
                    cell4.innerHTML=productDetails[i].Price;

        }
    }  
    if(flag == "Price")
    {
        if(productDetails[i].Price == flag1)
        {
            var row=myTable2.insertRow();
            var cell1=row.insertCell(0);
                     cell1.innerHTML=productDetails[i].Company;

            var cell2=row.insertCell(1);
                    cell2.innerHTML=productDetails[i].Model;

            var cell3=row.insertCell(2);
                    cell3.innerHTML=productDetails[i].Memory;

            var cell4=row.insertCell(3);
                    cell4.innerHTML=productDetails[i].Price;

        }
    }      

 }
}
/*task=3*/
function filterFunction()
{
        var Table = document.getElementById("myTable3");
        Table.innerHTML = "";


        var filter=document.getElementById("choiceSort").value;
        var filter2=document.getElementById("choiceParam").value;
        for(var i=0;i<=productDetails.length;i++)
        {
                if(filter=="Ascending")
                
                {
                        if(filter2=="Company")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Company.toUpperCase();
                                 let b=y.Company.toUpperCase();
                                 return a==b?0:a>b?1:-1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
       
                        }
                        if(filter2=="Model")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Model.toUpperCase();
                                 let b=y.Model.toUpperCase();
                                 return a==b?0:a>b?1:-1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
       
                        }
                        if(filter2=="Memory")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Memory;
                                 let b=y.Memory;
                                 return a==b?0:a>b?1:-1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
       
                        }
                        if(filter2=="Price")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Price;
                                 let b=y.Price;
                                 return a==b?0:a>b?1:-1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
       
                        }
                }
                if(filter=="Decending")
                
                {
                        if(filter2=="Company")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Company.toUpperCase();
                                 let b=y.Company.toUpperCase();
                                 return a==b?0:a>b?-1:1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
       
                        }
                        if(filter2=="Model")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Model.toUpperCase();
                                 let b=y.Model.toUpperCase();
                                 return a==b?0:a>b?-1:1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
                        }
                        if(filter2=="Price")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Price;
                                 let b=y.Price;
                                 return a==b?0:a>b?-1:1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
                        }
                        if(filter2=="Memory")
                        {
                         productDetails.sort(function (x,y){

                                 let a=x.Memory;
                                 let b=y.Memory;
                                 return a==b?0:a>b?-1:1;

                         });
                                var row=myTable3.insertRow();
                                var cell1=row.insertCell(0);
                                cell1.innerHTML=productDetails[i].Company;

                                var cell2=row.insertCell(1);
                                cell2.innerHTML=productDetails[i].Model;

                                var cell3=row.insertCell(2);
                                cell3.innerHTML=productDetails[i].Memory;

                                var cell4=row.insertCell(3);
                                cell4.innerHTML=productDetails[i].Price;
                        }
                          
                    }
                }
            }
        /*task-4*/
         function addToList(){
         var Table = document.getElementById("myTable4");
         Table.innerHTML="";

         var cName= document.getElementById("companyName").value;
         var cModel= document.getElementById("phModel").value;
         var cMemory= document.getElementById("phMmemory").value;
         var cPrice= document.getElementById("phPrice").value;

         productDetails.push({Company:cName , Model:cModel , Memory:cMemory , Price:cPrice});
         for(var i=0;i<=productDetails.length;i++)
                {
                        var row=myTable4.insertRow();
                        var cell1=row.insertCell(0);
                        cell1.innerHTML=productDetails[i].Company;

                        var cell2=row.insertCell(1);
                        cell2.innerHTML=productDetails[i].Model;

                        var cell3=row.insertCell(2);
                        cell3.innerHTML=productDetails[i].Memory;

                        var cell4=row.insertCell(3);
                        cell4.innerHTML=productDetails[i].Price;       
                }
        }  
/*task-5*/       
//an array that will be used to store the quantity of the products!!       
var quantity=[];
quantity[0]=0;
quantity[1]=0;
quantity[2]=0;
quantity[3]=0;
quantity[4]=0;

//amt array will store the amount of each phone (will take default as 0)
var amt=[];
amt[0]=0;
amt[1]=0;
amt[2]=0;
amt[3]=0;
amt[4]=0;

function displayQuantity(){

        var model = document.getElementById("pickItem").value;  
        
        var units = document.getElementById("enterQuantity").value;

        if(model== "Samsung Galaxy"){
                
                amt[0] = amt[0] + units*productDetails[0].Price;
                quantity[0] = quantity[0] + Number(units);
                      var row = myTable5.insertRow(0);
                    var cell1 = row.insertCell(0);
                        cell1.innerHTML = model;
                    var cell2 = row.insertCell(1);
                        cell2.innerHTML = quantity[0];
                    var cell3 = row.insertCell(2);
                        cell3.innerHTML = amt[0];
              }
        if(model== "Nokia S730"){
               
                amt[1] = amt[1] + units*productDetails[1].Price;
                quantity[1] = quantity[1] + Number(units);
                      var row = myTable5.insertRow(0);
                    var cell1 = row.insertCell(0);
                        cell1.innerHTML = model;
                    var cell2 = row.insertCell(1);
                        cell2.innerHTML = quantity[1];
                    var cell3 = row.insertCell(2);
                        cell3.innerHTML = amt[1];
              }
              if(model== "Xiaomi Note"){
               
                amt[2] = amt[2] + units*productDetails[2].Price;
                quantity[2] = quantity[2] + Number(units);
                      var row = myTable5.insertRow(0);
                    var cell1 = row.insertCell(0);
                        cell1.innerHTML = model;
                    var cell2 = row.insertCell(1);
                        cell2.innerHTML = quantity[2];
                    var cell3 = row.insertCell(2);
                        cell3.innerHTML = amt[2];
              }
              if(model== "Motoroala G10"){
               
                amt[3] = amt[3] + units*productDetails[3].Price;
                quantity[3] = quantity[3] + Number(units);
                      var row = myTable5.insertRow(0);
                    var cell1 = row.insertCell(0);
                        cell1.innerHTML = model;
                    var cell2 = row.insertCell(1);
                        cell2.innerHTML = quantity[3];
                    var cell3 = row.insertCell(2);
                        cell3.innerHTML = amt[3];
              }
              if(model== "Apple S12"){
               
                amt[4] = amt[4] + units*productDetails[4].Price;
                quantity[4] = quantity[4] + Number(units);
                      var row = myTable5.insertRow(0);
                    var cell1 = row.insertCell(0);
                        cell1.innerHTML = model;
                    var cell2 = row.insertCell(1);
                        cell2.innerHTML = quantity[4];
                    var cell3 = row.insertCell(2);
                        cell3.innerHTML = amt[4];
              }
              
    
    
        }
        function generateInvoice(){
                var total = 0;
                var Table = document.getElementById("myTable6");
                Table.innerHTML = "";
                
                for (let i = 0; i < amt.length; i++) {
                    total+= amt[i];
                }
                  var row = myTable6.insertRow(0);
                            var cell1= row.insertCell(0);
                          cell1.innerHTML = total;          
                            var cell2 = row.insertCell(0);
                          cell2.innerHTML = "       ";
                            var cell3 = row.insertCell(0);
                          cell3.innerHTML = "Total";
        }
        //task-6
        function presentProducts() {
                var Table = document.getElementById("myTable7");
                Table.innerHTML = "";
       
                for(var i=0;i<productDetails.length;i++){
                   var row = myTable7.insertRow();
               
                   var cell1 = row.insertCell(0);
                   cell1.innerHTML = productDetails[i].Company;
                   var cell2 = row.insertCell(1);
                   cell2.innerHTML = productDetails[i].Model;
                   var cell3 = row.insertCell(2);
                   cell3.innerHTML = productDetails[i].Memory;
                   var cell4 = row.insertCell(3);
                   cell4.innerHTML = productDetails[i].Price;
                               var cell5 = row.insertCell(4);
                                    
       
                               var f= document.createElement('input');
                                     f.type = 'checkbox';
                                            f.id = 'check'+i;
                   f.value= 'delete';
                   
                   cell5.appendChild(f);
                
            
               
           }
       
           
         }
         function removeProduct(){
                var Table = document.getElementById("myTable8");
                Table.innerHTML = "";
                const val = [];
                for(var i=0,j=0;i<productDetails.length;i++){
                 
                    var chk=document.getElementById('check'+i);
                    if(chk.checked==true){
                      val[j]=productDetails[i];
                      j++;
                    }
                    
                    
                }
            
                for(var i = 0; i < val.length; i++){
                    for(var j = 0; j<productDetails.length;j++){
                      if(val[i].Company == productDetails[j].Company){
                        productDetails.splice(j,1);
                        
                      }
                      else
                        continue;
            
                    }
            
                    
                }
                
                for(var i=0;i<productDetails.length;i++){
                  var row = myTable8.insertRow();
                  
                      var cell1 = row.insertCell(0);
                      cell1.innerHTML = productDetails[i].Company;
                      var cell2 = row.insertCell(1);
                      cell2.innerHTML = productDetails[i].Model;
                      var cell3 = row.insertCell(2);
                      cell3.innerHTML = productDetails[i].Memory;
                      var cell4 = row.insertCell(3);
                      cell4.innerHTML = productDetails[i].Price;
                      
                  
              }
              }            
	


              