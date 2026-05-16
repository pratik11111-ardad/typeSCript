var a=10;
console.log(a);
var a=20;
console.log(a);
 let b=30;
console.log(b);

//var is function scoped variable
function Scope(){
    if(true){

        var msg="Hello";
        console.log(msg);

    }
    console.log(msg);
}
Scope();

//let and const are block scped variables
function Scope1(){
    let msg="Hellow outer block";
    if(true){
        let msg="Hellow beautiful world";
        console.log(msg);
    }
    console.log(msg);
    }
    Scope1();