data1 = "Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]"
data2 = "Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]"

function checkDogs (data) {
    dogsJulia = data.match(/\d+/g).map(Number).slice(0,5)
    dogsKate = data.match(/\d+/g).map(Number).slice(6,)

    shallowJulia = dogsJulia.slice(1,3)
    both = shallowJulia.concat(dogsKate)

    both.forEach((element, index) => {
        console.log(checkAdult(index, element));
    });
    
}

function checkAdult (number, age) {
    if (age >= 5)
        return `Dog number ${number} is an adult, and is ${age} years old`
    else return `Dog number ${number} is still a puppy`
} 

checkDogs(data1)
checkDogs(data2)
