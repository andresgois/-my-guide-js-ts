// SEM INFERÊNCIA DE TIPO
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'outro valor'
//objetoA.chaveC = 'nova chave'


// COM INFERÊNCIA DE TIPO
const objetoB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveA = 'outro valor'
objetoB.chaveC = 'nova chave'

// INDEX UNSIGNED
const objetoC: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoC.chaveA = 'outro valor'
objetoC.chaveC = 'nova chave'
objetoC.chaveZ = '------nova chave'
