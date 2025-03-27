## Does JavaScript have classes ?
Yes, JavaScript does have classes, but they were introduced in ES6 (ECMAScript 2015). Before ES6, JavaScript didn't have a formal class syntax, but you could still create objects and simulate classes using functions and prototypes. With ES6, JavaScript introduced the class syntax, which makes it easier to work with object-oriented programming (OOP). The syntax looks more like classes in other programming languages, but behind the scenes, JavaScript is still using prototypes for inheritance.


    class Person {

        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, I'm ${this.name}`);
        }

    }

    const person1 = new Person("Alice", 30);

    person1.greet();

## Part of OOP

### Object Literal
- Constructor Function
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
