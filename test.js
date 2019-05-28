var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50; //properities of my car 
myCar.driver = "Asia";
myCar.drive = function () {console.log("now im driving");};

console.log(myCar.driver);


myCar.drive();

var myArray2 = [true,15, "hello"];

var myCar2 = { 
    maxSpeed: 40, 
    driver: "Asia", 
    drive: function (speed, time) {
            console.log(speed*time);
    } 
};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);