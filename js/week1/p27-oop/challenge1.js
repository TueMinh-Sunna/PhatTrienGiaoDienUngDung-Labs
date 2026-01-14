export function Car (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed);
}

const car1 = new Car('BMW',120)
car1.accelerate()
car1.accelerate()
car1.brake()