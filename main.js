    var CarLot = (function(cars) {





            // Loop over the inventory and populate the page


            document.getElementById("text").addEventListener("keyup", carBoundToText);

            function carBoundToText(e) {
                if (e.keyCode === 13) {
                    document.getElementById("text").value = "";
                } else {
                    currentCar.innerHTML = document.getElementById("text").value;
                }
            }

            return {
   selectCar: function(carType) {
    },

    	getMainCar : function() {
    		return cars;
    	}
    }
		


        // Load the inventory and send a callback function to be
        // invoked after the process is complete
        CarLot.loadInventory();


    return cars;

    })(CarLot || {});