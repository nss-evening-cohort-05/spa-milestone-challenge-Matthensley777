var CarLot = (function(cars) {
    var currentCar;

    //  events if/else statements. 
    carContainer.addEventListener("click", selectCar);

    function selectCar(e) {
        var cars = document.getElementsByClassName("container");
        console.log(container)
        for (var j = 0; j < cars.length; j++) {
            cars[j];
        }

        if (e.target.classList.contains("container")) {
            e.target.style.border = "solid black 5px";
            currentCar = e.target.childNodes[1];
        } else if (e.target.classList.contains("child")) {
            e.target.parentNode.style.backgroundColor = "lightgrey";
            currentCar = e.target.childNodes[1];
        }
    }

    return cars;
})(CarLot || {});