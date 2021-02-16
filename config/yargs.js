const argv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'La base de la tabla de multiplicar'
                        },
                        'h': {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Hasta qué numero se multiplicará la base'
                        }
                        ,
                        'l': {
                            alias: 'list',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        }
                    })
                    .check( (argv, options) => {
                        if( isNaN(argv.b) ) {
                            throw 'Base debe ser un número';
                        }
                        
                        return true;
                    })
                    .argv;

module.exports = argv;