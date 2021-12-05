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

// se crea una tabla de simbolos GLOBAL para iniciar con el interprete
const tsGolbal = new TS([]);

// se procesan las instrucciones reconocidas en el AST
procesarBloque(ast, tsGolbal);

//#region reconocimiento de instrucciones
//-----------funcion principal encargada de recorrer las instrucciones en un bloque, identificarlas y procesarlas
function procesarBloque(instrucciones, tablaDeSimbolos) {
    instrucciones.forEach(instruccion => {
        
        if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            // se procesa la instruccion de declaracion
            procesarDeclaracion(instruccion, tablaDeSimbolos);
        } else {
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

function procesarExpresionNumerica(expresion, tablaDeSimbolos){
    if(expresion.tipo === TIPO_OPERACION.NEGATIVO) {
        //es un valor negativo
        //se niega el valor del numero para que sea un negativo
        const valor = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos).valor //resolvemos el operando

        //retornamos el valor negado
        const res = valor * -1;
        return {valor: res, tipo: TIPO_DATO.INT};
    }else if(expresion.tipo === TIPO_OPERACION.SUMA || TIPO_OPERACION.RESTA || TIPO_OPERACION.MULTIPLICACION || TIPO_OPERACION.DIVISION) {
        // es para una operacion aritmetica
        // en este caso se procesan los operandos antes de realizar la operacion
        // se llama recursivamente esta funcion para resolver los valores de los operandos
        let valorIzq = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos); // se resuelve el operando izquierdo
        let valorDer = procesarExpresionNumerica(expresion.operandoDer, tablaDeSimbolos); // se resuelve el operando derecho
        if(valorIzq.tipo!==TIPO_DATO.INT || valorDer.tipo!==TIPO_DATO.INT){
            throw 'ERROR: se esperaban expresiones numericas para ejecutar la: ' + expresion.tipo;
        }else{
            valorIzq = valorIzq.valor;
            valorDer = valorDer.valor;
        }

        if(expresion.tipo === TIPO_OPERACION.SUMA){
            const res = valorIzq + valorDer;
            return {valor: res, tipo: TIPO_DATO.INT};
        }
        if(expresion.tipo === TIPO_OPERACION.resta){
            const res = valorIzq - valorDer;
            return {valor: res, tipo: TIPO_DATO.INT};
        }
        if(expresion.tipo === TIPO_OPERACION.MULTIPLICACION){
            const res = valorIzq * valorDer;
            return {valor: res, tipo: TIPO_DATO.INT};
        }
        if(expresion.tipo === TIPO_OPERACION.DIVISION){
            if(valorDer === 0){
                throw 'ERROR: la division entre 0 da como resultado: '+valorIzq/valorDer;
            }else{
                const res = valorIzq / valorDer;
                return {valor: res, tipo: TIPO_DATO.INT};
            }
            
        }
    }else if(expresion.tipo === TIPO_VALOR.INT){
        // es un valor numerico
        // se retorna el valor obtenido del parser directamente
        return {valor: expresion.valor, tipo: TIPO_DATO.INT};
    }else if(expresion.tipo === TIPO_VALOR.IDENTIFICADOR){
        // es un identificador
        // obtenemos el valor del identificador de la tabla de simbolos
        const sym = tablaDeSimbolos.obtener(expresion.valor);
        return {valor: sym.valor, tipo: sym.tipo};
    }else{
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
    if(expresion.tipo === TIPO_OPERACION.CONCATENAR){
        //es una operacion de concatenacion
        //se realizan las operaciones antes de concatenar
        //se llama la funcion de forma recursiva para resolver los valores de los operandos
        const cadIzq = procesarExpresionCadena(expresion.operandoIzq, tablaDeSimbolos).valor; // se resuelve el operando izquierod
        const cadDer = procesarExpresionCadena(expresion.operandoDer, tablaDeSimbolos).valor; // se resuelve el operando derecho
        // se retorna el valor de la concatenacion
        const res= cadIzq + cadDer;
        return {valor: res, tipo: TIPO_DATO.STRING};
    }else if (expresion.tipo === TIPO_VALOR.STRING){
        //es una cadena
        //solo se devuelve el valor obtenido por el parser
        return {valor:expresion.valor, tipo: TIPO_DATO.STRING};
    }else{
        //es una expresion numerica
        //se manda a llamar a la funcion que realiza las expresiones numericas
        //retornamos el valor de la cadena
        return procesarExpresionNumerica(expresion, tablaDeSimbolos);
    }
}

//#endregion


//funcion encargada de procesar la instruccion de declaracion
function procesarDeclaracion(instruccion, tablaDeSimbolos){
    tablaDeSimbolos.agregar(instruccion.identificador, instruccion.tipo_dato);
}