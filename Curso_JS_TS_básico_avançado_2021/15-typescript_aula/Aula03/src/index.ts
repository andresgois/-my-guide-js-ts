// type anotation
/** eslint-disable */
let jump: string = 'luiz';
let age: number = 30;
let adult: boolean = true;
let symbols: symbol = Symbol('qualquer-symbol');

// Arrays
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfStrings: Array<string> = ['carro','avião'];

let arrayOfNumbers2:number[] = [1,2,3];
let arrayOfStrings2: string[] = ['carro','avião'];

// Objetos
let peopple: {name: string, age: number, adult?:boolean} = {
  age: 30,
  name: 'Andre'
};

console.log(peopple.age);

// Funções
function sum(x: number, y: number){
  return x+y;
}
