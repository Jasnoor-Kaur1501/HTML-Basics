const kettle = document.querySelector(".kettle");
const coffee = document.querySelector(".coffee");

let filled = false;

kettle.addEventListener("click", () => {
  if (!filled) {
    coffee.style.height = "70%";
    filled = true;
  } else {
    coffee.style.height = "0%";
    filled = false;
  }
});

