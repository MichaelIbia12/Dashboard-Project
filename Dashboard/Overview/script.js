let firstPoint
let midPoint
let length
let obj = []
let money = []
let date = []
const searchBar = document.getElementById("search")
const listItem = document.querySelectorAll("#listItem")
var transactionHistory = [
    "Food:25,0000:1972002",
    "light:2,0000:19722"
]

for (let index = 0; index < transactionHistory.length; index++) {
    firstPoint = transactionHistory[index].indexOf(":")
    midPoint = transactionHistory[index].lastIndexOf(":")
    length = transactionHistory[index].length
    obj.push(transactionHistory[index].slice(0,firstPoint).toLowerCase())
    money.push(transactionHistory[index].slice(firstPoint+1,midPoint))
    date.push(transactionHistory[index].slice(midPoint+1,length))
    console.log(obj)
    
}
searchBar.addEventListener("input", () => {

    for (let index = 0; index < obj.length; index++) {
       if(obj[index].includes(searchBar.value)){
        console.log("e");
        console.log(index);
        $(listItem[index]).fadeIn(1000);
        break;
       }
       if(!obj[index].includes(searchBar.value)){
        console.log("j");
        $(listItem).fadeOut(10)
       
       }
    }
    if (searchBar.value == "") {
     $(listItem).fadeOut(10)
    }

})


