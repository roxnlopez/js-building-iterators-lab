// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//  CODE INSIDE HERE   //
//need values to execute function
//IF you don’t have an accumulator THEN set the array’s first value as the accumulator.  
//ELSE the accumulator is set to the callback.
    for (var i = 0; i < arr.length; i++) {
    		if (arr == "undefined" && i===0){
    			arr = arr[i];
    		} else {
    			callback(arr, arr[i]);
    	}  
    }
    return callback(arr);
}
 //console.log("accumulators suck");


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
