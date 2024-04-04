/ speed detecting system. speed<70 = ok.
// for every 5km per hour above 70 = i demerit point.
//print total demerit points
// if demerit points are >12 print license suspended.

//create a function as control.(default manenoz nini nini)

function checkSpeed() {
    const carSpeedElement = document.getElementById("car-speed");

    if (!carSpeedElement) {
        console.error("Car speed input element not found");
        return;
    }

    const carSpeed = carSpeedElement.value;
    const currentSpeedInt = parseInt(carSpeed);

    const demeritPointsElement = document.getElementById("demeritPoints");
    if (!demeritPointsElement) {
        console.error("Demerit points input element not found");
        return;
    }

    const demeritPoints = demeritPointsElement.value;
    const demeritPointsInt = parseInt(demeritPoints);
    
//we now set the conditions to be satisfied
    if (currentSpeedInt <= 70) {
        console.log("Ok");
        
    } else {
        const exceededSpeed = currentSpeedInt - 70;
        const points = Math.floor(exceededSpeed / 5);
        const totalPoints = demeritPointsInt + points;
        
//display of the repurcations.
        console.log(`Your points are ${points} demerit points`);
        console.log(`Exceeded the limit by ${exceededSpeed} km/hr`);
        console.log(`Your current points of demerit are ${totalPoints} points`);


        //condition setting using if else.
        if (totalPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Drive safe, nice driving!");
        }
    }
}
//add an event listener.
document.addEventListener("DOMContentLoaded", function() {
    const checkSpeedButton = document.getElementById("check-speed");

    checkSpeedButton.addEventListener("click", function() {
        checkSpeed();
    });
});
