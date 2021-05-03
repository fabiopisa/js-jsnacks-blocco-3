/* Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */
$(document).ready(function(){
 
  const arrCars = [
    {
      marca:'bmw',
      modello:'118',
      alimentazione:'diesel'
    },
    {
      marca:'bmw',
      modello:'m5',
      alimentazione:'benzina'
    },
    {
      marca:'alfa romeo',
      modello:'giulietta',
      alimentazione:'diesel'
    },
    {
      marca:'alfa romeo',
      modello:'giulia',
      alimentazione:'benzina'
    },
    {
      marca:'mercedes',
      modello:'serie c',
      alimentazione:'diesel'
    },
    {
      marca:'mercedes',
      modello:'cla',
      alimentazione:'benzina'
    },
    {
      marca:'tesla',
      modello:'model S',
      alimentazione:'elettrico'
    },
    {
      marca:'audi',
      modello:'i8',
      alimentazione:'elettrico'
    },
    {
      marca:'fiat',
      modello:'fiorino',
      alimentazione:'metano'
    },
    {
      marca:'fiat',
      modello:'multipla',
      alimentazione:'gpl'
    },
  ];

  let oilCars = [];
  let dieselCars = [];
  let ecoCars = [];
  arrCars.forEach((car) => {
   if(car.alimentazione === 'benzina'){
     oilCars.push(car);
   }else if (car.alimentazione === 'diesel'){
     dieselCars.push(car);
   }else{
     ecoCars.push(car);
   }
  });
  console.log(oilCars);
  console.log(dieselCars);
  console.log(ecoCars);
})