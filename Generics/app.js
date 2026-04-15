"use strict";
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
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("hey");
let b2 = new BottleMaker(12);
console.log(b1, b2);
// generic catche
function abcd(a, b) {
    // return "hey"                    // string literal
    return a;
}
abcd("hey", "hello");
