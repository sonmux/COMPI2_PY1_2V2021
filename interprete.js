var fs = require('fs');
var parser = require('./gramatica');

//constantes para operaciones, instrucciones y valores
const TIPO_INSTRUCCION = require('./instrucciones').TIPO_INSTRUCCION;
const TIPO_OPERACION = require ('./instrucciones').TIPO_OPERACION;
const TIPO_VALOR = require('./instrucciones').TIPO_VALOR;
const instruccionesAPI = require('./instrucciones').instruccionesAPI;
//const TIPO_OPCION_SWITCH = require('./instrucciones').TIPO_OPCION_SWITCH;

// Tabla de simbolos
const TIPO_DATO = require('./tabla_simbolos').TIPO_DATO;
const TS = require('./tabla_simbolos').TS;

let ast;
try {
    // se lee el archivo de entrada
    const entrada = fs.readFileSync('./entrada.txt');
    // se envia al parser el archivo de entrada
    ast = parser.parse(entrada.toString());

    // se imprime el dontenido del AST en formato JSON
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
} catch (e){
    console.error(e);
    return;
}

// Creación de una tabla de simbolos GLOBAL para iniciar con el interprete
const tsGlobal = new TS([]);

// Procesamos las instrucciones reconocidas en nuestro AST
procesarBloque(ast, tsGlobal);

//#region reconocimiento de instrucciones
//-----------funcion principal encargada de recorrer las instrucciones en un bloque, identificarlas y procesarlas
function procesarBloque(instrucciones, tablaDeSimbolos) {
    instrucciones.forEach(instruccion => {
        
        if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            // se procesa la instruccion de declaracion
            procesarDeclaracion(instruccion, tablaDeSimbolos);
        } else if(instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION){
            // se procesa la instruccion de asignacion
            procesarAsignacion(instruccion, tablaDeSimbolos);
        }else if( instruccion.tipo === TIPO_INSTRUCCION.DECLARACION_ASIGNACION){
            // se procesa una declaracion con asignacion
            procesarDeclaracionAsignacion(instruccion, tablaDeSimbolos);
        }else {
            throw 'ERROR: tipo de instrucción no válido: ' + instruccion;
        }
    });
}
//#endregion

//#region procesar expresion numerica
/*
    De acuerdo con nuestra gramática, aqui, expresión puede ser una operación aritmética binaria (SUMA, RESTA, MULTIPLICACION, DIVISION),
    na operación aritmética unaria (NEGATIVO) o un valor correspondiente a un NUMERO o a un IDENTIFICADOR
    Evaluamos cada caso para resolver a un valor tipo número de acuerdo al tipo de operación.
*/

function procesarExpresionNumerica(expresion, tablaDeSimbolos) {
    if (expresion.tipo === TIPO_OPERACION.NEGATIVO) {
        // Es un valor negado.
        // En este caso necesitamos procesar el valor del operando para poder negar su valor.
        // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
        const valor = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos).valor;     // resolvemos el operando
        
        // Retornamos el valor negado.
        const res= valor * -1;
        return {valor: res, tipo: TIPO_DATO.NUMERO};
    } else if (expresion.tipo === TIPO_OPERACION.SUMA 
        || expresion.tipo === TIPO_OPERACION.RESTA
        || expresion.tipo === TIPO_OPERACION.MULTIPLICACION
        || expresion.tipo === TIPO_OPERACION.DIVISION) {
        // Es una operación aritmética.
        // En este caso necesitamos procesar los operandos antes de realizar la operación.
        // Para esto incovacmos (recursivamente) esta función para resolver los valores de los operandos.
        let valorIzq = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
        let valorDer = procesarExpresionNumerica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
        if(valorIzq.tipo!==TIPO_DATO.NUMERO || valorDer.tipo!==TIPO_DATO.NUMERO){
            throw 'ERROR: se esperaban expresiones numericas para ejecutar la: ' + expresion.tipo;
        }else{
            valorIzq=valorIzq.valor;
            valorDer=valorDer.valor;
        }
        if (expresion.tipo === TIPO_OPERACION.SUMA){
            const res= valorIzq + valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.RESTA) {
            const res= valorIzq - valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.MULTIPLICACION) {
            const res= valorIzq * valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.DIVISION) {
            if(valorDer === 0){
                throw 'ERROR: la division entre 0 da como resultado: '+valorIzq/valorDer;
            }else{
                const res= valorIzq / valorDer;
                return {valor: res, tipo: TIPO_DATO.NUMERO };
            }
        };

    } else if (expresion.tipo === TIPO_VALOR.NUMERO) {
        // Es un valor numérico.
        // En este caso únicamente retornamos el valor obtenido por el parser directamente.
        return {valor: expresion.valor, tipo: TIPO_DATO.NUMERO };
    } else if (expresion.tipo === TIPO_VALOR.IDENTIFICADOR) {
        // Es un identificador.
        // Obtenemos el valor de la tabla de simbolos
        //onsole.log(expresion.valor);
        const sym = tablaDeSimbolos.obtener(expresion.valor);
        return {valor: sym.valor, tipo: sym.tipo};
    } else {
        throw 'ERROR: expresión numérica no válida: ' + expresion;
    }
}
   

//#endregion

//#region proocesar concatenacion de cadenas

/*
    De acuerdo con nuestra gramática, aqui, expresión puede ser una operacion CONCATENACION, CADENA o una expresión numérica
    Evaluamos cada caso para resolver a un valor tipo cadena de acuerdo al tipo de operación.
*/
function procesarExpresionCadena(expresion, tablaDeSimbolos) {
    if (expresion.tipo === TIPO_OPERACION.CONCATENAR) {
        // Es una operación de concatenación.
        // En este caso necesitamos procesar los operandos antes de realizar la concatenación.
        // Para esto invocamos (recursivamente) esta función para resolver los valores de los operandos.
        const cadIzq = procesarExpresionCadena(expresion.operandoIzq, tablaDeSimbolos).valor;      // resolvemos el operando izquierdo.
        const cadDer = procesarExpresionCadena(expresion.operandoDer, tablaDeSimbolos).valor;      // resolvemos el operando derecho.
        // Retornamos el resultado de la operación de concatenación.
        const res=cadIzq + cadDer;
        return {valor: res, tipo: TIPO_DATO.STRING};   

    } else if (expresion.tipo === TIPO_VALOR.STRING) {
        // Es una cadena.
        // En este caso únicamente retornamos el valor obtenido por el parser directamente.
        return {valor: expresion.valor, tipo: TIPO_DATO.STRING };
    } else {
        // Es una epresión numérica.
        // En este caso invocamos la función que se encarga de procesar las expresiones numéricas
        // y retornamos su valor en cadena.
        return procesarExpresionNumerica(expresion, tablaDeSimbolos);
    }
}

//#endregion


//funcion encargada de procesar la instruccion de declaracion
function procesarDeclaracion(instruccion, tablaDeSimbolos){
    instruccion.identificador.forEach(variable => {
        if(!tablaDeSimbolos.existe(variable)){
            tablaDeSimbolos.agregar([variable], instruccion.tipo_dato);
        }else{
            console.log('no se puede declarar la variable \''+ variable + '\' el nombre de esa variable ya esta en uso')
        }
    });
}

function procesarAsignacion(instruccion, tablaDeSimbolos) {
    const valor = procesarExpresionCadena(instruccion.expresionNumerica, tablaDeSimbolos); //retorna el tipo y el valor
    tablaDeSimbolos.actualizar(instruccion.identificador, valor);
}

function procesarDeclaracionAsignacion(instruccion, tablaDeSimbolos) {
    //console.log(instruccion.tipo_dato);
    if(!tablaDeSimbolos.existe(instruccion.identificador)){
        tablaDeSimbolos.agregar(instruccion.identificador, instruccion.tipo_dato);
        
        //console.log(instruccion);
        const valor = procesarExpresionCadena(instruccion.expresionNumerica, tablaDeSimbolos);
        //console.log(valor);
        tablaDeSimbolos.actualizar(instruccion.identificador, valor);
        tablaDeSimbolos.imprimirTS();
    }else{
        console.log('no se puede declarar la variable \''+ variable + '\' el nombre de esa variable ya esta en uso')
    }
}