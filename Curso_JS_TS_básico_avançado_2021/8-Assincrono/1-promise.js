// CALLBACK
/*
function aleatorio(min, max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo, cb)
{
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', aleatorio(1,3), function (){
    esperaAi('Frase 2', aleatorio(1,3), function (){
        esperaAi('Frase 3', aleatorio(1,3));
    });
});
*/

// PROMISE
function aleatorio(min, max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo)
{
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Valor inválido'));
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

esperaAi('Frase 1', aleatorio(1,3))
        .then(r => {
            console.log(r);
            return esperaAi(25, aleatorio(1,3))
        }).then(r2 => {
            console.log(r2);
            return esperaAi('Frase 3', aleatorio(1,3))
        }).then(r3 => {
            console.log(r3);
        })
        .catch(e => {
            console.log('Error: ',e);
        });