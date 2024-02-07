const wrapper = document.getElementById("wrapper");

const min = 3;
const max = 8;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

setInterval(() => {
  
  const res = rand(min, max);
  console.log("I love u: ", res);
}, 1000);