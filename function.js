// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
  
}
// Only change code above this line