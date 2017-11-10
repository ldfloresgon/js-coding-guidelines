if(!myObject) myObject = {};

(function (exports) {

var name = "Jhon",
var age = 35,
var id = 1,
    
var getName = function() {
    return this.name;
},
    
var getAge = function() {
    return this.age;
},
 
var setName = function(name) {
    this.name = name;
},
    
var setAge = function(age) {
    this.age = age;
},

var getId = function() {
   return this.id;  
},

var module = {
    person: {
        getName : getName,
        getAge : getAge,
        setName : setName,
        setAge : setAge
    }
};

$.extend(exports, module);

})(myObject);

return myObject.person.getName(); //Jhon

myObject.person.setName("Jhon Smith");
return myObject.person.getName(); //Jhon Smith

return myObject.person.getId(); //1
myObject.person.id = 2; //error
