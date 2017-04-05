var CarLot = (function(cars) {

    //  cars.selectCar = function(carType) {
    // }

    var carContainer = document.getElementById("carContainer");

    function carDom(carData) {
        var carString = "";
        var currentCar;
        for (var i = 0; i < carData.length; i++) {
            currentCar = carData[i];
            carString += `<div class="col-sm-5 col-md-2">`;
            carString += `<div id="container" class="container">`;
            carString += `<h3 class="child" > Make: ${currentCar.make}</h3>`;
            carString += `<p> Model: ${currentCar.model}</p>`;
            carString += `<p> Year: ${currentCar.year}</p>`;
            carString += `<p> Price: $${currentCar.price}</p>`;
            carString += `<p class="description" id="description"> Description: ${currentCar.description}</p>`;
            carString += `</div></div>`;

            carContainer.innerHTML = carString;
        }
    }

    return {
        loadInventory: function(callback) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", function() {

                var carData = JSON.parse(this.responseText).cars;
                cars = carData;
                carDom(carData);
            });
            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
        },
        getInventory: function() {
        	return cars;
        }
    };

   

    return cars;

})(CarLot || {});





















