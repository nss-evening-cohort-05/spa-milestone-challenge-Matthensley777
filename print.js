var CarLot = (function(cars) {
    var currentCar;




    //  events if/else statements. 
    carContainer.addEventListener("click", selectCar);

    function selectCar(e) {
        var cars = document.getElementsByClassName("mainCard");
                console.log(cars)

        for (var i = 0; i < cars.length; i++) {
            cars[i].classList.remove("selected");

        }
        if (e.target.classList.contains("mainCard")) {
            e.target.classList.add("selected");
            currentCar = e.target.childNodes[0].childNodes[4];
        } else if (e.target.classList.contains("child")) {
            e.target.parentNode.classList.add("selected");
            currentCar = e.target.parentNode.childNodes[0].childNodes[4];
        } else if (e.target.classList.contains("grandChild")) {
            currentCar = e.target.parentNode.parentNode.childNodes[0].childNodes[4];
            e.target.parentNode.parentNode.classList.add("selected");
        } 
        document.getElementById("text").focus();
    }


    cars.getCurrentCar = function() {
        return currentCar;
    }

    




    return cars;
})(CarLot || {});