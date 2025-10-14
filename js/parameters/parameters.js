

// parametres=They are stored the values at the function decleration
function add(a,b){
    console.log(a,b)
console.log(a+b)
}
add(2,5)
add(10,20)

//default parameter
function subtraction(a=10,b=1,c=10,d=null){
    console.log(a,b,c,d)
    console.log(a-b)
}
subtraction(1,20,null,undefined)




// argument objects:
function vam(a,b){

console.log(a,b)
console.log(arguments)
}
vam(10,20,30,40)


// Rest parameters
function t(a,b,...c){
    console.log(a,b)
    console.log(c)
    console.log(arguments)
}
t(10,20,30,40,50,60,70)
