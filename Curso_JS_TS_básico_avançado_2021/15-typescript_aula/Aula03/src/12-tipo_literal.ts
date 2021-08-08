let x = 10;

const y = 10;
let a:100 = 100;
// como uma constante
//a = 20;


const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'miranda',
};
//pessoa.nome = 'João';
console.log(pessoa.nome);

function escolha(cor: 'Vermelho' | 'Azul' | 'Verde'): string{
  return cor;
}

console.log(escolha('Vermelho'))
export default 1;
