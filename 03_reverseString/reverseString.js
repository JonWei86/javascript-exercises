const reverseString = function(string) {
    let reversedString = ""
    for (let i = string.length-1; i>=0; i--){
        reversedString += string[i]
        
    }
    console.log(reversedString);
    return reversedString
};

reverseString("machine");

// Do not edit below this line
module.exports = reverseString;
