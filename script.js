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

getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {git remote add origin https://github.com/KhanzaidGithub/asynchronous.github.io.git

            getdata(4)// This is how we can use nested call back function but using nested function becomes call back hell
        })
    })
});         // This how call back function actually works