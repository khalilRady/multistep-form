// let link1 = document.querySelector(".link1");

// let form = document.querySelector(".input1");
// link1.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   for (i = 0; i < inputs1.length; i++) {
//     if (inputs1[i].value === "") {
//       alert("please fill all inputs");
//       return;
//     }
//   }
//   document.querySelector("form").submit();
// });

let inputs1 = Array.from(document.querySelectorAll(".input1 input"));

let data0 = localStorage.getItem("input0");
let data1 = localStorage.getItem("input1");
let data2 = localStorage.getItem("input2");
let arrData = [data0, data1, data2]
if (data0) {
  for(i = 0; i<inputs1.length; i++) {
    inputs1[i].value = arrData[i];
  }
}
let link = document.querySelector("a.link1");
link.addEventListener("click", (e) => {
  e.preventDefault();
  for (i = 0; i < inputs1.length; i++) {
    if (inputs1[i].value === "") {
      alert("please fill all inputs");
      return;
    }
    window.localStorage.setItem(`input${i}`, inputs1[i].value)
  }
  document.querySelector("form").submit();
});