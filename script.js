const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

let prev = 0;
const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next)
    next = rand(min, max);
  return next;

}

// 3 configs
const config = [1, 2, 3];

setInterval(() => {
  const index = uniqueRand(0, config.length, prev);

  wrapper.dataset.configuration = config[index];
  console.log(index);

  prev = index;
}, 3000);

// wrapper.dataset.configuration = 1;
