
var newArr = [];
function destroy(arr){
  var args = Array.from(arguments);
  args.splice(0,1);
  for(var i = 0; i< arr.length;i++){
    if(!args.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//console.log(destroy([1,2,3,4],4,3));

// OR This

function destroy2(arr){
  var args = Array.from(arguments);
  args.splice(0,1);

  return arr.filter(function(currentArrayNumber){
    return !args.includes(currentArrayNumber);
  })
}

console.log(destroy2([1,2,3,4],3,4));
