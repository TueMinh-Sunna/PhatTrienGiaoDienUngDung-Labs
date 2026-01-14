mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69
}

john = {
    name: "John Smith",
    mass: 92,
    height: 1.95
}

function calcBMI (object) {
    let bmi = (object.mass / (object.height ** 2)).toFixed(2)
    object.bmi = bmi
    return bmi
}

calcBMI(mark)
calcBMI(john)

if (john.bmi > mark.bmi)
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
else if (mark.bmi > john.bmi)
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
else {
    console.log(`Same (${mark.bmi})`);
    
}