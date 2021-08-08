/** RECOMENDADO */
// CONDICIONAL
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// TYPE ASSERTION
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input')  as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/** NÃO RECOMENDADO */
// TYPE ASSERTION
const body3 = (document.querySelector('body') as unknown) as number;

// NON-NULL ASSERTION(!)
const body4 = document.querySelector('body')!;
body4.style.background = 'red';
