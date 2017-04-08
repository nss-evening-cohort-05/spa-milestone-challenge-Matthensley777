var CarLot = (function(cars) {
    var currentCar;

    

    
    //  events if/else statements. 
    carContainer.addEventListener("click", selectCar);

    function selectCar(e) {
        var cars = document.getElementsByClassName("container");
        console.log(container)
       

        if (e.target.classList.contains("container")) {
        	console.log(container)
            currentCar = e.target.childNodes[4];
        } else if (e.target.classList.contains("child")) {
        	console.log(container)
            currentCar = e.target.childNodes[4];

        }
        document.getElementById("text").focus();
    }

    
   cars.getCurrentCar = function() {
        return currentCar;
   }






    return cars;
})(CarLot || {});


