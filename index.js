const name = [];

function writeCards(array, surprise) {
  for (let i = 0; i < array.length; i++) {
    debugger;
    name.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
   
  }
  return name;
}


function countDown(number) { 
    for (let count = 10; count >= 0; count--) { 
        console.log(count); 
    }
}