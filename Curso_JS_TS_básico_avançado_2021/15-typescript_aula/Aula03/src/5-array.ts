// Array<T> - t[]

export function multiplicaArgs(...args: Array<number>):number{
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplicaArgs(1,2,3,4);
console.log(result);

export function concatenaString(...args: string[]): string{
  return args.reduce((acc, valor) => acc + valor);
}

const result2 = concatenaString('a','b','c');
console.log(result2);

export function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result3 = toUpper('a','b','c');
console.log(result3);
