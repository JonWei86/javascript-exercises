const leapYears = function(year) {
    //leap years / 4
    // leap year / 100 is not a leap year
    //unless / by 400 then it is a leap year
if(year % 400 === 0){
    return true
} else if (year % 4 === 0 && year % 100 !== 0){
    return true
} else{
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
