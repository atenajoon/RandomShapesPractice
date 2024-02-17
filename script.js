const wrapper = document.getElementById('wrapper');

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

let prev = 0;

// 3 shape configs
const configCombinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 3, roundness: 3 },
];

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
    'IOS',
    'ANDROID',
    'JS',
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

const backgroundColors = [
  'linear-gradient(45deg, #ff5eb9, #5006da)',
  'linear-gradient(45deg, #ff5f6d, #ffc371)',
  'linear-gradient(45deg, #5fff6a, #71bdff)'
]

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};


function changeShape() {
  const index = uniqueRand(0, configCombinations.length, prev);
  const combination = configCombinations[index];
  // const combination = configCombinations[1];
  // toggleAlignSelf(index);

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}

// function toggleAlignSelf(i) {
//   console.log(i);
//   var shapeContainer = document.getElementById("shape-container");
//   shapeContainer.style.alignSelf = (i === 1) ? 'end' : '';
// }

//  change HTML content
function changeContent() {
  let contentIndex = 0;
  const currentContent = contentArray[contentIndex];
  // const currentContent = contentArray[2];

  // Loop through each div with class "word" and update its content from the array
  var divs = document.querySelectorAll('.word');

  divs.forEach(function (div, index) {
    if (div.id != 'wrapperDiv') {
      // Apply fade-out effect by adding 'hide' class
      div.classList.add('hide');

      // Schedule content update after the fade-out transition completes
      setTimeout(function () {
        // Update content
        div.textContent = currentContent[index];
        
        // Apply fade-in effect by removing 'hide' class
        div.classList.remove('hide');
      }, 700); // Wait for 500 milliseconds (same duration as transition)
    }  
  });

  contentIndex = (contentIndex + 1) % contentArray.length;
}
let colorIndex = 0;
function changeColor()
{
  var backgroundDiv = document.getElementById('background');
  backgroundDiv.style.background = backgroundColors[colorIndex];
  colorIndex = (colorIndex + 1) % backgroundColors.length;
}
setInterval(() => {
  // changeContent();
  changeShape();
  changeColor();
}, 3000);

wrapper.dataset.configuration = 1;
wrapper.dataset.roundness = 1;
