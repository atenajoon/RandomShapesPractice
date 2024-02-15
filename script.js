const wrapper = document.getElementById('wrapper');

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

let prev = 0;

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

// 3 configs
const configCombinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 3, roundness: 3 },
];

function changeShape() {
  const index = uniqueRand(0, configCombinations.length, prev);
  // const combination = configCombinations[index];
  const combination = configCombinations[1];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}

//  3 content configs
const contentArray = [
  [
    'HTML',
    'REACT',
    'CSS',
    'JS',
    'WORDPRESS',
    '',
    'PHP',
    'LARAVEL',
    'FIGMA',
    'BOOTSTRAP',
  ],
  [
    'SONAR CLOUD',
    'JS',
    'ANDROID',
    'IOS',
    'TESTFLIGHT',
    '',
    'GIT',
    'REACT NATIVE',
    'UX/UI',
    'JENKINS',
  ],
  [
    'SONAR CLOUD',
    'GIT',
    'UNITY',
    'IOS',
    'JENKINS',
    '',
    'C#',
    'ANDROID',
    'TESTFLIGHT',
    'UX/UI',
  ],
];

let contentIndex = 0;

//  change HTML content
function changeContent() {
  // const currentContent = contentArray[contentIndex];
  const currentContent = contentArray[2];

  // Loop through each div with class "word" and update its content from the array
  var divs = document.querySelectorAll('.word');

  divs.forEach(function (div, index) {
    if (div.id != 'wrapper') div.textContent = currentContent[index];
  });

  contentIndex = (contentIndex + 1) % contentArray.length;
}

setInterval(() => {
  changeContent();
  changeShape();
}, 3000);

wrapper.dataset.configuration = 1;
wrapper.dataset.roundness = 1;
