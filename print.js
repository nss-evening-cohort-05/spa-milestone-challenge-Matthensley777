var CarLot = (function(cars) {
    var currentCar;

    //  events if/else statements. 
    carContainer.addEventListener("click", selectCar);

    function selectCar(e) {
        var cars = document.getElementsByClassName("container");
console.log(container)
        for (var j = 0; j < cars.length; j++) {
            cars[j].style.border = "solid black 5px";
        }

        if (e.target.classList.contains("container")) {
            e.target.style.backgroundColor = "lightgrey";
            currentCar = e.target;
        }

    }

    return cars;
})(CarLot || {});