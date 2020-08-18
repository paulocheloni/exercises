const addOne = (currentValue) => {
  return Number(currentValue) + 1;
};

const createCounterElement = (counterElement) => {
  const element = document.createElement("p");
  const btn = document.querySelector("#count-btn");
  if (!counterElement) {
    element.id = "counter";
    element.innerText = "1";
    btn.insertAdjacentElement("afterend", element);
  }
};

const countClicks = () => {
  const clickCount = document.getElementById("counter");
  createCounterElement(clickCount);
  if (clickCount) {
    clickCount.innerText = addOne(clickCount.innerText);
  }
};

const btn = document.querySelector("#count-btn");
btn.addEventListener("click", () => {
  countClicks();
});
