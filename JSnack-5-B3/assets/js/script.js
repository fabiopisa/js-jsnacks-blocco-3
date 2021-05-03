/* 
2
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” 
*/

$(document).ready(function(){
  var arrAlfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  var a = 3;
  var b = 10;

  console.log(filterArray(arrAlfabeto,a,b));
 
  //funzioni
  function filterArray (arr, min , max){
    var arrReturn = [];

    for(var i in arrAlfabeto){
      if(i >= min && i <= max){
        arrReturn.push(arr[i]);
      }
    }

    return arrReturn
  }
})