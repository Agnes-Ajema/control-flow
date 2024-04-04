function arrayOfNumbers(arr) {
 const firstFourNumbers = arr.slice (0,4).map(item => item*item);
 console.log(firstFourNumbers)
 const lastTwoNumbers = arr.slice(-2).map (item => item +10);
 const middleNums =arr.slice(4,-2)
 const newArr = firstFourNumbers +(middleNums)+ " " +(lastTwoNumbers)
 // +(middleNums).c +(lastTwoNumbers)
 console.log(newArr)
}
arrayOfNumbers([2,4,6,8,10,12])

//break when the item is equal to fourth index

let arrNum = [1,2,3,4,5,6,7,8,9]
var i = 0
while (i<arrNum.length) {
    if(arrNum[i] ===arrNum[3]){
        break;
    }
    console.log(arrNum[i]);i++;
}

let fruits = ["apple","plum","banana","strawberry","kiwi"]
for (let i =1;i <= 5; i++) {
    if (i==3){
        continue;
    }
    console.log(fruits)
}

let strArr = (["Agnes","Ajema","Phineas","Precious","Gifton"]);
for (let element of strArr){
    console.log(element.toString())
}

function reverseSrt (String){
let reverseStr = ""
var i = String.length -1;
while (i>=0){
    reverseStr +=  String[i];
    i--;
}
return reverseStr;
}
let originalString = "beautiful"
let reversed = reverseSrt(originalString);
console.log(reversed);