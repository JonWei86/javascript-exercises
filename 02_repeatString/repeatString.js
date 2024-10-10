

const repeatString = function(string,num) {
let resultString = ""
if (num < 0){
    return "ERROR"
}else {
    for (i=0; i<num; i++){
    resultString += string
    }
    return (resultString);
}
};

repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
