function addProducts()
{

pid=document.getElementById("prodid").value;
pnm=document.getElementById("prodnm").value;
pp=document.getElementById("prodp").value;

  var table = document.getElementById("myTable");
  var row = table.insertRow(myTable.rows.length-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3=row.insertcell(2);
  cell1.innerHTML = prodid;
  cell2.innerHTML = prodnm;
  cell3.innerHTML = prodp;

}
