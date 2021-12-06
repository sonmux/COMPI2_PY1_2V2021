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
\"[^\"]*\"                  { yytext = yytext.substr(1,yyleng-2); return 'STRING'; }
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
;

//--------------------COMIENZA LA GRAMATICA PARA LA 'DECLARACION'
declaracion
	: RINT aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.NUMERO); }
	| RSTRING aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.STRING); }
	| RDOUBLE aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.NUMERO); }
	| RCHAR aux_declaracion fin	{ $$ = instruccionesAPI.nuevaDeclaracionSimple($2, TIPO_DATO.CHAR); }
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
	: expr_declaracion_string CONCAT expresion_declaracion_string   {$$ = instruccionesAPI.nuevoValor($1, $3, TIPO_OPERACION.CONCATENAR);}
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

fin
	: PTCOMA
;

/*
int b
int c,d
int f = 0
int f,d,s = 9
*/