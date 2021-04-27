/* 1
Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */
$(document).ready(function(){
  var arrTeam = [];
  var strPlayer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var content ="";

  var namePlayer = ("HYT" + generatorRandomNumber(100,999));
  var pointPlayer = generatorRandomNumber(0,50);
  var pointThreePlayer = generatorRandomNumber(0,100);
  
  console.log(generatorRandomStr(strPlayer,3));
  

  //funzioni
  function playerTeam (target,player,averagePointsPlayer,averageOfThreePointsPlayer){
     target.push({
       codice : player,
       averagePoints : averagePointsPlayer,
       averageOfThreePoints : averageOfThreePointsPlayer,
     })
  }

  function generatorRandomNumber (min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
  }
  
  function generatorRandomStr (str,numberText){
    for ( var i = 0; i = numberText; i++ ) {
      return content += str.charAt(Math.floor(Math.random() * str.length));
    }
  }
});