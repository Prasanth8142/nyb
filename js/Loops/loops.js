// for loop
// let a=10
// for(let i=1;i<=a;i++){
//     console.log(i)
// }

// while loop
let a=1
while(a<=10){
    console.log(a)
    a++

}


//do while
let b=1
do{
    console.log(b)
    b++
}
while(b<=10)

    //infinity loop

    // let c=2
    // for(c;c>1;c++){
    //     console.log(c)
    // }


    //Uncondition loop
    // for in loop
    var student={
        name:"Prashanth",age:25,height:5.5,weight:80
    }
    for(var x in student){
        console.log(x)
        console.log(student[x])
    }
    console.log(student)


    //for out loop
    var items=[10,"apple","Bannana"]
for(var v of items){
    console.log(v)

}