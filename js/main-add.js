let rows = Array.from(document.querySelectorAll(".row"));
let link = document.querySelector(".btn1 a");


let inputs = Array.from(document.querySelectorAll(".row input"));
let p = Array.from(document.querySelectorAll(".row p"));

inputs.forEach((input)=>{
    input.checked = false;
})



for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key.includes("service")) {
        const value = localStorage.getItem(key);
        for(j=0; j<p.length; j++) {
            if (value === p[j].innerHTML) {
                p[j].parentElement.parentElement.querySelector("input").checked = true;
            }
        }
    }
}



link.addEventListener("click", function(e){
    // for(i=0; i<inputs.length; i++) {
        if(inputs[0].checked == false & inputs[1].checked == false & inputs[2].checked == false) {
            alert("please choose your services");
            e.preventDefault();
            return;
        }
    // }
})

let dataTime = localStorage.getItem("planTime");
if(dataTime === "$/Yr") {
    document.querySelectorAll(".price").forEach((price)=>{
        price.innerHTML = +price.innerHTML * 10;
    })
    document.querySelectorAll(".timing").forEach((time)=>{
        time.innerHTML = dataTime;
    })
} else {
    document.querySelectorAll(".timing").forEach((time)=>{
        time.innerHTML = dataTime;
    })
}
for (i=0; i<rows.length; i++) {

    if(rows[i].querySelector("input").checked) {
        rows[i].classList.add("active")
    } else {
        rows[i].classList.remove("active")
    
    }
}



rows.forEach((row)=>{
    row.addEventListener("click", function(){
        if(row.querySelector("input").checked) {
            row.classList.add("active")
        } else {
            row.classList.remove("active")

        }
    })
}) 

inputs.forEach((input)=>{
    input.addEventListener("click", function(){
        if (this.checked) {
            for(i=0; i<p.length; i++) {
                if (this.dataset.num === p[i].dataset.num) {
                    localStorage.setItem(`service${i}`, p[i].innerHTML)
                    localStorage.setItem(`servicePrice${i}`, p[i].parentElement.parentElement.parentElement.parentElement.querySelector(".price").innerHTML)
                }
            }
        } else {
            for(i=0; i<p.length; i++){
                if(this.dataset.num === p[i].dataset.num) {
                    localStorage.removeItem(`service${i}`)
                    localStorage.removeItem(`servicePrice${i}`)
                }
            }
        }
    })
})
