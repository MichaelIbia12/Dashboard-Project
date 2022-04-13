const stage = document.getElementById("stage")
const time = document.getElementById("time")
const welcomer = document.getElementById("welcomer")
const ctx = document.getElementById('myChart').getContext('2d');
const logs = document.getElementById("logs")
const c2 = document.getElementById("c2")
const plus = document.querySelectorAll(".plus")

let current_amount = 0
let level = 0
let history_log = [];
let int;
let background;
let question;
let current_Stage;
let account = {
    dollar: 0,
    euro: 0,
    goal: {
     
        monthly: 10000,
        daily: 375,
    }

}
let barOne = "black"
let barTwo = "grey"
let barThree = "whiet"
let barFour = "lightgrey"
let barFive = "#12121"
var datas=[1, 100, 3, 5, 2, 3] 
let date = new Date()
let time_hour = date.getHours()
let User = "michael"
let timer
let login_count
let Stage = ["Basic", "Secondry", "Emperor", "God"]
let background_color = ["rgb(9, 31, 90)", "rgb(9, 85, 90)", "rgb(9, 105, 25)", "rgb(105, 9, 9)"]

if(time_hour >= 0 && time_hour  >= 11){
 timer = "Good Morning"
 time.innerText = timer
}
if(time_hour  >= 11 && time_hour  >= 4){
 timer = "Good Afternoon"
 time.innerText = timer
}
if(time_hour  >= 4 && time_hour  >= 0){
 timer = "Good Evening"
 time.innerText = timer
}
if(login_count > 0){
    welcomer.innerText = "Welcome back, sir"
}else{
    welcomer.innerText = "Welcome, "+ User

}

//teansactions

for (let index = 0; index < plus.length; index++) {

    plus[index].addEventListener("click", () => {

        question = prompt("how much into your " + plus[index].id + " account")
        int = parseInt(question)
        console.log(int);
        if (question === "") {
            alert("Your transaction has been cancelled")
        } else {
            if (plus[index].id === "dollar") {

                console.log(dollarConverter(int))
                let input = document.getElementById(plus[index].id + "s")
                input.innerText = "$ " + dollarConverter(int)
                account.dollar = dollarConverter(int)
                sign = "$ "
                current_amount = dollarConverter(int)
                

            } else {
                console.log(euroConverter(int))
                let input = document.getElementById(plus[index].id + "s")
                input.innerText = "€ " + euroConverter(int)
                sign = "€ "
                current_amount = euroConverter(int)
                
            }

            if (dollarConverter(int) >= account.goal.monthly && date.getMonth() < date.getMonth() + 1) {
                alert("monthly goal completed")
                current_Stage = Stage[level++]
                stage.current_Stage
            }
            if (euroConverter(int) >= account.goal.monthly && date.getMonth() < date.getMonth() + 1) {
                alert("monthly goal completed")
                current_Stage = Stage[level++]
                stage.current_Stage
            }
            if (dollarConverter(int) >= account.goal.daily&& date.getDay() < date.getDay() + 1) {
                alert("Daily goal completed")
                datas[0] = 100

            }
            if (euroConverter(int) >= account.goal.daily && date.getDay() < date.getDay() + 1) {
                alert("Daily goal completed")

            }
            let li = document.createElement("div")
            let text = document.createElement("span")
            li.classList.add("log")
            li.appendChild(text)
            let history_text = text.innerText = "You just added " + sign + current_amount + " to your " + plus[index].id + " account"
            logs.appendChild(li)
            history_log.push(history_text)
         
        }
    })
    break

}
function dollarConverter(int) {
    let result = int + account.dollar
    return result;
}
function euroConverter(int) {
    let result = int + account.euro
    return result;
} 

//charts

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Saved',
           data: datas,
            backgroundColor: [
                barOne,
                barTwo,
                barThree,
                barFour,
                barFive
            ],
            borderColor: [
                barOne,
                barTwo,
                barThree,
                barFour,
                barFive
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});