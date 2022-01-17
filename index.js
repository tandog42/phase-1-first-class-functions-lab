
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)
const returnLastTwoDrivers = (drivers) => drivers.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(num) {
return function  fareMultiplier(fare) {
    return fare * num }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction(driverArray);
}



