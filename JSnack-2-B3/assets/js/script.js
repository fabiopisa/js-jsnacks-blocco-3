$(document).ready(function(){
  var limit = 15;
  var sommaSmall = 0;
  var sommaLong = 0;
  var arrLong = [];
  var arrSmall = [];
  var arrCourgettes = [
    {
      varietà : "verde chiaro",
      peso : 2,
      lunghezza : 6,
    },
    {
      varietà : "verde chiaro",
      peso : 4,
      lunghezza : 10,
    },
    {
      varietà : "verde chiaro",
      peso : 1,
      lunghezza : 13,
    },
    {
      varietà : "verde chiaro",
      peso : 8,
      lunghezza : 14,
    },
    {
      varietà : "verde chiaro",
      peso : 4,
      lunghezza : 19,
    },
    {
      varietà : "verde chiaro",
      peso : 5,
      lunghezza : 9,
    },
    {
      varietà : "verde chiaro",
      peso : 2,
      lunghezza : 4,
    },
    {
      varietà : "verde chiaro",
      peso : 7,
      lunghezza : 16,
    },
    {
      varietà : "verde chiaro",
      peso : 11,
      lunghezza : 12,
    },
    {
      varietà : "verde chiaro",
      peso : 5,
      lunghezza : 17,
    },
    
  ];

  for(var courgette of arrCourgettes){
    if(courgette['lunghezza'] >= limit ){
      arrLong.push(courgette)
      console.log("long");
      for(var key in courgette){
        console.log(key + ": " + courgette[key]);
      }
      console.log("--------------------");
      sommaLong += courgette['peso'];
    }else{
      arrSmall.push(courgette);
      console.log("small");
      for(var key in courgette){
        console.log(key + ": " + courgette[key]);
      }
      console.log("--------------------");
      sommaSmall += courgette['peso'];
    }
    
  }
  console.log("zucchine corte: " + arrSmall.length);
  console.log("zucchine lunghe: " + arrLong.length);

  console.log("La somma del peso delle zucchine corte è: " + sommaSmall);
  console.log("La somma del peso delle zucchine lunghe è: " + sommaLong);

})