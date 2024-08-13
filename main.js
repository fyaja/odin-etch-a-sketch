function createBox(n) {
  let html = "";
  const container = document.querySelector(".container");
  for (let i = 0; i < n * n; i++) {
    html += `<div class="box"></div>`;
  }
  container.innerHTML = html;

  const generateRandomColorRGBA = generateRandomColor();
  document.querySelectorAll(".box").forEach((box) => {
    box.style.flex = `1 1 calc(100% / ${n})`;
    box.style.height = `calc(100% / ${n})`;
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = generateRandomColorRGBA();
    });
  });
}

createBox(16);

function generateRandomColor() {
  let a = 0.1;
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return function () {
    if (a <= 1) {
      a += 0.1;
    } else {
      a = 0.1;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
}

function customGrid() {
  let size = parseInt(prompt("Please enter the size, limited to 100:"));

  while (isNaN(size) || size <= 0 || size > 100) {
    size = parseInt(prompt("Please enter a valid number! Limited to 100:"));
    if (size === null) {
      return;
    }
  }
  createBox(size);
}

document.querySelector(".custom-grid").addEventListener("click", customGrid);
