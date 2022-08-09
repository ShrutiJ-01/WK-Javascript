//Callback
//Javascript is a single threaded language.
//One statement is being executed at a time.

console.log(1);
console.log(2);
console.log(3);
console.log(4);

//asynchronous code
setTimeout(() => console.log('callback function'), 2000
);

console.log(5);
console.log(6);

//the code is not blocked by the settimeout function, 
//the callback is executed after the asynchronuous task is completed.


//HTTP Requests

//ready status 4 = complete, 3= in prgress, 2= sent, 1 = opened(i.e set up)
//status codes are important because a complete request may have no reponse/error.

//Tidying up code

const getTodos = (callback) => {
    //Make a request Object
    const request = new XMLHttpRequest();
    //atach event listener
    //event fired every time there is a state change
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText);//parsing
            callback(undefined, data);
        } else if (request.readyState == 4) {
            callback('couldnot fetch data', undefined);
        }
    });
    //set up request
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    //send request
    request.send();
};
console.log('Hello! Asynchronous Javascript here');
console.log('I hope you\'re doing well');

getTodos((err, data) => {
    console.log('callback fired for getTodos');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


//making requests in order. I.e making another request only after the first is completed.
//DONOT nest callbacks at all. Its the DOOM. This is where promises come into picture

//PROMISES
//dummy example
const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('some data from dummy promise');//callback executed when promise resolved
        //reject('some error');//callback executed when promised is rejected
    });
};

getSomething().then(data => {
    console.log(data);
}).catch(err => console.log(err));

const getUserActivity = (resource) => {
    return new Promise((resolve, reject) => {
        const request2 = new XMLHttpRequest();
        request2.addEventListener('readystatechange', () => {
            if (request2.readyState == 4 && request2.status == 200) {
                const data = JSON.parse(request2.responseText);
                resolve(data);
            } else if (request2.readyState == 4) {
                reject(request2.err);
            }
        });

        request2.open('GET', resource);
        request2.send();
    });
};
//using single promise

getUserActivity('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log('promise resolved : ', data)).catch(err => console.log('eroor ocured : ', err));

//chaining promises together

getUserActivity('https://jsonplaceholder.typicode.com/posts/5').then(data => {
    console.log('chained promise 1 resolved : ', data);
    return getUserActivity('https://jsonplaceholder.typicode.com/posts/4');
}).then(data => {
    console.log('chained promise 2 resolved : ', data);
    return getUserActivity('https://jsonplaceholder.typicode.com/posts/3');
}).then(data => {
    console.log('chained promise 3 is resolved: ', data);
}).catch(err => {
    console.log(err);
});

//FETCH API : easyway to make http requests
//the fetch function returns a promise, so use then() to
//execute callback on sucess
//json method is asynchronous in itself and returns a promise in itself
//so usko b then() lagan padta

fetch('https://jsonplaceholder.typicode.com/posts/6').then((response) => {
    console.log('fetch method\'s then callback executed');
    return response.json();
}).then((data) => {
    console.log('data fetched useing fetch() is : ', data);
}).catch(err => console.log('fetch method\'s caught an error : ', err));



//ASYNC AND AWAIT 
//YEYYYY FINALLYYYYYY
//all async pfunctions returns proomise
//so youllhave to use then() with it 
//if you dont want that kachra again just use await keywiord

//very similar to dart
//use then and catch when calling said async function
const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    return data;
};
getUsers().
    then(data => console.log('ASYNC AWAIT getUsers() data recieved : ', data)).
    catch(err => console.log('error in ASYNC AWAIT : ', err.message));