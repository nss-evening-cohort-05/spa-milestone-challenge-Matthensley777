var CarLot = (function(cars) {

  //  events if/else statements. 
 carContainer.addEventListener("click", selectCar);

function selectCar() {
var cars = document.getElementsByClassName("container");

for (var j = 0; j < cars.length; j++) {
        cars[j].style.border = "solid black 1px";
    }

    if (cars.target.classList.contains("container")) {
        cars.target.style.border = "solidBlack 5px";
        cars = carLot.target;
    } 
    
}

    return cars;
})(CarLot || {});
