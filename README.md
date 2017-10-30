Definición de variables

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


Generación de componentes en JS

