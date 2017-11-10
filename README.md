# Best Practices

## Definición de variables

Las variables las definimos siempre al principio de las funciones porque son function scope gracias a la tecnica de hoisting(https://www.w3schools.com/js/js_hoisting.asp).

Una variable se va a declarar siempre con un var delante.

```js
var test = "";
```

Una constante la escribiremos en mayuscula y con _ entre palabras. 

```js
var CONST_TEST = "test";
```

```warning
No usaremos const ya que IE no lo acepta. Si utilizaremos es6 si podriamos utilizar const
```

Si solo tenemos una variable la declararemos así:

```js
var firstName = "";
```

En caso de que tengamos más de una, las declaremos todas juntas:

```js
var firstName = "",
    lastName = "";
```

Pero nunca así:

```js
var firstName = "";
var lastName = "";
```

Para mantener el contexto tenemos la posibilidad de generar objetos que contengan la información, y de esta forma poder separarlo más comodamente, a saber:

Object literal notation

```js
var person = {
        name : "",
        firstName : "",
        lastName : "",
        age : ""
    };

var ball = {
        type : "",
        size : ""
    };
```

Si declaramos objetos sencillos como estos, podremos hacer referencia a sus propiedades de una forma como esta:

```js
person.name;

ball.size;
```

En el caso de generación de objectos si esta bien visto no juntar la declaración, para ayudar a la diferenciación de contexto.


## Generación de componentes en JS

Module Pattern
```js
(function (exports) {

var init = function(){

},

var initParam = function(param){

}

var module = {
    testModule: {
        init: init,
        initParam: initParam
    }
};

$.extend(exports, module);

})(test);
```

Esto despues nos permitira usarlo como objeto y tener acceso solo a las funciones y variables que queramos exportar en el modulo

```js
 test.testModule.init();
```
y
```js
test.testModule.initParam(param);
```

De esta forma nos beneficiamos de poder tener funciones y variables privadas, ya que si no las incluimos en el modulo que exportaremos no seran accesibles, por ejemplo, si yo declaro la variable foo de esta forma:

```js
(function (exports) {
var init = function(){

},

var foo = "",

var module = {
    testModule: {
        init: init,
    }
};

$.extend(exports, module);

})(test);
```

Si yo intentera hacer algo tal que asi:

```js
test.testModule.foo
```
Daria error, ya que no es accesible, lo mismo ocurre con las funciones (closure: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures).

## Best practices

### Evitar parentesis que no son necesarios:

En vez de:

```js
typeof(a) != undefined 
return (a)
```

Mejor hacer:

```js
typeof a != undefined 
return a
```

Asi queda más limpio


### Eliminar lineas de codigo innecesarias

En vez de:

```js
if(typeof a != undefined && a != undefined){
    a = 42:
}
```

Mejor hacer:

```js
if(a){
    a = 42;
}
```

### Para ahorras más lineas de codigo innecesarias

En vez de:

```js
if(a){
    a = 42;
}
```

Mejor hacer:

```js
a = a || 42;
```


Thanks to: https://google.github.io/styleguide/javascriptguide.xml

Happy coding! :)

