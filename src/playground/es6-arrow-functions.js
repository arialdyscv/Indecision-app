//Regular ES5 function

/*function square (x) {

  return x * x;
};*/

// console.log(square(8));

//arrow function long version

/*const squareArrow = (x) => {

 return x * x;
};*/

//arrow function short version

/*const squareArrow = (x) => x * x;

console.log(squareArrow(9));*/


const fullName = 'Culito in the Morning';
let firstName;

const getFName = (fullname) =>{

    firstName = fullname.split(' ')[0];
    return firstName;
};

const getFirstName = (fullName) => console.log(firstName = fullName.split(' ')[0]);

console.log(getFName(fullName));