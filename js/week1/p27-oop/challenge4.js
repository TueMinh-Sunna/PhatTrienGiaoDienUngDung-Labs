import { CarCl } from "./challenge2.js";

class EVCl extends CarCl {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo
        console.log(this.charge);
        
    }

    accelerate() {
        this.speed += 20
        this.charge -= 1
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const e1 = new EVCl('Tesla', 120, 23)
e1.accelerate();
e1.brake()
e1.chargeBattery(90)