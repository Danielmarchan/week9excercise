/*var strArray = ["Robin", "Lily", "Ted", "Barney", "Marshall"];
console.log(strArray.length);
console.log("\n");

for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i].length);   
}

var reversedArr = strArr.reverse();

function copyArray(someArray) {
    var newArray = [];
    for (let i = 0; i < someArray.length; i++) {
        newArray.push(someArray[i]);
    }
    return newArray;
}

var copy = copyArray(strArray);
var reversedArr = copy.reverse();

console.log("\n");
console.log(reversedArr);

strArray.sort();

console.log(strArray);

var numArray = [90, 74, 12, 83, 23];

function sortAnyArray(anyArray) {
    var newArray = [];
    for (let i = 0; i < anyArray.length; i++) {
        newArray.push(anyArray[i]);
    }
    
    newArray.sort(
        function sortEggsInNest(a, b) {
          if (a > b) {
            return 1;
          } else if (b > a) {
            return -1;
          } else {
            return 0;
          }
}
    );
    return newArray;
};

var sortedNumArray = sortAnyArray(numArray);

console.log(sortedNumArray);

var threeArray = ["AngularJS", "ReactJS", "VueJS"];

threeArray.shift();

console.log(threeArray)*/

var anArray = [];

function addString(arr) {
    let text = document.getElementsByTagName("input")[0].value;
    arr.push(text);
    let myLi = document.createElement("li");
    myLi.textContent = text;
    document.getElementsByTagName("ol")[0].appendChild(myLi);
}