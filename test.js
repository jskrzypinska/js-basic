
// var myDate = new Date();
// console.log(myDate);

// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2545, 0, 31, 15, 25, 46);
// console.log(myPastDate);
// console.log(myFutureDate);

var birthday = new Date (1985, 0, 15, 11, 15, 25);
var birthday2 = new Date (1985, 0, 15, 11, 15, 25);
// month of the date (0-11)
console.log(birthday.getMonth());
//full year (YYYY)
console.log(birthday.getFullYear());
//date of the month (1-31)
console.log(birthday.getDate());
//day of the week (0-6)
console.log(birthday.getDay());
//get the hour of the date (0-23)
console.log(birthday.getHours());
//number of milliseconds since 1st Jan 1970
console.log(birthday.getTime());

//return not equle
// if (birthday === birthday2) {
//     console.log ("birthdays are equle");
// } else {
//     console.log ("birthdays are not equal");
// }
// retur equle
if (birthday.getTime() === birthday2.getTime()) {
    console.log ("birthdays are equle");
} else {
    console.log ("birthdays are not equal");
}