
var Car = function (maxSpeed, driver) {

    this.maxSpeed = maxSpeed; // property
    this.driver = driver; // property
    this.drive = function (speed, time) {
        console.log(speed*time); // method
    },
    this.logDriver = function() { //method
        console.log("driver name is " + this.driver);
    }
}

var myCar = new Car (50, "Asia");
var myCar2 = new Car (3, "Gosia");
var myCar3 = new Car (15, "Hela");
var myCar4 = new Car (2, "Basia");

myCar.drive(30,5);
myCar3.logDriver();
