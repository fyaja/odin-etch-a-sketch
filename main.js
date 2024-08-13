function createBox(n) {
  let html = "";
  const container = document.querySelector(".container");
  for (let i = 0; i < n * n; i++) {
    html += `<div class="box"></div>`;
  }
  container.innerHTML = html;
  document.querySelectorAll(".box").forEach((box) => {
    box.style.flex = `1 1 calc(100% / ${n})`;
    box.style.height = `calc(100% / ${n})`;
  });
}

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = generateRandomColor();
  });
});

function generateRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

createBox(16);
