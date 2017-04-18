var CarLot = (function() {

     

    var carContainer = document.getElementById("carContainer");

    function carDom(carData) {
        var carString = "";
        var currentCar;
        for (var i = 0; i < carData.length; i++) {
            currentCar = carData[i];
            carString += `<div class="col-sm-5 col-md-2 mainCard">`;
            carString += `<div id="container" class="child">`;
            carString += `<h3 class="grandChild" > Make: ${currentCar.make}</h3>`;
            carString += `<p class="grandChild"> Model: ${currentCar.model}</p>`;
            carString += `<p class="grandChild"> Year: ${currentCar.year}</p>`;
            carString += `<p class="grandChild"> Price: $${currentCar.price}</p>`;
            carString += `<p class="grandChild" id="description"> Description: ${currentCar.description}</p>`;
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

   


})(CarLot || {});





















