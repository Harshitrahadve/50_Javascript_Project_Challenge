const incriment = document.querySelector("#prevCount");
const decriment = document.querySelector("#nextCount");
const value = document.querySelector("#output");
const reset = document.querySelector(".reset");


// incriment.addEventListener('click', () => {
//   value.innerHTML =+ value.textContent - changeBy.valueAsNumber;
// })


// decriment.addEventListener('click', () => {
//   value.innerHTML =+ value.textContent + changeBy.valueAsNumber;
// })
incriment.addEventListener('click', () => {
  value.innerHTML =+ value.textContent - changeBy.valueAsNumber;
})


decriment.addEventListener('click', () => {
  value.innerHTML =+ value.textContent + changeBy.valueAsNumber;
})

reset.addEventListener("click", () => {
  value.innerText = 0;
})



