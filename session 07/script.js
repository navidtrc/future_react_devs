// condition شرط
// var myCondition = 10 > 20;
// if (myCondition) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }

// if (10 > 20) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }

var math = 17;
var science = 19;
var sport = 20;
var persianLanguage = 15;
var english = 20;

var average = (math + science + sport + persianLanguage + english) / 5;

// var condition1 = math >= 16;
// var condition2 = average >= 18;

// if (condition1) {
//     if (condition2){
//         console.log("iPhone");
//     }
// } else {
//     console.log("Chak afsari");
// }

// تمام شرط ها باید true بشود
// if (condition1 && condition2) {
//   console.log("iPhone");
// } else {
//   console.log("Chak afsari");
// }

// یا معدل بالای 18
// یا ریاضی = 20

// در شرط "یا" باید حداقل یک شرط true بشود

// var condition1 = average >= 18;
// var condition2 = math === 20;

// if (condition1 || condition2) {
//     console.log("Gift");
// }

// معدل بالای 17 بشه و علوم بالای 18
// یا ریاضی و زبان مساوی 20 بشه

// if ((average > 17 && science > 18) || (math == 20 && english == 20)) {
// }

// var num1 = "5";
// var num2 = 5;

// var cond1 = num1 == num2; // just check value
// var cond2 = num1 === num2; // check type and value

// if (num1 == num2) {
// }
// if (num1 == num2 && typeof num1 == typeof num2) {
// }

// var conditionAND = cond1 && cond2 && cond3 && cond4 && cond5;

// var conditionOR = cond1 || cond2 || cond3 || cond4 || cond5;

// true => "Woman"
// false=> "Man"
// var fullName = "Navid Tafreshi";
// var gender = false;

// var greetingMessage = "Hello Mr.Navid Tafreshi, Welcome";
// greetingMessage = "Hello Mrs.Leila Hatami, Welcome";

// if (gender === true) {
//   var greetingMessageWoman = "Hello Mrs." + fullName;
// } else if (gender === false) {
//   var greetingMessageMan = "Hello Mr." + fullName;
// }

// gender === true
// if (gender) {
//   var greetingMessageWoman = "Hello Mrs." + fullName;
//   //   gender === false
// } else if (!gender) {
//   var greetingMessageMan = "Hello Mr." + fullName;
// }

// var condition = 10 < 5;
// // if (condition === false) {
// if (!condition) {
// }

// if ternary
// زمانی که میخواهید بنا به یک سری شرایط یک متغیر تولید کنید

// var greetingMessage = gender === true ? "Mrs." : "Mr.";

// var weekNumber = Number(prompt("Enter week day num?"));
// var weekName = "";

// if (weekNumber === 1) {
//   weekName = "shanbe";
// } else if (weekNumber === 2) {
//   weekName = "yek shanbe";
// } else if (weekNumber === 3) {
//   weekName = "do shanbe";
// } else if (weekNumber === 4) {
//   weekName = "se shanbe";
// } else if (weekNumber === 5) {
//   weekName = "char shanbe";
// } else if (weekNumber === 6) {
//   weekName = "panj shanbe";
// } else if (weekNumber === 7) {
//   weekName = "jome";
// } else {
//   weekName = "incorrect answer";
// }
// console.log(weekName);

// var weekName = weekNumber === 1 ? "shanbe"
//     : weekNumber === 2 ? "yek shanbe"
//     : weekNumber === 3 ? "do shanbe"
//     : weekNumber === 4 ? "se shanbe"
//     : weekNumber === 5 ? "char shanbe"
//     : weekNumber === 6 ? "panj shanbe"
//     : weekNumber === 7 ? "jome"
//     : "incorrect answer";

// switch (weekNumber) { // equal
//   case 1:
//     weekName = "shanbe";
//     break;
//   case 2:
//     weekName = "yek shanbe";
//     break;
//   case 3:
//     weekName = "do shanbe";
//     break;
//   case 4:
//     weekName = "se shanbe";
//     break;
//   case 5:
//     weekName = "char shanbe";
//     break;
//   case 6:
//     weekName = "panj shanbe";
//     break;
//   case 7:
//     weekName = "jome";
//     break;
//   default:
//     weekName = "incorrect answer!";
//     break;
// }
