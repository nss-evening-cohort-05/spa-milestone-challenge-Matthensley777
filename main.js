var CarLot = (function(cars) {

    cars.selectCar = function(carType) {
    }



            // Loop over the inventory and populate the page


            document.getElementById("text").addEventListener("keyup", carBoundToText);

            function carBoundToText(e) {
                var currentCar = CarLot.getCurrentCar();
                if (e.keyCode === 13) {
                    document.getElementById("text").value = "";
                } else {
                    currentCar.innerHTML = document.getElementById("text").value;
                }
            }

            
		


        // Load the inventory and send a callback function to be
        // invoked after the process is complete
        CarLot.loadInventory();


    return cars;

    })(CarLot || {});