function rot13(str) { // LBH QVQ VG!
  var newstr = str.split('');
  for(var i = 0; i< newstr.length;i++){
    newstr[i] = newstr[i].charCodeAt(0);
  }
  for(var j = 0; j < newstr.length; j++){
    if(newstr[j] > 77){
      newstr[j] = String.fromCharCode(newstr[j]- 13);
    }
    else if(newstr[j] <= 77 && newstr[j] >= 65){
      newstr[j] = String.fromCharCode(newstr[j]+ 13);
    }
    else{
      newstr[j] = String.fromCharCode(newstr[j]);
    }
  }
  return newstr.join('');
}

// Change the inputs below to test
console.log((rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")));
