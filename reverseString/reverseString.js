const reverseString = function(string) {
    let stringArray=string.split('');
    stringArray.reverse();
    let reversedString='';
    for (let i=0; i<stringArray.length; i++) {
    reversedString=reversedString.concat(stringArray[i])
    }
    return reversedString;
    };

module.exports = reverseString;
