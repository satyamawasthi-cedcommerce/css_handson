function addProductsToCart()
{
let id=document.getElementById("prodid").value;
let nm=document.getElementById("prodnm").value;
let p=document.getElementById("prodp").value;


  var table = document.getElementById("myTable");
  
  var row = table.insertRow(table.rows.length-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = id;
  cell2.innerHTML = nm;
  cell3.innerHTML = p;

}
