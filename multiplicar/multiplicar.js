//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('==========================='.green);
        console.log(`=======TABLA DEL ${base}=========`.green);
        console.log('==========================='.green);
        if (!Number(base) || !Number(limite)) {
            reject(`La base "${base}" o límite "${limite}" introducida no es un número válido.`)
            return
        }

        for (let i = 1; i <= limite; i++) {
            console.log((`${base} * ${i} = ${base*i}`))
        }
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida "${base}" no es un número`);
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`)
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}