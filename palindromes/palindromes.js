const palindromes = function (str) {
    
        var str1 = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
        
        var str2 = Array.from(str1).reverse().toString().replace(/\W/g, '');
      
        if (str1 === str2) return true;
        
        else return false;        
      
};

module.exports = palindromes;
