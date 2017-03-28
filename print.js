var CarLot = (function(cars) {

  //  events if/else statements. 
 carContainer.addEventListener("click", selectCar);

function selectCar() {
var cars = document.getElementsByClassName("container");

for (var j = 0; j < cars.length; j++) {
        cars[j].style.border = "solid black 5px";
    }

    // if (cars.target.contains("container")) {
    //     cars.target.style.border = "solidBlack 5px";
    //     cars = carLot.target;
    // } 
    
}

    return cars;
})(CarLot || {});
