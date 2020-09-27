
let a = "123";
console.log(a);

let b:string = "123";
console.log(b);


let value  = undefined;
let value1 = null;
let value2 = NaN;
console.log(value === value1);
console.log(value1 == value2);

console.log(typeof value);
console.log(typeof value1);
console.log(typeof value2);

const obj:any = {
    a:1,
    b:"string",
};
obj.c = null;

function foo(a:number):number {
    return a + 1;
}
foo.bar = 123;
console.log(foo(foo.bar));

let foo1:any = {};

for (let i = 0; i < 100; i++){
    foo1[String(i)] = i;
}
