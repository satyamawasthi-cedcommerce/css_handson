/*task-1*/
function productCredentials()
{
    var productDetails=[];

    productDetails[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    productDetails[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    productDetails[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    productDetails[3]={Company:"Motorola",Model:"G10",Memory:"32",Price:"15000"};
    productDetails[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};
    for(var i=0;i<=productDetails.length;i++)
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
var productDetails=[];

    productDetails[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    productDetails[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    productDetails[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    productDetails[3]={Company:"Motorola",Model:"G10",Memory:"32",Price:"15000"};
    productDetails[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};

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

function filterFunction()
{
    var productDetails=[];

    productDetails[0]={Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000};
    productDetails[1]={Company:"Nokia",Model:"S730",Memory:128,Price:22000};
    productDetails[2]={Company:"Xiaomi",Model:"Note",Memory:32,Price:12000};
    productDetails[3]={Company:"Motorola",Model:"G10",Memory:32,Price:15000};
    productDetails[4]={Company:"Apple",Model:"S12",Memory:64,Price:25000};


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
                else(filter=="Decending")
                
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
                }

      
                                                
}
}


