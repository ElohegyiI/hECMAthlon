/*var numbers = [ 10, 25, 35, 44, 670 ]

var copied = [...numbers]

function getOutPut(numbers) {
    return [...numbers]
}
console.log(copied)*/


/*let numbers = [ 10, 25, 35, 44, 670 ]

let copied = [...numbers]

function getOutPut(numbers) {
    return [...numbers]
}
console.log(copied)*/

/* Easy copy */


let numbers = [10, 25, 35, 670, 44]

let filtered = numbers.filter(getGreaterThen)

function getGreaterThen(value) {
    return value >= 35
  }
  
console.log(filtered)

/*let numbers = [10, 25, 35, 670, 44]

let filtered = numbers.filter(num => num < 35);

console.log(filtered)*/

  /* .filter() */

/*let array = [13, 34, 65]

let array2 = array.map(fizzFuzz)

function fizzFuzz(x) {
    return x * 7
}
console.log(array2)*/

/*let array = [45, 67, 98]

/*let array2 = array.map(function fizzFuzz(x) { return x * 7 } )
console.log(array2)

let array2 = array.map ( x => { return x * 7 } )

console.log(array2)*/

/* map() */

/*let numbers = [23, 45, 54, 100]

//let result = numbers.reduce(function getMaxValue(y) { return y })

let result = numbers.reduce( y => {return y} ) 

/*let result = numbers.reduce(getMaxValue)

function getMaxValue(y) {
    return y
}
console.log(result)*/

/*let person = {
    name: "Benő",
    address: "Sopron",
    id:123045,
}*/

/*class Person {
    constructor(id, name, address) {
        this.id = id
        this.name = name
        this.address = address
    }

    getName() {
        return this.id
        return this.name
        return this.address
    }
    
}
let person = new Person('234', 'Benő', 'Sopron');
console.log(person)*/

/*var names = ['Jóska', 'hogyan', 'tudás']

var name = names.reverse()

function myReverse(x) {
    return x
}
console.log(name)

var number1 = [23]
var number2 = [34]
var number3 = [56]
var number = [number1, number2, number3].toString()


console.log(number)*/