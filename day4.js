// step 1 : create a XHR object

var request = new XMLHttpRequest();

// step 2: initialize a connection

request.open('GET','https://restcountries.com/v2/all', true);

// first parameter:'GET'
// second parameter:'api URL',
// optional third parameter:true

// step 3: to send a connection through a virtual path

request.send();

// step 4: once data is successfully loaded from server(200)
// data travelling from server will be a string
// need to convert the string into object

request.onload = function(){

    var data = JSON.parse(request.response);//request from server
    console.log(data);

    for ( var i=0; i<data.length; i++){
        console.log(data[i].flag);
    }
    for ( var i=0; i<data.length; i++){
        console.log(data[i].region);
    }
for(i=0;i<data.length;i++){
    console.log(`CountryName-${data[i].name} and Flag- ${data[i].flag}`)
}
}

// let a;
// console.log(a);
//  var b=10;
// console.log(b);
 
// var b = 20;

// var fruits = ["apple", "orange", "cherry"];
// // fruits.forEach(myFunction);

// fruits.forEach[myFunction];
// function myFunction(item)
// var array = ["orange", "pineapple", "mango"];
// {
//   console.log(array);
// }





