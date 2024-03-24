//  speed detecting system. speed<70 = ok.
// for every 5km per hour above 70 = i demerit point.
//print total demerit points
// if demerit points are >12 print license suspended.


const currentSpeed = prompt('Input current Vehicle speed');// declare the varible to hold the vehicle speed
// and a prompt for the user to input
const currentSpeedInt = parseInt(currentSpeed);
//we set the data type of the input values to be numbers
const demeritPoints = prompt('Input total demerit points');
//assuming we have the points gained by  driver,
//we prompt the user to input it. 
//Otherwise we should create a function calculated the accrued points(FYI)
const demeritPointsInt = parseInt(demeritPoints)
// we declare that the points just like speed are numbers.
//by using () we invoke the demeritPoints function.
//lay man terms we just called it.


//Now we have to set condtions inorder to hve the logic of the whole thing.

if(currentSpeedInt <= 70){
    console.log("Ok");
}
//using the if statement, we now set to set and satisfy the condtion.
else{
    const exceededSpeed = currentSpeed -70;
    // we declared a new varible which will hold the vlue of the exceeded speed.
    const points = Math.floor(exceeededSpeed / 5);
    const totalPoints = demeritPointsINt + points;

    // having gotten the figures we need for the above opertions, we  only remain with displaying them.


    console.log("your points are ${points} demerit points." );
    // we use the $ sign to refere to the variable points.

    console.log (" exceeded speed limit by ${exceededSpeed} km/h")
    console.log("your total points are currently at ${totalPoints}.")
    // Show the total points so far


}
// to show the driver the result according to the retrieved data.
if(demeritPoints > 12){
    console.log("License suspended");
}else{
    console.log("Keep adhering to the limits. Kudos driver");
}
