var CarLot = (function(cars) {
    var currentCar;

    // cars.selectCar = function(carType) {
    // }

    
    //  events if/else statements. 
    carContainer.addEventListener("click", selectCar);

    function selectCar(e) {
        var cars = document.getElementsByClassName("container");
        console.log(container)
       

        if (e.target.classList.contains("container")) {
        	// console.log(container)
            // e.target.style.border = "solid black 5px";
            // e.target.parentNode.style.backgroundColor = "lightgrey";
            // e.target.parentNode.style.maxWidth = "200px";
            // currentCar = e.target.childNodes[1];
        // } else if (e.target.classList.contains("child")) {
        // 	console.log(container)
        //     e.target.parentNode.style.maxWidth = "200px";
        //     currentCar = e.target.childNodes[1];

        }
        document.getElementById("text").focus();
    }

//     return {

//     getPrintCar : function() {
//         	return cars;
//         }
// }

// document.getElementById("text").addEventListener("keyup", carBoundToText);

// function carBoundToText(e) {
//     if (e.keyCode === 13) {
//         document.getElementById("text").value = "";
//     } else {
//         currentCar.innerHTML = document.getElementById("text").value;
//     }
// }



    return cars;
})(CarLot || {});


//cars.selectCar = function() {}

//cars.getCurrentCar