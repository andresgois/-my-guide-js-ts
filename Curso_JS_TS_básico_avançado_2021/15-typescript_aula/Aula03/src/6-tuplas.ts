
const dados: [number, string, string?] = [1,'Andre'];
const dados1: readonly [number, string, ...string[]] = [1,'Andre'];

console.log(dados[1])
dados[0] = 100;
dados[1] = 'Priscila';
//dados.pop('ola');
console.log(dados[1])
