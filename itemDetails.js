function displayItemDetails()
{
var productDetails=[];

    productDetails[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    productDetails[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    productDetails[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    productDetails[3]={Company:"Motorola",Model:"G10",Memory:"32",Price:"15000"};
    productDetails[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};


  for(var i=0;i<=productDetails.length;i++)
  {
    var row = myTable.insertRow();
    
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