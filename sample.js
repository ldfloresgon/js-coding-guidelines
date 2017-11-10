//comprobamos que tengamos el objeto myObject, en caso contrario
//lo inicializamos como un objeto vacio y que luego le daremos forma.
if(!myObject) myObject = {};

(function (exports) {

var name = "Jhon",
 age = 35,
 id = 1,

//Declaramos una funcion getName y setName para poder cambiar el valor
//y recuperar el valor de la variable interna name.
var getName = function() {
    return this.name;
},
 
var setName = function(name) {
    this.name = name;
},

//Declaramos una funcion getAge y setAge para poder cambiar el valor
//y recuperar el valor de la variable interna age.
var getAge = function() {
    return this.age;
},
    
var setAge = function(age) {
    this.age = age;
},

//Declaramos la funcion getId para poder recuperar el valor
//de la variable interna id, pero al ser privada no podremos cambiar el valor.
var getId = function() {
   return this.id;  
},

//Generamos el modulo person, con funciones y variables a exportar, extendiendo
//el objeto principal que nos pasen.
var module = {
    person: {
        getName : getName,
        getAge : getAge,
        setName : setName,
        setAge : setAge,
        getId : getId
    }
};

//Extendemos el objeto myObject que es el que nos pasan, con un objeto person
//que contiene las funciones y variables que nosotros queramos pasarle.
//Si una funcion o una variable no esta en el modulo person, no sera accesible desde fuera
$.extend(exports, module);

//Pasamos el objeto myObject, que en este caso es el que queremos extender,
//añadiendo un modulo nuevo.
})(myObject);

//Esto nos devuelve el nombre del objecto person, como no lo hemos cambiado
//nos va a devolver el que tiene por defecto, en este caso Jhon.
return myObject.person.getName(); //Jhon

//Ahora cambiamos el nombre con el setName
myObject.person.setName("Jhon Smith");
return myObject.person.getName(); //Jhon Smith

//Podemos obtener el id mediante la funcion getId, pero al no tener un set,
// no vamos a poder cambiarle el valor.
return myObject.person.getId(); //1
myObject.person.id = 2; //error
