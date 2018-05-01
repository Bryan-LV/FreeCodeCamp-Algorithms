function bouncer(arr){
  var newArr = [];
  for(var i =0; i < arr.length;i++){
    if(Boolean(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var x = [1, null, NaN, 2, undefined];
console.log(bouncer(x));
