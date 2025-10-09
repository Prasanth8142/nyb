//operators
//1)Arithematic operator
let a=15
let b=20
let c=a+b
console.group(c)



var fname="Sai"
var sname="Dhamu"
console.log(fname+sname)
console.log("Subtraction")
console.log(a-b)
console.log("Multi")
console.log(a*b)
console.log("Div")
console.log(a/b)
console.log("modules")
console.log(a%b)

//pre post increment
//pre 
let A=12
let B=10
console.log(++A + B++)
//post
console.log(A++ - B++)
console.log(A)
console.log(B)

    //pre post decreament
    console.log(--A + --B)
    console.log(a-- + b--)


    //Exponential
    console.log(2 ** 2)

//Assignment values

let d=10
let m=20
m+=d
console.log(m)
    
//comparision operator



//Relation operator
// let g=10
// let f=10
// console.group(g<=f)
// console.group(g>=f)
// equality operator
// let g=10
// let f='10'
// console.log(g==f)
// console.log(g===f)

//inequality operator
let g=10
let f='10'
console.log(g!==f)
console.log(g!=f)

//Ternary operator
console.log(true?console.log("True case"):console.log("false case"))

// logical operator
let H=10
let N=10
console.log(H!=N && H==N)
console.log(H!=N || H==N)