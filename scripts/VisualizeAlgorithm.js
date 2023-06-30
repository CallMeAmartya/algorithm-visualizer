let numberArray = [
  57, 12, 34, 68, 23, 51, 6, 41, 19, 63, 29, 55, 9, 39, 60, 47, 17, 25, 52, 3,
  66, 30, 14, 42, 59, 21, 49, 15, 31, 7,
];

let animationDelay = 200;

renderDefaultArray();

/**
 * The function appends a number to an array and renders the updated array.
 * @returns nothing (undefined).
 */
function appendNumber() {
  const numericInputElement = document.querySelector(".js-number-input");
  const inputNumber = Number(numericInputElement.value);
  if (inputNumber <= 0 || inputNumber > 70) {
    window.alert("Please enter a postive number between 1 and 70!");
    numericInputElement.value = "";
    return;
  }
  numberArray.push(inputNumber);
  renderAppendArray(inputNumber);
  numericInputElement.value = "";
}

/**
 * The function sorts an array of numbers in ascending order using the bubble sort algorithm and logs
 * the array before and after sorting.
 */
async function sort() {
  console.log("Before sort: " + numberArray);
  for (let i = 0; i < numberArray.length - 1; i++) {
    for (let j = 0; j < numberArray.length - i - 1; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        const temp = numberArray[j + 1];
        numberArray[j + 1] = numberArray[j];
        numberArray[j] = temp;
        j === numberArray.length - i - 2
          ? renderArrayWhileSorting(numberArray.length - i - 1)
          : renderArrayWhileSorting(numberArray.length - i);
      }
      await delay(animationDelay);
    }
  }
  renderArrayWhileSorting(0);
  console.log("After sort: " + numberArray);
}

/**
 * The function "resetArray" resets the "numberArray" variable to a default array and then calls the
 * "renderDefaultArray" function.
 */
function resetArray() {
  numberArray = [
    57, 12, 34, 68, 23, 51, 6, 41, 19, 63, 29, 55, 9, 39, 60, 47, 17, 25, 52, 3,
    66, 30, 14, 42, 59, 21, 49, 15, 31, 7,
  ];
  renderDefaultArray();
}

/**
 * The clearArray function clears the numberArray and renders the default array.
 */
function clearArray() {
  numberArray = [];
  renderDefaultArray();
}

/**
 * The function "renderDefaultArray" renders an array of numbers as a set of div elements with heights
 * proportional to their values.
 */
function renderDefaultArray() {
  document.querySelector(".js-numbers-array").innerHTML = "";
  numberArray.forEach((value, index) => {
    const arrayElement = document.createElement("div");
    arrayElement.className = "array-element";
    arrayElement.innerHTML = value;
    arrayElement.style.height = value * 10 + "px";
    document.querySelector(".js-numbers-array").appendChild(arrayElement);
  });
}

/**
 * The function renders new element appended to an array, with its height based on the value of
 * the element.
 * @param number - The `number` parameter is the value that will be appended to the array and rendered
 * as a div element on the webpage.
 */
async function renderAppendArray(number) {
  const numberElementDiv = document.createElement("div");
  numberElementDiv.className = "array-element";
  numberElementDiv.id = numberArray.length - 1;
  numberElementDiv.innerHTML = number;
  numberElementDiv.style.height = "0";
  numberElementDiv.style.color = "black";
  document.querySelector(".js-numbers-array").appendChild(numberElementDiv);
  await delay(20);
  numberElementDiv.style.height = numberArray[numberElementDiv.id] * 10 + "px";
}

/**
 * The function renders an array of numbers while sorting and changes the color of the elements based
 * on the index provided.
 * @param colorChangeIndex - The `colorChangeIndex` parameter is the index of the array element up to
 * which the color of the element should be changed.
 */
function renderArrayWhileSorting(colorChangeIndex) {
  document.querySelector(".js-numbers-array").innerHTML = "";
  numberArray.forEach((value, index) => {
    const arrayElement = document.createElement("div");
    arrayElement.className = "array-element";
    arrayElement.innerHTML = value;
    arrayElement.style.height = value * 10 + "px";
    if (index >= colorChangeIndex) {
      arrayElement.style.backgroundColor = "#18127B";
      arrayElement.style.color = "white";
      arrayElement.style.boxShadow =
        "0 0 7px #fff, 0 0 10px #fff, 0 0 21px 	#070090";
    }
    document.querySelector(".js-numbers-array").appendChild(arrayElement);
  });
}

const animationSpeedSlider = document.querySelector(".js-animation-speed-bar");
animationSpeedSlider.addEventListener("change", () => {
  const speedMultiplier = animationSpeedSlider.value;
  console.log(speedMultiplier);
  animationDelay = 200 * (1 / speedMultiplier);
});

function handleInputKeyDownEvent(event) {
  if (event.key === "Enter") {
    appendNumber();
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
