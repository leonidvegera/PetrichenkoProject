
let a = 20;                // дважды объявленные переменные с одним именем
function number (text) {   // внутри и снаружи функции выводятся разными
  alert (text);
  let a = 10;
  console.log(a);
}
//number('Asshole');
console.log(a);

// --------------------------------------------------

function makeVarGlob () {
  let num = 66;
  return num;
}
let globalVar = makeVarGlob();  // переменная, которая локальную переменную num делает глобальной
console.log(globalVar);


function makeVarGlob1 () {  // переменная num объявляется в разных функциях несколько раз
  let num = 88;             // она локальная, поэтому проходит
  return num;
}
let globalVar1 = makeVarGlob1();
console.log(globalVar1);

// --------------------------------------------------

let account = (a, b) => a * b;  // стрелочная функция
console.log(account(3,8));

// --------------------------------------------------

let val = 7;       // функция которая вызывает функцию. тут нужно разобраться
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);