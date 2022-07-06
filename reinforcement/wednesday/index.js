const peopleArray = [];
//Javascript classes are used to make a buch of instances of the same object

//syntax
class Person {

    constructor(firstName, lastName, age, placeOfBirth){
    this.firsName = firstName; 
    this.secondName = lastName;
    this.yearsOld = age;
    this.birthplace = placeOfBirth;
     //put something in string if not part of parameters
    peopleArray.push(this)
    }
    //method goes outside of constructor
    sayHello(){
        return(console.log(`Hello World! my name is ${this.firsName || this.lastName}, it is lovely to meet you!`))
    }

}
//syntax for extending classes 
class Student extends Person{
    constructor(firstName, lastName, age, placeOfBirth, classRoom, grade){
        super(firstName, lastName, age, placeOfBirth); //gives same parameters as parent
        this.classRoom = classRoom;
        this.grade = grade;
    }
}

class Doctor extends Person {
    constructor(lastName, field){
    super(lastName)
    this.field = field
    }
}

 let studentOne = new Student('Hilly', 'Bocker', 34, 'Freedman Hospital', 'UN-123', 99);
 let doc = new Doctor('Who', 'Pediatrician')

 doc.sayHello()
studentOne.sayHello()



//object literal notation
let personOne = {
    firstName: "Richy",
    lastName: "Lou",
    age: 21,
    placeOfBirth: 'The Med'
};

let personTwo = {
    firstName: "Vicky",
    lastName: "Lou",
    age: 11,
    placeOfBirth: 'Lebonheur'
};

let personThree = {
    firstName: "Alfred",
    lastName: "Lou",
    age: 31,
    placeOfBirth: 'Baptist Memorial'
};
//push all literal people into the array
peopleArray.push(personOne, personTwo, personThree);

//constructor function used to make a bunch of instances of the same type of object
//below is used to compare to class
function PersonConst(firstName, lastName, age, placeOfBirth){
//setting values to property as parameters
    this.firstName = firstName; //this. because the variable belongs to this function
    this.secondName = lastName;
    this.yearsOld = age;
    this.birthplace = placeOfBirth;
    peopleArray.push(this);
}

let personFour = new Person('Lindsey', 'McGrady', 21, 'rock and roll town');

//reference class
let personFive = new Person('Hindi', 'Monsorrat', 2054, 'India');
//use dot notation to add/change properties
//dot notation is only used in objects
personFive.sayHello(); 

console.log(peopleArray);

