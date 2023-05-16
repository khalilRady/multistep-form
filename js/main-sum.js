document.querySelector(".row1 h3").innerHTML = localStorage.getItem("planName")
document.querySelector(".row1 .price").innerHTML = localStorage.getItem("planPrice").replace(/\D/g, "")
document.querySelector(".row1 .timing").innerHTML = localStorage.getItem("planTime");


let arr = [];
for(i=0; i<localStorage.length; i++) {
    if(localStorage.key(i).includes("servicePrice")) {
        arr.push(localStorage.key(i))
    }
}

let content = document.querySelector(".content1")
for(i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key.includes("service") && key.length < 10) {
        const row2 = document.createElement("div");
        row2.className = 'row2';
        const detail = document.createElement("div");
        detail.className = 'detail';
        detail.innerHTML = localStorage.getItem(key);
        const div = document.createElement("div");
        div.className = 'price'
        for(j=0; j<arr.length; j++) {
            if(arr[j][arr[j].length-1] === key[key.length-1]) {
                
                div.innerHTML = `+${localStorage.getItem(arr[j])}${localStorage.getItem("planTime")}`;
            }
        }
        row2.appendChild(detail);
        row2.appendChild(div);
        content.appendChild(row2)
    }
}

let div = document.querySelectorAll(".row2 .price");
let sum = 0;
for(i=0; i<div.length; i++) {
  sum = sum + parseInt(div[i].innerHTML.match(/\d+/g))   
}
let planPrice = localStorage.getItem("planPrice");
planPrice = parseInt(planPrice.match(/\d+/g));
sum = sum + planPrice;
document.querySelector(".total1").innerHTML = `${sum}${localStorage.getItem("planTime")}`
 let time = document.querySelector(".time");
 if(localStorage.getItem("planTime") === "$/mo"){
    time.innerHTML = 'Month';
} else {
     time.innerHTML = 'Year';

 }