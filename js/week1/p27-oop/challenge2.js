class CarCl {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    speedUSgetter() {
        return (this.speed/1.6).toFixed(2)
    }

    speedUSSetter() {
        this.speed = this.speed*1.6
    }

    accelerate() {
        this.speed += 10
        console.log(this.speed);
    }

    brake () {
        this.speed -= 5
        console.log(this.speed);
    }
}

car1 = new Carcl('BMW',120)
car1.accelerate()
car1.accelerate()
car1.brake()
car1.speedUSSetter(33)
console.log(car1.speedUSgetter);

