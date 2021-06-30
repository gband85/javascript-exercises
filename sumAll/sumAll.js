const sumAll = function(startNum,endNum) {
    let sum=0;
    let tempSwap=0;
    if (startNum<0 || endNum<0 || typeof(startNum)!=="number" || typeof(endNum)!=="number") { return "ERROR";}
    if (endNum<startNum) {
        tempSwap=endNum;
        endNum=startNum;
        startNum=tempSwap;
    }
    for (let i=startNum; i<=endNum; i++) {
        sum+=i;
    }
    return sum;
    };

module.exports = sumAll;
