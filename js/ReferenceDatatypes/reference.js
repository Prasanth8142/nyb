// Reference data type
// 1)Object
// 2)Array
// 3)Functions
// 4) E S-6 : map weak map set week set
// 

var m="below is an Array data type"
console.log(m)




// Array:Collection Of data (Homogenuos(1,2,3)Hetrogenous
var apple="Apple"
var mango="Mango"
var chai="chai"
var a=[1,2,3,4,5,null,true,false,undefined,apple,mango,chai,[25,46,87],"sai"]

console.log(a)
console.log(a.length)


var Student_data=["Madhu","vamsi","Nohan","Ranjith"]
console.log(Student_data)
console.log(Student_data.length)
// Particular Name print on the student data
console.log(Student_data[2])







var h='below Object data type'
console.log(h)

// Object Data Type (Defined as {})
// 1.key value
//eg var a:name
// 2.static key
// 3.Dynamic key
// key value:
var Studentdetails={studentName:"prashanth"
    ,studentPhn:123456789,
    studentMail:"prashgmail.com",studentCountry : "India"}

console.log(Studentdetails)

// 2.static key
console.log(Studentdetails.studentName)
console.log(Studentdetails["studentMail"])


// functions
// 1)function Decleration
// 2)Fuction Experssion
// Function decleration
var s="Function Data Types"
console.log(s)
// code
//named function experssion
 var gin=function name(){
    var a=10
    var b=20
    console.log(a)
    console.log(b)
    console.log(a+b)
}
gin()

//Annonomus function
var m=function (){
    var a=10
    var b=20
    console.log(a)
    console.log(b)
    console.log(a+b)
}
m()

//arrow function experssion
var m=()=>{
    var a=10
    var b=20
    console.log(a)
    console.log(b)
    console.log(a+b)
    return "This is a function"
}
console.log(m())


