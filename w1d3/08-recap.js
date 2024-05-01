// Objects are cool!

// We use objects to list properties of an element
// We want to use arrays when we want a list of multiple independent elements

// Methods: this will work if you declare with function(){...} 
//          because this refers to the parent object at the time of definition

// Methods: this will not work if you declare with function(){...} 
//          because this refers to the parent object at the time of calling

const someObject = {
  name:"Pequeno Pollo",
  isCool:true,
  age:9001,
  sound:"Pock pock",
  makeSound:function(){
    console.log(this.sound)
  },
  makeSoundArr:() => {
    console.log(this.sound)
  },
}

someObject.makeSound()
someObject.makeSoundArr()


// We can access values using either the dot notation or square bracket notation

// dot notation is cleaner, but only works when we now the name of the keys

const someValue = someObject.isCool // Will work

const someKey = "isCool"
const someOtherValue = someObject.someKey // Will not work


// square bracket is clunkier, but always work

const someValueAgain = someObject["isCool"] // Will work

const someKeyAgain = "isCool"
const someOtherValueAgain = someObject[someKey] // Will work

// We can edit values by accessing the key and reassign a value

someObject.isCool // true
someObject.isCool = "OH MY GOD SO MUCH COOLNESS"
someObject.isCool = false
someObject.isCool // false

// We can add values to an object using the same pattern as edit

someObject.answer // undefined
someObject.answer = 42
someObject.answer // 42


// Can we delete a key ?

someObject.answer = undefined // no!

delete someObject.answer // yes!