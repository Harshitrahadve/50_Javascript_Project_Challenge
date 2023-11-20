const incriment = document.querySelector("#prevCount");
const decriment = document.querySelector("#nextCount");
const value = document.querySelector("#output");
const reset = document.querySelector(".reset");


<<<<<<< HEAD
// incriment.addEventListener('click', () => {
//   value.innerHTML =+ value.textContent - changeBy.valueAsNumber;
// })


// decriment.addEventListener('click', () => {
//   value.innerHTML =+ value.textContent + changeBy.valueAsNumber;
// })
=======
incriment.addEventListener('click', () => {
  value.innerHTML =+ value.textContent - changeBy.valueAsNumber;
})


decriment.addEventListener('click', () => {
  value.innerHTML =+ value.textContent + changeBy.valueAsNumber;
})
>>>>>>> 00eeced7b341d9d31d6919e6169b65f2b506ab9f

reset.addEventListener("click", () => {
  value.innerText = 0;
})



