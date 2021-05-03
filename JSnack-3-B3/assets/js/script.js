$(document).ready(function(){
  var arrLetters = [
    "a","b","c"
  ];
  var arrNumbers = [
    1,2,3
  ];
  var arrFusion = [];

  for(var i = 0; i < (arrLetters.length && arrNumbers.length); i++){
    var itemText = arrLetters[i];
    var item = arrNumbers[i]; 

    console.log(itemText);
    console.log(item);

    arrFusion.push(itemText);
    arrFusion.push(item);
  }
  console.log(arrFusion)
  
});