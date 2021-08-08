// string || number || boolean

function addOrConcat(a: number | string, b: number | string){
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10,20));
console.log(addOrConcat(10,'30'));
console.log(addOrConcat('15',20));
