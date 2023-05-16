let timing = Array.from(document.querySelectorAll(".card .timing"));
let link = document.querySelector(".btn1 .one");
let back = document.querySelector(".btn1 .two");
let cards = Array.from(document.querySelectorAll(".card > div"));
let plans = Array.from(document.querySelectorAll(".card p"));
let labels = Array.from(document.querySelectorAll(".choosen label"))
let checkbox = document.getElementById("check");
let prices = Array.from(document.querySelectorAll(".card .price"));

const planName = localStorage.getItem("planName");
const planPrice = localStorage.getItem("planPrice");
const planTime = localStorage.getItem("planTime");
console.log(planTime)
console.log(plans[0].innerHTML)

if(planName) {
    cards.forEach((card)=>{
        card.classList.remove("active")
    })
    for(i=0; i<plans.length; i++) {
        if (planName == plans[i].innerHTML) {
            plans[i].parentElement.parentElement.classList.add("active")
        }
    }
    if (planTime === `$/Yr`) {
        checkbox.classList.add("toggel");
        prices.forEach((price)=>{
            price.innerHTML= price.innerHTML * 10;
        })
        timing.forEach((time)=>{
            time.innerHTML = `/Yr`;
        })

    } else {
        checkbox.classList.remove("toggel");

    }
    labels.forEach((lab)=>{
        lab.classList.remove("active")
    })
    for(i=0; i<labels.length; i++) {
        if(planTime === labels[i].dataset.time) {
            console.log(labels[i].dataset.time)
            labels[i].classList.add("active")
        }
    }
}
// localStorage.clear()
// for handel the active class function
function handelActive (element) {
 element.addEventListener("click", (e)=> {
    e.currentTarget.parentElement.querySelectorAll(".active").forEach((a)=>{
        a.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
})
}


  cards.forEach(ele =>{
    handelActive(ele)
})

cards.forEach((card) =>{
    card.addEventListener("click", function(){
        window.localStorage.setItem("planName", `${this.querySelector("p").innerHTML}`)
        window.localStorage.setItem("planPrice", `$${this.querySelector(".price").innerHTML}${this.querySelector(".timing").innerHTML}`)
        window.localStorage.setItem("planTime", `$${this.querySelector(".timing").innerHTML}`)
    })
})


checkbox.addEventListener("click", function(){
    //to ghange the yearly or monthly
    this.classList.toggle("toggel")
    // labels for yearly or monthly
        labels.forEach((lab)=>{
            lab.classList.toggle("active")
        })
    // to change prices
        if (this.classList.contains("toggel")) {
            prices.forEach((price) => {
                price.innerHTML = +price.innerHTML * 10;
            })
            timing.forEach((time) => {
                time.innerHTML = '/Yr'
            })
        } else {
            prices.forEach((price) => {
                price.innerHTML = +price.innerHTML / 10;
            })
            timing.forEach((time) => {
                time.innerHTML = '/mo'
            })
        }
})

link.addEventListener("click", function(e){
    let data = window.localStorage.getItem("planName");
    if (data) {
        window.location.href = 'add.html';
    } else {
        e.preventDefault();
        alert("please choose a plan")
        
    }
})
