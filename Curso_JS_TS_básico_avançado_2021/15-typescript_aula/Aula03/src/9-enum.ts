enum Cores{
  VERMELHO,
  VERDE,
  AZUL
}

//console.log(Cores)


function escolhaCor(cor: Cores): void{
  console.log(Cores[cor]);
}

escolhaCor(Cores.AZUL);
