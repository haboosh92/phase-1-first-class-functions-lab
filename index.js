// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(arg) {
    return (mul) => {return arg*mul}
}

function fareDoubler(int) { 
    return createFareMultiplier(int)(2);
}
function fareTripler(int) { 
    return createFareMultiplier(int)(3);
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return  returnFirstTwoDrivers(arrayOfDrivers)
}