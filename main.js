var CarLot = (function(cars) {


    document.getElementById("text").addEventListener("keyup", carBoundToText);

    function carBoundToText(e) {
        var currentCar = CarLot.getCurrentCar();
        if (e.keyCode === 13) {
            document.getElementById("text").value = "";
        } else {
            currentCar.innerHTML = document.getElementById("text").value;
        }
    }

     
    CarLot.loadInventory();


    return cars;

})(CarLot || {});



