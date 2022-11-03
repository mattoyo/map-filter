// const colors = ['teal', 'cyan', 'peach', 'purple']

// colors.forEach((v) => {
//     console.log(v.toUpperCase());
// });

// price = [ 30.99, 19.99, 250, 99];

// let total = 0;
// price.forEach(function(price) {
//     total += price;
    
// });
// console.log(total);

let numArray = [ 1, 2, 3, 4, 5 ];

let loggingNumbers = function(array) {
    for (let numbers of array) {
        console.log(numbers);
    }
}

function myForEach(func) {
    return func;
}

myForEach(loggingNumbers(numArray))
