// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    const firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function (drivers){
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const  createFareMultiplier = function(fareMultiplier){
    return function(value) {
        return fareMultiplier * value;
    }

}

const fareDoubler= function(createFareMultiplier){
    return createFareMultiplier *2;

}

const fareTripler= function(createFareMultiplier){
    return createFareMultiplier* 3;

}

function selectDifferentDrivers(drivers, lastDrivers){
    return lastDrivers(drivers)

}
