//Variables

var nameVar = 'Arialdys';
var nameVar = 'Mike';
console.log('nameVar:',nameVar);

let nameLet = 'Jen';
nameLet = 'Jen';
console.log('nameLet:', nameLet);

const nameConst = 'Frank';
console.log('nameConst:', nameConst);

//Block scoping

const fullName = 'Jen Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
};

function getPetName() {

    var petName = 'Hal';
    return petName;
};
