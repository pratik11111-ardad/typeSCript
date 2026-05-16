let ac:any;
ac=10;
console.log(ac);

console.log(ac.toUperase());

ac="Hello";
console.log(ac);

let ad:unknown;
ad=10;
console.log(ad);
// console.log(ad.toUpperCase()); //Error: Object is of type 'unknown'.ts(2571) because unknown type does not have any properties or methods, we need to type cast it to a specific type before using it.
// ad="Hellow World";
