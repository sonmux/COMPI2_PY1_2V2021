/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,14],$V1=[1,15],$V2=[1,13],$V3=[1,8],$V4=[1,9],$V5=[1,10],$V6=[1,11],$V7=[1,12],$V8=[5,11,16,17,20,23,25,26,27,28],$V9=[1,19],$Va=[1,28],$Vb=[1,29],$Vc=[30,51],$Vd=[1,37],$Ve=[1,41],$Vf=[1,35],$Vg=[1,38],$Vh=[1,39],$Vi=[1,40],$Vj=[1,42],$Vk=[1,53],$Vl=[14,30,31,46,47,48,49,51],$Vm=[2,24],$Vn=[1,55],$Vo=[1,54],$Vp=[1,56],$Vq=[1,57],$Vr=[14,30,31,34,35,36,37,42,43,44,45,46,47,48,49,51],$Vs=[14,30,31,34,35,42,43,44,45,46,47,48,49,51],$Vt=[14,48,49];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"instrucciones":4,"EOF":5,"instruccion":6,"declaracion":7,"asignacion":8,"if":9,"print":10,"RPRINT":11,"PARIZQ":12,"expr_declaracion_string":13,"PARDER":14,"fin":15,"RPRINTLN":16,"RIF":17,"expresion_logica":18,"LLAVIZQ":19,"LLAVDER":20,"RELSE":21,"listaInstrucciones":22,"RINT":23,"aux_declaracion":24,"RSTRING":25,"RDOUBLE":26,"RCHAR":27,"IDENTIFICADOR":28,"IGUAL":29,"COMA":30,"CONCAT":31,"STRING":32,"expr_declaracion":33,"MENOS":34,"MAS":35,"POR":36,"DIVIDIDO":37,"ENTERO":38,"DECIMAL":39,"CHAR":40,"expresion_relacional":41,"MAYQUE":42,"MENQUE":43,"MAYIGQUE":44,"MENIGQUE":45,"DOBLEIG":46,"NOIG":47,"AND":48,"OR":49,"NOT":50,"PTCOMA":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"RPRINT",12:"PARIZQ",14:"PARDER",16:"RPRINTLN",17:"RIF",19:"LLAVIZQ",20:"LLAVDER",21:"RELSE",23:"RINT",25:"RSTRING",26:"RDOUBLE",27:"RCHAR",28:"IDENTIFICADOR",29:"IGUAL",30:"COMA",31:"CONCAT",32:"STRING",34:"MENOS",35:"MAS",36:"POR",37:"DIVIDIDO",38:"ENTERO",39:"DECIMAL",40:"CHAR",42:"MAYQUE",43:"MENQUE",44:"MAYIGQUE",45:"MENIGQUE",46:"DOBLEIG",47:"NOIG",48:"AND",49:"OR",50:"NOT",51:"PTCOMA"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[10,5],[10,5],[9,7],[9,11],[22,1],[7,3],[7,3],[7,3],[7,3],[8,4],[24,1],[24,3],[24,3],[24,5],[13,3],[13,1],[13,1],[33,3],[33,2],[33,3],[33,3],[33,3],[33,3],[33,1],[33,1],[33,1],[33,1],[41,3],[41,3],[41,3],[41,3],[41,3],[41,3],[18,3],[18,3],[18,2],[18,1],[15,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        // Retorna el AST luego de reconocer todo el archivo de entrada
        return $$[$0-1];
    
break;
case 2:
$$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 3:
this.$ = [$$[$0]];
break;
case 4: case 5: case 6: case 24:
this.$ = $$[$0];
break;
case 7: case 12:
 this.$ = $$[$0];
break;
case 8:
 this.$ = instruccionesAPI.nuevoImprimir($$[$0-2]); 
break;
case 9:
 this.$ = instruccionesAPI.nuevoImprimirLN($$[$0-2]); 
break;
case 10:
 this.$ = instruccionesAPI.nuevoIf($$[$0-4], $$[$0-1]);
break;
case 11:
 this.$ = instruccionesAPI.nuevoIfElse($$[$0-8], $$[$0-5], $$[$0-1]);
break;
case 13: case 15:
 this.$ = instruccionesAPI.nuevaDeclaracionSimple($$[$0-1], TIPO_DATO.NUMERO); 
break;
case 14:
 this.$ = instruccionesAPI.nuevaDeclaracionSimple($$[$0-1], TIPO_DATO.STRING); 
break;
case 16:
 this.$ = instruccionesAPI.nuevaDeclaracionSimple($$[$0-1], TIPO_DATO.CHAR); 
break;
case 17:
 this.$ = instruccionesAPI.nuevaAsignacion([$$[$0-3]], $$[$0-1]); 
break;
case 18:
this.$ = [[$$[$0]],null];
break;
case 19:
this.$ = [[$$[$0-2]], $$[$0]];
break;
case 20:
$$[$0-2][0].push($$[$0]); this.$ = $$[$0-2];
break;
case 21:
$$[$0-4].push($$[$0-2]); this.$ = [[$$[$0-4]], $$[$0]];
break;
case 22:
this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.CONCATENAR);
break;
case 23:
this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.STRING);
break;
case 25:
this.$ = $$[$0-1];
break;
case 26:
this.$ = instruccionesAPI.nuevaOperacionUnitaria($$[$0], TIPO_OPERACION.NEGATIVO);
break;
case 27:
this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.SUMA);
break;
case 28:
this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.RESTA);
break;
case 29:
this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MULTIPLICACION);
break;
case 30:
this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DIVISION);
break;
case 31: case 32:
this.$ = instruccionesAPI.nuevoValor(Number($$[$0]), TIPO_VALOR.NUMERO);
break;
case 33:
this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.IDENTIFICADOR);
break;
case 34:
this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.CHAR);
break;
case 35:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_QUE); 
break;
case 36:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_QUE); 
break;
case 37:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_IGUAL); 
break;
case 38:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_IGUAL); 
break;
case 39:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DOBLE_IGUAL); 
break;
case 40:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.NO_IGUAL); 
break;
case 41:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.TIPO_OPERACION.AND); 
break;
case 42:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.OR); 
break;
case 43:
 this.$ = instruccionesAPI.nuevaOperacionBinaria($$[$0-1], $$[$01], TIPO_OPERACION.NOT); 
break;
case 44:
 this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},{1:[3]},{5:[1,16],6:17,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},o($V8,[2,3]),o($V8,[2,4]),o($V8,[2,5]),o($V8,[2,6]),o($V8,[2,7]),{24:18,28:$V9},{24:20,28:$V9},{24:21,28:$V9},{24:22,28:$V9},{29:[1,23]},{12:[1,24]},{12:[1,25]},{12:[1,26]},{1:[2,1]},o($V8,[2,2]),{15:27,30:$Va,51:$Vb},o($Vc,[2,18],{29:[1,30]}),{15:31,30:$Va,51:$Vb},{15:32,30:$Va,51:$Vb},{15:33,30:$Va,51:$Vb},{12:$Vd,13:34,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,13:47,18:43,28:$Ve,32:$Vf,33:46,34:$Vg,38:$Vh,39:$Vi,40:$Vj,41:44,50:[1,45]},{12:$Vd,13:48,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,13:49,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},o($V8,[2,13]),{28:[1,50]},o($V8,[2,45]),{12:$Vd,13:51,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},o($V8,[2,14]),o($V8,[2,15]),o($V8,[2,16]),{15:52,31:$Vk,51:$Vb},o($Vl,[2,23]),o($Vl,$Vm,{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),{12:$Vd,28:$Ve,33:58,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:59,34:$Vg,38:$Vh,39:$Vi,40:$Vj},o($Vr,[2,31]),o($Vr,[2,32]),o($Vr,[2,33]),o($Vr,[2,34]),{14:[1,60]},{14:[2,44],48:[1,61],49:[1,62]},{12:$Vd,13:47,28:$Ve,32:$Vf,33:46,34:$Vg,38:$Vh,39:$Vi,40:$Vj,41:63},o([31,46,47],$Vm,{34:$Vn,35:$Vo,36:$Vp,37:$Vq,42:[1,64],43:[1,65],44:[1,66],45:[1,67]}),{31:$Vk,46:[1,68],47:[1,69]},{14:[1,70],31:$Vk},{14:[1,71],31:$Vk},o($Vc,[2,20],{29:[1,72]}),o($Vc,[2,19],{31:$Vk}),o($V8,[2,17]),{12:$Vd,13:73,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:74,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:75,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:76,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:77,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{14:[1,78],34:$Vn,35:$Vo,36:$Vp,37:$Vq},o($Vs,[2,26],{36:$Vp,37:$Vq}),{19:[1,79]},{12:$Vd,13:47,28:$Ve,32:$Vf,33:46,34:$Vg,38:$Vh,39:$Vi,40:$Vj,41:80},{12:$Vd,13:47,28:$Ve,32:$Vf,33:46,34:$Vg,38:$Vh,39:$Vi,40:$Vj,41:81},{14:[2,43]},{12:$Vd,28:$Ve,33:82,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:83,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:84,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,28:$Ve,33:85,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,13:86,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{12:$Vd,13:87,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},{15:88,51:$Vb},{15:89,51:$Vb},{12:$Vd,13:90,28:$Ve,32:$Vf,33:36,34:$Vg,38:$Vh,39:$Vi,40:$Vj},o($Vl,[2,22]),o($Vs,[2,27],{36:$Vp,37:$Vq}),o($Vs,[2,28],{36:$Vp,37:$Vq}),o($Vr,[2,29]),o($Vr,[2,30]),o($Vr,[2,25]),{4:91,6:3,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},{14:[2,41]},{14:[2,42]},o($Vt,[2,35],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($Vt,[2,36],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($Vt,[2,37],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($Vt,[2,38],{34:$Vn,35:$Vo,36:$Vp,37:$Vq}),o($Vt,[2,39],{31:$Vk}),o($Vt,[2,40],{31:$Vk}),o($V8,[2,8]),o($V8,[2,9]),o($Vc,[2,21],{31:$Vk}),{6:17,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,20:[1,92],23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},o($V8,[2,10],{21:[1,93]}),{19:[1,94]},{4:95,6:3,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},{6:17,7:4,8:5,9:6,10:7,11:$V0,16:$V1,17:$V2,20:[1,96],23:$V3,25:$V4,26:$V5,27:$V6,28:$V7},o($V8,[2,11])],
defaultActions: {16:[2,1],63:[2,43],80:[2,41],81:[2,42]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// para ignorar espacios en blanco
break;
case 1:// comentario simple línea
break;
case 2:// comentario multi lineas
break;
case 3:return 23;
break;
case 4:return 25;
break;
case 5:return 26;
break;
case 6:return 27;
break;
case 7:return 'RNULL';
break;
case 8:return 17;
break;
case 9:return 21;
break;
case 10:return 11;
break;
case 11:return 16;
break;
case 12:return 'DOSPTS';
break;
case 13:return 51;
break;
case 14:return 19;
break;
case 15:return 20;
break;
case 16:return 12;
break;
case 17:return 14;
break;
case 18:return 35;
break;
case 19:return 34;
break;
case 20:return 36;
break;
case 21:return 37;
break;
case 22:return 'MODULO';
break;
case 23:return 45;
break;
case 24:return 44;
break;
case 25:return 46;
break;
case 26:return 47;
break;
case 27:return 43;
break;
case 28:return 42;
break;
case 29:return 31;
break;
case 30:return 'REPETICION';
break;
case 31:return 29;
break;
case 32:return 'PUNTO';
break;
case 33:return 30;
break;
case 34:return 49;
break;
case 35:return 48;
break;
case 36:return 50;
break;
case 37:return 'COPYARREGLO';
break;
case 38:return 'IMPEXPRESION';
break;
case 39: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 40; 
break;
case 40: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 32; 
break;
case 41:return 39;
break;
case 42:return 38;
break;
case 43:return 28;
break;
case 44:return 5;
break;
case 45: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:null\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:print\b)/i,/^(?:println\b)/i,/^(?::)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:&)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:\.)/i,/^(?:,)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:#)/i,/^(?:\$)/i,/^(?:[\'][a-zA-Z][\'])/i,/^(?:"[^\"]*")/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}