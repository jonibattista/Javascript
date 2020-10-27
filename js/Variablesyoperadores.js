///EJERCICIO 1

/*Crear dos variables numéricas y utilizar el operador suma para guardar el valor de
 la suma de ambos números en una 3er variable.*/
 var a=3;
 var b=5;
 var c=a+b;
 console.log(c); 
/*Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var first='Hello';
var second='World';
var sentence= first + second;
console.log(sentence);
/*Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
 */
var firstname='Jonatan';
var surname='Battista';
var sum= firstname.length + surname.length;
console.log(sum);

//EJERCICIO 2

/*Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).
 */
var phrase='hello people. how are you?';
console.log(phrase.toUpperCase());
/*Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).
 */
var chain='whatsapp web';
var vchain=chain.substring(0,5);
console.log(vchain);
/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en 
minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).
 */
var phrase_2='sHE READS THE NEWSPAPER EVERY DAY.'
var character_phrase=phrase_2.substring(0,1).toUpperCase();
var charac_phrase=phrase_2.substring(1,33).toLowerCase();
var result=character_phrase + charac_phrase;
console.log(result);
/*Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio en blanco y 
guardarla en una variable (utilizar indexOf).
*/
var Pchar='The newspaper is blue';
var Vindex=Pchar.indexOf(' ');
console.log(Vindex);
/*Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
 anteriores para generar un nuevo string que tenga la primera letra de ambas palabras 
 en mayúscula y las demás letras en 
minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var words_1='rELATABLE mILESTONE';
var words_2=words_1[words_1.indexOf('r')].toUpperCase();
var words_4=words_1[words_1.indexOf('m')].toUpperCase();
var words_3=words_1.substring(words_1.indexOf('r')+1,words_1.indexOf(' ')).toLowerCase();
var words_5=words_1.substring(words_1.indexOf('m')+1,words_1.length).toLowerCase();
var words_6=words_2 + words_3 +" "+ words_4 + words_5;
console.log(words_6);

//EJERCICIO 3

/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 mostrar por consola los meses 5 y 11 (utilizar console.log)
*/
var array=["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[5]);
console.log(array[11]);
/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(array.sort());
/*Agregar un elemento al principio y al final del array (utilizar unshift y push). */
array.push('Año');
array.unshift('Dia');
console.log(array);
/*Quitar un elemento del principio y del final del array (utilizar shift y pop). */
array.shift();
array.pop();
console.log(array);
/*Invertir el orden del array (utilizar reverse) */
console.log(array.reverse());
/*Unir todos los elementos del array en un único string donde cada mes este separado por 
un guión - (utilizar join).*/
console.log(array.join('-'));
/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
 */
var array_2=["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var d=array_2.indexOf('Mayo');
var e=array_2.indexOf('Noviembre'); 
var array_3=array_2.slice(d,e+1);
console.log(array_3);

//EJERCICIO 4

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y 
sino un alerta con el mensaje “Lower than 0,5”
 */
var num= Math.random();
if (num>=0.5){
    alert("Greater than 0.5");
}else{
    alert("Lower than 0.5");
}
/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
 */
var Age=75;
if (Age<2){
    alert("Bebé");
}else{
    if(Age>=2 && Age<=12){
        alert("Niño");
    }else{
        if(Age>=13 && Age<=19){
            alert("Adolecente");
        }else{
            if(Age>=20 && Age<=30){
                alert("Joven");
            }else{
                if(Age>=31 && Age<=60){
                    alert("Adulto");
                }else{
                    if(Age>=61 && Age<=75){
                        alert("Adulto mayor");
                    }else{
                        alert("Anciano");
                    }
                }
            }
        }

    }
}

//EJERCICIO 5

/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
JavaScript para mostrar una alerta utilizando cada una de las palabras.
 */
var vector=['Lunes','Martes','Miercoles','Jueves','Viernes'];
for(var i=0; i<vector.length; i++){
    alert(vector[i]);
}
/*Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.
 */
var vector=['lunes','martes','miercoles','jueves','viernes'];
var vector_2='';
for(var i=0; i<vector.length; i++){
    vector_2=vector[i];
    vec_3=vector_2.substring(0,1).toUpperCase()+vector_2.substring(1,vector_2.length);
    alert(vec_3);
}
/*Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando 
cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
 */
var sentence=[''];
for(i=0; i< vector.length; i++){
    sentence[i]=vector[i];
}
alert(sentence);
/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número 
de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos 
dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el 
al array final (utilizar console.log).
 */
var arr=[];
for(x=0; x<10;x++){
    arr[x]=x;
}
console.log(arr);

//EJERCICIO 6

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
 dicha variable en la consola del navegador.
 */
var a=5;
var b=10;
console.log(suma(a,b));
function suma(x,y){
    var res=0;
    res=x+y;
    return res;
}
/*A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que 
uno de los parámetros tiene error y retornar el valor NaN como resultado. */
var m=a;
var n=10;
alert(sumaa(m,n));
function sumaa(x,y){
    var res=0;
    if(isNaN(x) && isNaN(y)){
        res=x+y;
    }else{
        res=NaN;
    }
    
    return res;
}
/*Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.
 */
var g=6;
console.log(validate(g));
function validate(x){
    return Number.isInteger(g);
}
/*A la función suma del ejercicio 6b) agregarle una llamada que 
valide que los números sean enteros. En caso que haya decimales 
mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
 */
var mm=3;
var nn=10.3;
alert(sumaaa(mm,nn));
function sumaaa(x,y){
   var Nnum;
   Nnum=valide(x,y);
   return Nnum;
}
function valide(h,z){
    var res;
    if(h % 1 ==0){
         res=h;
    }else{
        alert("Error",h)
        return Math.round(h);
    }if(z % 1 ==0){
        res=z;
    }else{
        alert("Error",z);
        return Math.round(z);
    }
    return h+z;
}
/*Convertir la validación del ejercicio 6b) en una 
función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
 */
