//& - AND

type TemNome = { nome: string }
type TemSobreNome = { sobrenome: string }
type TemIdade = { idade: number }

// união dos 3 tipos
type Pessoa = TemNome & TemSobreNome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Mix',
  idade: 32,
}

console.log(pessoa)

//Module mode
export { pessoa };
