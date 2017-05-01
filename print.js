var CarLot = (function(cars) {
    var currentCar;

    carContainer.addEventListener("click", selectCar);

    //click event for cars
    function selectCar(e) {
        var cars = document.getElementsByClassName("mainCard");

        document.getElementById("text").value = "";

        //allows user to click on each card and type in the description box
        for (var i = 0; i < cars.length; i++) {
            cars[i].classList.remove("selected");
        }
        if (e.target.classList.contains("mainCard")) {
            e.target.classList.add("selected");
            e.target.childNodes[4].value = "";
            currentCar = e.target.childNodes[0].childNodes[4];
        } else if (e.target.classList.contains("child")) {
            e.target.parentNode.classList.add("selected");
            e.target.parentNode.value = "";
            currentCar = e.target.parentNode.childNodes[0].childNodes[4];
        } else if (e.target.classList.contains("grandChild")) {
            currentCar = e.target.parentNode.parentNode.childNodes[0].childNodes[4];
            e.target.parentNode.parentNode.classList.add("selected");
            e.target.parentNode.parentNode.value = "";
        }
        document.getElementById("text").focus();
    }

    cars.getCurrentCar = function() {
        return currentCar;
    }


    return cars;
})(CarLot || {});