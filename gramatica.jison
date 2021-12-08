%lex

%options case-insensitive

%%

\s+		                                    // para ignorar espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]	        // comentario multi lineas

"int"				return 'RINT';
"string"			return 'RSTRING';
"double"			return 'RDOUBLE';
"char"			    return 'RCHAR';
"null"  			return 'RNULL';
"if" 	 			return 'RIF';
"else"  			return 'RELSE';
"print"  			return 'RPRINT';
"println"  			return 'RPRINTLN';

":"					return 'DOSPTS';
";"					return 'PTCOMA';
"{"					return 'LLAVIZQ';
"}"					return 'LLAVDER';
"("					return 'PARIZQ';
")"					return 'PARDER';

"+"					return 'MAS';
"-"					return 'MENOS';
"*"					return 'POR';
"/"					return 'DIVIDIDO';
"%"					return 'MODULO';

"<="				return 'MENIGQUE';
">="				return 'MAYIGQUE';
"=="				return 'DOBLEIG';
"!="				return 'NOIG';
"<"					return 'MENQUE';
">"					return 'MAYQUE';

"&"					return 'CONCAT';
"^"					return 'REPETICION';
"="					return 'IGUAL';
"."					return 'PUNTO';
","					return 'COMA';

"||"				return 'OR';
"&&"				return 'AND';
"!"					return 'NOT';

"#"					return 'COPYARREGLO';
"$"					return 'IMPEXPRESION';


[\'][a-zA-Z][\']            { yytext = yytext.substr(1,yyleng-2); return 'CHAR'; }
\"[^\"]*\"                 { yytext = yytext.substr(1,yyleng-2); return 'STRING'; }
[0-9]+("."[0-9]+)\b        return 'DECIMAL';
//-?[0-9]+\b                  return 'ENTERO';
[0-9]+\b                    return 'ENTERO';
([a-zA-Z])[a-zA-Z0-9_]*     return 'IDENTIFICADOR';


<<EOF>>				return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex



%{
	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
%}


// Asociación de operadores y precedencia
%left 'CONCAT'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS

%start INICIO

%% 

// Inicio de la gramatica
INICIO 
    : instrucciones EOF {
        // Retorna el AST luego de reconocer todo el archivo de entrada
        return $1;
    }
;

instrucciones
    : instrucciones instruccion {$1.push($2); $$ = $1;}
    |instruccion    {$$ = [$1];}
;

instruccion
/*declaracion*/ : declaracion   {$$ = $1;}
				| asignacion {$$ = $1;}
				| if	{$$ = $1;}
				| print { $$ = $1;}
;

print 
	: RPRINT PARIZQ expr_declaracion_string PARDER fin { $$ = instruccionesAPI.nuevoImprimir($3); }
	| RPRINTLN PARIZQ expr_declaracion_string PARDER fin { $$ = instruccionesAPI.nuevoImprimirLN($3); }
;

if 
	: RIF PARIZQ expresion_logica PARDER LLAVIZQ instrucciones LLAVDER { $$ = instruccionesAPI.nuevoIf($3, $6);}
	| RIF PARIZQ expresion_logica PARDER LLAVIZQ instrucciones LLAVDER RELSE LLAVIZQ instrucciones LLAVDER { $$ = instruccionesAPI.nuevoIfElse($3, $6, $10);}
;

listaInstrucciones
	:	instrucciones { $$ = $1;} 
;

//--------------------COMIENZA LA GRAMATICA PARA LA 'DECLARACION'
declaracion
	: RINT aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.NUMERO); }
	| RSTRING aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.STRING); }
	| RDOUBLE aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.NUMERO); }
	| RCHAR aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.CHAR); }
;

asignacion
	: IDENTIFICADOR IGUAL expr_declaracion_string fin { $$ = instruccionesAPI.nuevaAsignacion([$1], $3); }
;

/*tipo
	:RINT
	|RSTRING
	|RDOUBLE
	|RCHAR
;*/

/*aux_declaracion_char
    : IDENTIFICADOR
    | IDENTIFICADOR COMA aux_declaracion_char
    | IDENTIFICADOR IGUAL CHAR
;
*/

aux_declaracion
	: IDENTIFICADOR {$$ = [[$1],null];}
	| IDENTIFICADOR IGUAL expr_declaracion_string   {$$ = [[$1], $3];}
	//| aux_declaracion COMA IDENTIFICADOR   {$$ = [$1, $3];}
    | aux_declaracion COMA IDENTIFICADOR   {$1[0].push($3); $$ = $1;}
	| aux_declaracion COMA IDENTIFICADOR IGUAL expr_declaracion_string   {$1.push($3); $$ = [[$1], $5];}
;

expr_declaracion_string
	: expr_declaracion_string CONCAT expr_declaracion_string   {$$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.CONCATENAR);}
	| STRING    {$$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.STRING);}
	//| CHAR  {$$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CHAR);}
	| expr_declaracion  {$$ = $1;}
;

expr_declaracion
	: PARIZQ expr_declaracion PARDER    {$$ = $2;}
	| MENOS expr_declaracion %prec UMINUS   {$$ = instruccionesAPI.nuevaOperacionUnitaria($2, TIPO_OPERACION.NEGATIVO);}
	| expr_declaracion MAS expr_declaracion {$$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.SUMA);}
	| expr_declaracion MENOS expr_declaracion   {$$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.RESTA);}
	| expr_declaracion POR expr_declaracion {$$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.MULTIPLICACION);}
	| expr_declaracion DIVIDIDO expr_declaracion    {$$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.DIVISION);}
	| ENTERO    {$$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO);}
	| DECIMAL   {$$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO);}
	| IDENTIFICADOR {$$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.IDENTIFICADOR);}
	| CHAR  {$$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CHAR);}
;

expresion_relacional
	: expr_declaracion MAYQUE expr_declaracion	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_QUE); }
	| expr_declaracion MENQUE expr_declaracion	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_QUE); }
	| expr_declaracion MAYIGQUE expr_declaracion	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_IGUAL); }
	| expr_declaracion MENIGQUE expr_declaracion	 { $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_IGUAL); }
	| expr_declaracion_string DOBLEIG expr_declaracion_string	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.DOBLE_IGUAL); }
	| expr_declaracion_string NOIG expr_declaracion_string	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.NO_IGUAL); }
;

expresion_logica
	: expresion_relacional AND expresion_relacional	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.TIPO_OPERACION.AND); }
	| expresion_relacional OR expresion_relacional	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.OR); }
	| NOT expresion_relacional	{ $$ = instruccionesAPI.nuevaOperacionBinaria($1, $3, TIPO_OPERACION.NOT); }
	| expresion_relacional	{ $$ = $1; }
;

fin
	: PTCOMA
;

/*
int b
int c,d
int f = 0
int f,d,s = 9
nuevoValor
*/