// console.log('one');
// console.log('two');


// This all is synchronous in javascript one will excecute then another then another

// now what is in asynchronous programming
// code one
// code two
// code three
// API if it takes time so why should another have to wait
// rest of the code will be executed and when it completed api will be shown

// setTimeout(() => {
//     console.log('testing')//4s to show output;
// }, 4000);

// console.log('three');
// console.log('four');  // this is called asyncrhonous programming , three & four will not wait for setTimeout function

// Callback Function

// function sum(a, b) {
//     console.log(a + b);
// }

// function caculate(a, b, sum) {
//     sum(a, b);
// }
// caculate(1, 2, sum);  // Do not use parenthesis with sum 

// Callback hell becomes when you nested callback funtion 

// function getdata(dataid){
//     console.log('Data '+ dataid);  // This is small data let's suppose we have burden of data and it takes time to fetch data in case we use asynchronous function
// }
function getdata(dataid, getNextdata) {
    setTimeout(() => {
        console.log('data', dataid);
        if (getNextdata) {
            getNextdata();
        }
    }, 2000);
}
// getdata(1);
// getdata(2);
// getdata(3);  // Now al this will print in one time  but i want delay in each funtion so here we will use callback

// getdata(1, getdata(2)); // getdata(2) will print at first because here we are using parenthieses

// This is nestes callback hell functions
// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//             getdata(4) // This is how we can use nested call back function but using nested function becomes call back hell
//         })
//     })
// });         // This how call back function actually works


// For solving this callback hell functions we have promosises

// Promesis
// Promosis is for "Eventual" Completion of task, It is an object in Javascript
// it is solution for callback hell
// Syntax

// let promis = new Promise((Resolve,reject)={...})

// Promise is a class for creating ne class we pass two function also called handlers => resolve,reject these are two handlers function we can call them callback functions

// let promise = new Promise((resolve,reject)=>{
//     console.log('I am promise');
//     // resolve(123); // This is itself a function // Resolve is now fullfild
//     reject('123')
// })
// Primise has three states Resolve,Pending and Reject

let getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log('I am getpromise');
        //  resolve('124'); // We get fullfilled value wiht resolve 
        reject('order rejected');//We will get this value with not then we have to use catch 
    })
}

let promise = getpromise();
promise.then(() => {
    console.log('Succesfully Resloved'); // here with then we will get the result of resolve fullfilled we get but not reject
});

// promise.then((resolve)=>{...})
// promise.catch((rejected)=>{...})

promise.catch(() => {
    console.log('Order rejected');
})

