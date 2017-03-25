var CarLot = (function() {
    var inventory = [];

    var carContainer = document.getElementById("carContainer");
    var cars = [];

    function carDom(carData) {
console.log(carData);
        var carString = "";
        var currentCar;
        for (var i = 0; i < carData.length; i++) {
            currentCar = carData[i];
            carString += `<div class="col-sm-6 col-md-4">`;
            carString += `<div class="container">`;
            carString += `<h3>${currentCar.make}</h3>`;
            carString += `<p>${currentCar.model}</p>`;
            carString += `<p>${currentCar.year}</p>`;
            carString += `<p>${currentCar.price}</p>`;
            carString += `<p>${currentCar.description}</p>`;
            carString += `</div></div>`;

            carContainer.innerHTML = carString;
        }
    }


    return {
        loadInventory: function(callback) {


            


            var inventoryLoader = new XMLHttpRequest();
            
            inventoryLoader.addEventListener("load", function() {
            	var carData = JSON.parse(this.responseText).cars;
            carDom(carData);
            });
            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
        }
    };

})();





























