typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

//Observe: no return type, no type on parameters

function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};
console.log(add(1, 2));     // What will this print? - 3
console.log(add);         // What will it print and what does add represent? - Function add
console.log(add(1, 2, 3)); // What will it print - 3
console.log(add(1));	  // What will it print - NaN	
console.log(cb(3, 3, add)); // What will it print  - 3 + 3 = 6
console.log(cb(4, 3, sub)); // What will it print - 4 + 3 = 1
try {
    console.log(cb(3, 3, add())); // What will it print (and what was the problem) 
} catch (e) {
    console.log("Something went wrong :(");
}
console.log(cb(3, "hh", add));// What will it print-  3 + hh = 3hh

var mul = function (n1, n2) {
    return n1 * n2;
};

console.log(cb(3, 3, mul));

var dev = function (n1, n2) {
    return n1 / n2;
};

console.log(cb(3, 3, dev));



// 1!!!!!
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var three = function (name) {
    return (name.length <= 3);
};
var res = names.filter(three);



names.forEach(function (n) {
    console.log(n + " *");
});

res.forEach(function (n) {
    console.log(n);
});

//var uppers = all.map(function(x) { return x.toUpperCase(); });
//console.log(uppers);
var upperCased = names.map(function (name) {
    return name.toUpperCase();
});
console.log(upperCased);

var tags = names.map(function (name) {
    // n = name.join("</li><li>");
    // return "<ul><li>" + n + "</li></ul>";
    return name;
}).join("</li><li>");
console.log("<ul><li>" + tags + "</li></ul>");

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var years = function (car) {
    return (car.year >= 1999);
};
var yearCar = cars.filter(years);

console.log(yearCar);

var make = function (car) {
    return (car.make === "Volvo");
};
var makeCar = cars.filter(make);

console.log(makeCar);


var price = function (car) {
    return (car.price < 5000);
};
var priceCar = cars.filter(price);

console.log(priceCar);


//var query = cars.map(function(sql){
//
//   return sql;
//}).join(", ");
//
//
//console.log("INSERT INTO cars (id,year,make,model,price) VALUES " +  "( 1, 1997 'Ford','E350', 3000 );");

var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

// aaaaa, ddddd, fffff, eeeeee, bbbbb


function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this - delayed in the console but undefined name (this.name)
    }, 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: " + name);  //What’s different ?

//Store a reference to the outer this
function Person1(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);  //Explain this - delayed in the console but undefined name (this.name)
    }, 2000);
}
Person1("Jacob H.");


//Using the bind(..) function
function Person2(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }.bind(this), 2000);
}
Person2("Peter Petersen");

var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);


