const fs = require('fs');
require('colors');

const crearArchivo = async ( base = 5, list = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.blue } ${ base * i }\n`;
        }

        if (list) {
            console.log('=========================='.green);
            console.log('       Tabla del: ', base);
            console.log('=========================='.green);


            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}