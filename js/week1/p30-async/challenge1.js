function whereAmI(array) {
    fetch("https://geocode.xyz/" + array[0] + "," + array[1] + "?geoit=json")
        .then(response => response.json())
        .then(data => {
            console.log("You are in " + data.standard[region] + ", " + data.standard[countryname]);
            
        })
        .catch(error => {
            console.log(error);
        })

}

coordinates1 = [52.508, 13.381]
coordinates2 = [19.037, 72.873]
coordinates3 = [-33.933, 18.474]

whereAmI(coordinates1)
whereAmI(coordinates2)
whereAmI(coordinates3)