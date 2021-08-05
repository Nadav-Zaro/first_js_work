//1
// var num1;
// var num2;
// num1 = Number(prompt("first number"))
// num2 = Number(prompt("second number"))
// console.log(num1);
// console.log(num2);
// var sum = num1 + num2;
// if (sum >= 13){
//     console.log("bar-mitzva");
// }
// else if (sum == 12){
//     console.log("bat-mitzva");
// }
// else{
//     console.log("kid");
// }

//2
// var counts = 0;
// while (counts < 100){
//     console.log("yes");
//     counts++;
// }

//3
// var user;
// var counts = 0;
// user = Number(prompt("times"))
// while (counts < user){
//     console.log("no");
//     counts++
// }

//4
// for (var i = 0;i <= 1000;i++){
//     console.log("javascript is not JAVA" );
// }

//5
// var userName;
// var userNumber;
// userName = prompt("name");
// userNumber = Number(prompt("number"));
// for (var i = 0;i < userNumber;i++){
//     console.log(userName);
// }

//6
// var userName;
// var userEmail;
// var userAge;
// userName = prompt("name");
// userEmail = prompt("EMAIL");
// userAge = Number(prompt("age"));
// var printNumber;
// printNumber = Number(prompt("print"));
// for (var i=0;i<printNumber;i++){
//     if (userAge > 18){
//         console.log(userName, userEmail, userAge);
//     }
//     else{
//         alert("too young");
//     }
// }

//7
//  var number;
//  var userName;
//  var myName = "nadav";
//  number = Number(prompt("number"));
//  userName = prompt("enter name");
//  for (var i =0;i < number;i++){
//      if (userName == myName){
//          console.log("hi boss " + myName);
//      }
//      else{
//          console.log("no enrty");
//      }
//  }

//8
// var num1;
// var num2;
// num1 = Number(prompt("first number"));
// num2 = Number(prompt("second number"));
// for (var i=0;i < num1;i++){
//     for (var j=0;j < num2;j++){
//         console.log(i * j);
//     }
    
// }

//9
// var array = [1 ,2 ,3 ,4 ,5];
// console.log(array);

//10
// var nameArray = [ "nadav" , "uri" , "shmuel" , "ezra" , "haim"];
// for (var i = 0;i <nameArray.length;i++){
//     console.log(nameArray[i]);
// }

//11
// var array = [10 ,11 ,12 ,13 ,14 ,15 ,16 ,17];
// for (var i = 0;i <array.length;i++){
//     if(array[i] % 2 == 0) {
//     console.log(array[i]);
//     }
// }


//12
// var user;
// var aray = [];
// for (var i=0;i < 5;i++){
//     user = prompt("put name");
//     aray.push(user);
//     console.log(aray);
// }

//13
// var user;
// var aray = [];
// for (var i=0;i < 7;i++){
//     user = Number(prompt("put number"));
//     aray.push(user);
//     if (user % 2 != 0){
//         console.log(aray[i]);
//     }
// }

//14
// var mixArray = [2 , "hello" ,5 ,7 , "mixed-array" ,9];
// for(var i=0;i < mixArray.length;i++){
//     if (!Number(mixArray[i])){
//         mixArray[i] = "NOT A NUMBER";
//         console.log(mixArray);
//     }
// }

//15
// var Array = [];
// var num;
// while (Array.length < 10){
//     num = Number(prompt("choose even number"));
//     if (num % 2 == 0){
//         Array.push(num);
//     }
//     else{
//         console.log("put even number");
//     }
// }
// console.log(Array);

//16
// var width;
// var height;
// width = Number(prompt("choose u width"));
// height = Number(prompt("choose u height"));
// var area = width * height;
// var hekef = (width + height)*2;
// console.log(area);
// console.log(hekef);
 

// var one;
// var two;
// var three;
// one = Number(prompt("choose number"));
// two = Number(prompt("choose number"));
// three = Number(prompt("choose number"));
// if (one > two && two > three){
//     console.log("down");
// }
// else if(three > two && two > one){
//     console.log("rise");
// }
// else{
//     console.log("no order");
// }

//17
// var Num ;
// Num = Number(prompt("choose number"));
// while(Num > 0){
//     var mishtane = Num % 10 ;
//     Num = parseInt(Num / 10);
//     console.log(mishtane);
// }