// برای عملیات تکرار شونده
// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);

// for (initializer ; condition(boolean) ; modifier ) {
//       ... body
//}

// var num = 10;

// var test1 = num++;
// var test2 = ++num;

// for (var i = 0 ; i <= 10 ; i++) {
//     console.log(i);
// }
// debugger;

// for (var i = 9; i >= 0 ; i--) {
//     console.log(i);
// }

// for (var i = 0; i <= 50; i++) {
//   // console.log(i * 2);
// //   console.log(i * 2 + 1);
// }

// for (var i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }

// for (var i = 0; i <= 10; i++) {
//   var str = "8 X " + i + " = " + 8 * i;
//   console.log(str);
// }

// for (var i = 1; i <= 10; i++) {
//   for (var j = 0; j <= 10; j++) {
//     var result = i + " X " + j + " = " + i * j;
//     console.log(result);
//   }
// }

// var b1 = 0;

// if (condition) {

//     var b2 = 1;

//     if (condidition) {

//         var b3 = 3;
//         if (condition) {

//             var b4 = 0;
//         }

//     }

// }

// 18 => 1,2,3,6,9,18
// 11 => 1,11
// 13,7,23
// 5! = 5 X 4 X 3 X 2 X 1

// var num = Math.floor(1251.23523523);

// var num = Math.round(14.5);

// var num = Math.random();
// console.log(num);
// console.log(Math.floor(num * 100000));

// debugger;
// var isOver18 = false;
// while (isOver18 === false) {
//   var year = prompt("Enter your birthdate year. You must be upper than 18");

//   if (year < 2022 - 18) {
//     isOver18 = true;
//   }
// }
// console.log("OK");

debugger;
var isContinue = true;
var number = 0;

while (isContinue) {
  console.log(number);
  number++;

  if (number > 20) {
    isContinue = false;
  }
}



do {

    

} while (condition);