const input = document.querySelector("input");
const shapes = document.querySelectorAll(".shape");
const spaceLine = document.querySelector(".status__line span");
const area = document.querySelector(".area");
const message = document.querySelector(".status__message");

input.addEventListener() => {
  shapes.forEach((shape) => (shape.style.margin = `0 ${value}px`));
  const val = Number(value) | 0;
  updateSpaceLine(val);
}
  if (val == 0) {
    addClassToArea(`-safe`);
    updateMessage(`Good job! no vulnerabilities detected`);
    updateShapesDialog("Thank you All");

    
  } else if (val >= 1 && val <=5) {
    addClassToArea(`-risky`);
    updateMessage(`Oh no , Some vulnerabilities were detected.`);
    updateShapesDialog("we can inprove! ", ": ) ");
    virusRiskyStatus();
  } else {
    virusSafeStatus();
    addClassToArea(`-danger`);
    updateMessage(`Oh no! several vulnerabilities.`);
    virusDangerStatus();
    updateShapesDialog("Help me ! ", "Please help.");
  }
});

const updateSpaceLine = (eachMargin) => {
  spaceLine.style.width = `${eachMargin * 2}px`;
};

const addClassToArea = (className) => {
  area.classList = `area ${className}`;
};

const updateMessage = (text) => {
  message.innerHTML = text;
};

const updateShapesDialog = (leftOne, rightOne) => {
  document.querySelector(
    ".shape:first-child .shape__text"
  ).innerHTML = leftOne;

  document.querySelector(
    ".shape:last-child .shape__text"
  ).innerHTML = rightOne;
};

const virusDangerStatus = () => {
  document
    .querySelectorAll(".area__virus")
    .forEach((item) => item.classList.remove("-clear"));
};

const virusRiskyStatus = () => {
  document
    .querySelectorAll(".area__virus.-high")
    .forEach((item) => item.classList.add("-clear"));
};

const virusSafeStatus = () => {
  document
    .querySelectorAll(".area__virus")
    .forEach((item) => item.classList.add("-clear"));
};

input.addEventListener("keydown", (e) => {
  const code = e.keyCode;
  if (code === 38) increase();
  if (code === 40) decrease();
});

const increase = () => {
  const value = Number(input.value);
  input.value = value > 85 ? 95 : value + 10;
};

const decrease = () => {
  const value = Number(input.value);
  input.value = value < 10 ? 5 : value - 10;
};