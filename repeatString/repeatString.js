const repeatString = function(string, num) {
	if (num<0) return "ERROR";
	let returnString='';
for (let i=1; i<=num; i++) {
returnString+=string;
}
return returnString;
};

module.exports = repeatString;
