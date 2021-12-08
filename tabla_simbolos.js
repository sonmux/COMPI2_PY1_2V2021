// constantes para los tipos de datos
const TIPO_DATO = {
    //INT: 'INT',
    STRING: 'STRING',
    NUMERO: 'NUMERO',
    IDENTIFICADOR: 'IDENTIFICADOR',
    CHAR: 'CHAR',
    //DOUBLE: 'DOUBLE'
}

// funcion para crear objetos de 'tipo simbolo'
function crearSimbolo(id, tipo, valor) {
    return {
        id: id,
        tipo: tipo,
        valor: valor 
    }
}

// inicio de la clase TABLA DE SIMBOLOS

class TS {
    
    // constructor que recibe como parametro los simbolos de la tabla padre
    constructor (simbolos) {
        this._simbolos = simbolos;
    }

    /* 
        funcion para agregar un nuevo simbolo
        esta funcion se usa en la sentencia de declaracion
    */
   agregar(id, tipo) {
       const nuevoSimbolo = crearSimbolo(id, tipo);
       this._simbolos.push(nuevoSimbolo);
       //console.log(this._simbolos);
   }

   /*
        funcion para actualizar el valor de un simbolo existente
        esta funcion se usa en la sentencia de asignacion
    */
    actualizar(id, valor) { //aqui se validan los tipos
        //console.log(id);
       const simbolo = this._simbolos.filter(simbolo => simbolo.id === id)[0];
       if (simbolo) {
            if(simbolo.tipo === valor.tipo){
                if(simbolo.tipo === TIPO_DATO.NUMERO){
                    if(valor.valor instanceof String){ // se convierte si es necesario
                        simbolo.valor = parseInt(valor.valor, 10);
                    }else{
                        simbolo.valor = valor.valor;
                    }
                }else{
                    if(valor.valor instanceof Number){ // se convierte si es necesario
                        simbolo.valor = valor.valor.toString();
                    }else{
                        simbolo.valor = valor.valor;
                    }
                }
            }else{
                throw 'ERROR DE TIPOS -> variable: ' + id + ' tiene tipo: '+simbolo.tipo +' y el valor a asignar es de tipo: '+valor.tipo;
            }
       }else{
            throw 'ERROR: variable: ' + id + ' no ha sido definida';
       }
   }

   // funcion para obtener el valor de un simbolo existente
   obtener(id) {
        //console.log(this._simbolos);
        const result = this._simbolos.filter(simbolo => simbolo.id === id)[0];

        if (result) return result; //aqui devolvemos el simbolo completo
        else throw 'ERROR: variable: ' + id + ' no ha sido definida';
    }

    existe(id){
        
        const result = this._simbolos.filter(simbolo => simbolo.id === id)[0];

        if (result) return true; //aqui devolvemos el simbolo completo
        else return false;
        
    }

    imprimirTS(){
        console.log(this._simbolos);
    }

   // funcion para obtener los simbolos
   get simbolos(){
       return this._simbolos;
   }


}




// se exportan las constantes y las API
module.exports.TIPO_DATO = TIPO_DATO;
module.exports.TS = TS;