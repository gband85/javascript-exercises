const ftoc = function(tempFahrenheight) {
  return parseFloat(((5/9) * (tempFahrenheight -32)).toFixed(1));
  };
  
  const ctof = function(tempCelsius) {
  return parseFloat(((9/5)*tempCelsius+ 32).toFixed(1));
  };
  
  module.exports = {
    ftoc,
    ctof
  };
