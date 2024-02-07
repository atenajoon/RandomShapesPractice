const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 3 configs
const config = [1, 2, 3];

setInterval(() => {
  const index = rand(0, config.length);

  wrapper.dataset.configuration = config[index];
  console.log(index);
}, 1000);