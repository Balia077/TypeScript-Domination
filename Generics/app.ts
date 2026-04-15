// Generics
// Generic function
// Generic interfaces
// Generic classes

// hume ek function banana hai jo ki accept karega koi bhi value and usey print karega

// hum ek function ko use karte waqt bata sakte hai ki function argument ko kis type se treat kare

// Generic functions

// function abcd<T>(a: T, b: string, c: number) {

// }

// abcd<string>("halua", "pudi", 5);

// function log<T>(val: T) {
//     console.log(val);
// }

// log(12);

// Generic interfaces

// interface Halua<T> {
//     name: string;
//     age: number;
//     key: T;
// }

// function abcd(obj: Halua<string>) {
    
// }

// abcd({name: "foo", age: 20, key: "afafssa"});

// Generic classes

class BottleMaker<T> {
    constructor(public key: T) {

    }
}

let b1 = new BottleMaker<string>("hey");
let b2 = new BottleMaker<number>(12);

console.log(b1, b2);

// generic catche

function abcd<T>(a: T, b: T): T {
    // return "hey"                    // string literal
    return a;
}

abcd<string>("hey", "hello");