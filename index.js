// Code your solution in this file!
const scruberHq = 42;

function distanceFromHqInBlocks(someValue) {
    let distance = scruberHq - someValue;
    return Math.abs(distance);
}

function distanceFromHqInFeet(someValue) {
    let distance = scruberHq - someValue;
    let distanceInFeet = distance * 264;
    return Math.abs(distanceInFeet);
}

function distanceTravelledInFeet(block1, block2) {
    let blockDistance = Math.abs(block1 - block2);
    let distanceTraveled = blockDistance * 264;
    return distanceTraveled;
}

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination)
    let distanceTraveled = blockDistance * 264;
    if (distanceTraveled <= 400) {
        console.log("gives customers a free sample");
        return 0;
    }
    else if (distanceTraveled >= 2500) {
        return "cannot travel that far";
    }
    else if (400 < distanceTraveled < 2000) {
        let rideCost = (0.02 * (distanceTraveled - 400));
        return rideCost;
    }
    else if (2000 <= distanceTraveled < 2500) {
        return 25;
    }
}