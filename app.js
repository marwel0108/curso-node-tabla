const { crearArchivo } = require('./helpers/multiplicar')
require('colors');
const argv = require('./config/yargs');




crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));

//console.log(process.argv);
//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base = 5] = arg3.split('=')
//console.log(base);

// const base = 4;