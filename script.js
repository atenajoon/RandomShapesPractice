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

//  change HTML content
function changeContent() {
    // Define an array with new content for each div
    var newContentArray = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
  
    // Loop through each div with class "content" and update its content from the array
    var divs = document.querySelectorAll(".word");
  divs.forEach(function (div, index) {
      if(div.id != 'wrapper')
        div.textContent = newContentArray[index];
    });
}

setInterval(() => {
  changeContent();
//   const index = uniqueRand(0, configCombinations.length, prev);
//   const combination = configCombinations[index];

//   wrapper.dataset.configuration = combination.configuration;
//   wrapper.dataset.roundness = combination.roundness;

//   prev = index;
}, 3000);

wrapper.dataset.configuration = 1;
wrapper.dataset.roundness = 1;
