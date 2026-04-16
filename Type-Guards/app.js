"use strict";
// Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly
// type guards -> type narrowing
// using typeof
// function abcd(arg: string | number | any) {
//     if(typeof arg === "number") {
//         //number methods and properties
//         return "number"
//     }
//     else if(typeof arg === "string") {
//         //string methods and properties
//         return "string"
//     }
//     else {
//         throw new Error("pagal ho gaya hai kya bruuuuhhhh");
//     }
// }
// console.log(abcd(12));      // number
// console.log(abcd("hey"));   // string
// abcd(true)
// using instanceof
// class Remote {
//     switchTvoff() {
//         console.log("switching off tv");
//     }
// }
// class CarRemote {
//     switchCaroff() {
//         console.log("switching off car");
//     }
// }
// const tv = new Remote();
// const car = new CarRemote();
// function switchOffKaro(device : Remote | CarRemote) {
//     if(device instanceof Remote) {
//         device.switchTvoff();
//     }
//     else if(device instanceof CarRemote) {
//         device.switchCaroff();
//     }
// }
