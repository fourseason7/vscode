// 7.Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {name: 'john', age: '20'};

const user2 = user;

// user2.name = 'coder';

console.log(user2.name);
console.log(user.name);


// old way
const user3 = {};
for (key in user){
    user3[key]= user[key];

}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);


const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);


function a (a, b){
    // console.log(a + b);
    return a + b;
};

console.log(a(10, 22));