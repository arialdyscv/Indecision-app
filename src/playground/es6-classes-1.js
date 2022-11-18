
class Person {
    constructor(name =  'Anonnymous', age = 0) {
        this.name = name;
        this.age = age; 
    }
    getGretting() {
        return `Hi, my name is ${this.name}. I'm ${this.age} year(s) old.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

class Student extends Person {

    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description
    }

}


class Traveler extends Person {

    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGretting() {
        let greeting = super.getGretting();
        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.location}`;
        }
        return greeting;
    }
}

const me = new Traveler('Arialdys Calderon', 31, 'DR');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());