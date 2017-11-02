# Directrices JS

## Definición de variables

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

En el caso de generación de objectos si esta bien visto no juntar la declaración, para ayudar a la diferenciación de contexto.


## Generación de componentes en JS

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

var foo = ""

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
test-testModule.foo
```
Daria error, ya que no es accesible, lo mismo ocurre con las funciones.

