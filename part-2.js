//Assignment 2-A Part 2
//Due Feb 12
//This short exercise will introduce you to arrays


//This creates an empty new array
var newArray = [];

//TODO: populate the new array with 1000 new random values between 50 and 200
//hint: array.push
//hint: Math.random() creates a random value between 0 and 1
var i=0;
//var sum = 0;
while (i<1000) {
    var num = Math.random();
    if (num>=0.25) {
        newArray.push(num*200);
//        sum = sum+newArray[i];
        i++;
    }
}


//TODO: after you populate the array, find the average of all the values in the array
//console.log(sum/1000);
//var arraySum0 = 0;
//for (i=0;i<1000;i++) {
//    arraySum0 = arraySum0+newArray[i];
//}
//console.log(arraySum0/1000);
var arraySum = 0;
newArray.forEach(function(arrayElement){
	//hint: here, we are "looping" through the array, accessing each array element one by one
	//we can add the value to arraySum
	//and finally, we divide arraySum by the total number of array elements
    arraySum = arraySum + arrayElement;
});
console.log(arraySum/1000);
