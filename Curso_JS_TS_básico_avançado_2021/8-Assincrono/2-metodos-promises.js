function aleatorio(min, max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo)
{
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    })
}
// Promise.all -> retorna todas as promises
const promise = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000);
    'Outro valor'
];
Promise.all(promise)
    .then(function(v){
        console.log(v)
    })
    .catch(e => {
        console.log(e)
    });
// Promise.race -> entrega o primeiro a ser resolvido
const promise2 = [
    esperaAi('Promise 11', 3000),
    esperaAi('Promise 12', 500),
    esperaAi('Promise 13', 200),
];
Promise.race(promise2)
    .then(function(v){
        console.log(v)
    })
    .catch(e => {
        console.log(e)
    });

// Promise.resolve || Promise.reject 
function baixaPagina(){
    const emCache = true;
    if(emCache){
        //return Promise.resolve('Página em cache');
        return Promise.reject('Página não existe mais');
    }else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

