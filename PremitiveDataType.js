/////// Q1. Write a program in JavaScript to square the input number and print result. ///////////// 
function find_square(num) {
    return num * num;
}

const num = prompt("Input number to know it's square: ")

var res = find_square(num)
alert('The square of number ' + num + ' is: ' + res);

////// Q2. Write a program in JavaScript to divide the input number by 7 and print the quotient and remainder.​ /////////
function find_divide(num2) {
    return num2 / 7;
}
const num2 = prompt("Input number to know it's divide by 7 value: ")
var res2 = find_divide(num2)
alert('Your number ' + num2 + ' after divide by 7 is: ' + res2);

///////// Q3. Write a program in JavaScript to store a product in a variable and print the details in below format:​ /////////////

// Define the product object
let product = {
    name: "samsung",
    price: 20000
};

// Print the product details
document.write("name is " + product.name);
document.writeln(" price is " + product.price);

