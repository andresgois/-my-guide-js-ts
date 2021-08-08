
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    cor?: string;
};

type RGB = 'Vermelho' | 'Verde' | 'Azul';
type CMYK = 'Cian' | 'Magenta' | 'Amarelo' | 'Preto';
type cor = RGB | CMYK;

const p: Pessoa = {
    nome: 'Andre',
    idade: 32,
    salario: 200_00,
};

export function setCorPreferida(p: Pessoa, cor: cor): Pessoa {
    return {...p, cor: cor};
}

console.log(setCorPreferida(p, 'Azul'));
console.log(p);
