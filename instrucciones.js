// constantes para los 'valores' que reconoce la gramatica
const TIPO_VALOR = {
    INT: 'VAL_INT',
    DOUBLE: 'VAL_DOUBLE',
    IDENTIFICADOR: 'VAL_IDENTIFICADOR',
    STRING: 'VAL_STRING',
    CHAR: 'VAL_CHAR'
}

// constantes para los tipos de 'operaciones' que soporta la gramatica
const TIPO_OPERACION = {
    SUMA: 'OP_SUMA',
    RESTA: 'OP_RESTA',
    MULTIPLICACION: 'OP_MULTIPLICACION',
    DIVISION: 'OP_DIVISION',
    NEGATIVO: 'OP_NEGATIVO',
    MODULO: 'OP_MODULO',
    MAYOR_QUE: 'OP_MAYOR_QUE',
    MENOR_QUE: 'OP_MENOR_QUE',
    MAYOR_IGUAL: 'OP_MAYOR_IGUAL',
    MENOR_IGUAL: 'OP_MENOR_IGUAL',
    NO_IGUAL: 'OP_NO_IGUAL',
    DOBLEIG: 'OP_DOBLEIG',
    AND: 'OP_AND',
    OR: 'OP_OR',
    NOT: 'OP_NOT',
    CONCATENAR: 'OP_CONCATENAR',
    REPETICION: 'OP_REPETICION',
    IGUAL: 'OP_IGUAL',
    PUNTO: 'OP_PUNTO'
    //falta sqrt.....
}

// constantes para los tipos de 'instrucciones' validas en la gramatica
const TIPO_INSTRUCCION = {
    DECLARACION: 'INSTR_DECLARACION',
    ASIGNACION: 'INSTR_ASIGNACION'
}

// constantes para los tipos de opcion en un switch
const TIPO_OPCION_SWITCH = {
    CASO: 'CASE',
    DEFECTO: 'DEFAULT'
}

/*
    funcion encargada de crear objetos tipo operacion
    recibe los parametros del operando izquierdo, derecho y tipo del operador
*/
function nuevaOperacion(operandoIzq, operandoDer, tipo) {
    return {
        operandoIzq: operandoIzq,
        operandoDer: operandoDer,
        tipo: tipo
    }
}

//el obetivo de esta API es proveer las funciones necesarias para la construccion de operaciones e instrucciones
const instruccionesAPI = {
    // crea un nuevo objeto 'tipo valor', puede ser una cadena/numero/identificador/char
    nuevoValor: function(valor, tipo){
        return {
            tipo: tipo, 
            valor: valor
        }
    },

    // crea un nuevo objeto 'tipo operacion unitaria' para operaciones unitarias validas
    nuevaOperacionUnitaria: function(operando, tipo) {
        return nuevaOperacion(operando, undefined, tipo);
    },

    // crea un nuevo objeto 'tipo operacion binaria' para operaciones binarias validas
    nuevaOperacionBinaria: function(operandoIzq, operandoDer, tipo) {
        return nuevaOperacion(operandoIzq, operandoDer, tipo);
    },

    // crea un nuevo objeto 'tipo declaracion simple' para declaraciones sin expresion
    nuevaDeclaracionSimple: function(identificador, tipo) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            identificador: identificador[0],
            tipo_dato: tipo,
            valor: identificador[1]
        }
    }

    // crea un nuevo objeto 'tipo declaracion expresion' para declaraciones con expresiones
    /*nuevaDeclaracionExpresion: function(identificador, tipo, expresion) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            identificador: identificador,
            tipo_dato: tipo,
            expresion: expresion
        }
    }*/
}

// se exportan las constantes y la API
module.exports.TIPO_OPERACION = TIPO_OPERACION;
module.exports.TIPO_INSTRUCCION = TIPO_INSTRUCCION;
module.exports.TIPO_VALOR = TIPO_VALOR;
module.exports.instruccionesAPI = instruccionesAPI;
module.exports.TIPO_OPCION_SWITCH = TIPO_OPCION_SWITCH;