function aleatorio(min = 0, max = 3)
{
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

async function exec()
{
    try{
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);
    }catch(e){
        console.log(e);
    }
}

exec();
/** 3 Estados
 * Pending
 * Fulfilled
 * rejected
 */