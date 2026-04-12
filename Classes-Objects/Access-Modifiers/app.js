"use strict";
// Access Modifiers
// -> public
// -> private
// -> protected
// public
// class BottleMaker {
//     constructor(public name: string){
//     }
// }
// const b1 = new BottleMaker("Milton");
// b1.name = "Yoo";
// private
// class BottleMaker {
//     private halua: string = "halua";
//     constructor(public name: string){
//     }
// }
// class MetalBottleMaker extends BottleMaker {
//     constructor(name: string){
//         super(name);
//     }
//     getValue() {
//         console.log(this.name, this.halua);     // Property 'halua' is private and only accessible within class 'BottleMaker'.
//     }
// }
// const b1 = new MetalBottleMaker("Milton");
// b1.getValue();
// protected
// class BottleMaker {
//     protected name = "Milton";
// }
// class MetalBottleMaker extends BottleMaker {
//     public material = "metal";
//     changeName() {
//         this.name = "some name"
//     }
// }
// let b1 = new MetalBottleMaker();
