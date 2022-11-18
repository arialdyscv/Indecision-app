//arguments object - not bound with arrow functions

const add = (a, b)=> {
  //console.log(arguments);
  return a + b;
};
//console.log(add(55,1));

//'this' keyword - not bound with arrow functions

const user = {
  name: 'Arialdys',
  locations: ['DN', 'Higuey', 'Santiago', 'Villa Mella'],
  printPlacesLived() {
    //console.log(this.name);
    //console.log(this.locations);

    return this.locations.map((locat) => this.name + ' has been at ' + locat);

    /*this.locations.forEach((location) => {
      console.log(this.name + 'has been in ' + location);
    })*/
  }
};
//console.log(user.printPlacesLived());

//Challenge

const challenge = {
  
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  multiply() {

    return this.numbers.map((numbs) => numbs * this.multiplyBy);
    
  }

};

console.log(challenge.multiply());