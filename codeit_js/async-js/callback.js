//function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

function printMessageWithParams(func, name) {
    console.log('Printing message...');
    func(name);
  }
  
  printMessageWithParams((name) => console.log(`Hello ${name}!`), 'Bob');
  