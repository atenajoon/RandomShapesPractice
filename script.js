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
const configCombinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 3, roundness: 3 }
];

setInterval(() => {
  const index = uniqueRand(0, configCombinations.length, prev);
  const combination = configCombinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}, 3000);

// wrapper.dataset.configuration = 2;
// wrapper.dataset.roundness = 2;
