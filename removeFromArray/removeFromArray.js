const removeFromArray = function(...args) {
    let array=args[0];
   // console.log(args);
    for (let i=1;i<args.length;i++) {
            
            if (array.indexOf(args[i])===-1) continue;
    array.splice(array.indexOf(args[i]),1);
        }
        return array;
    }

module.exports = removeFromArray;
