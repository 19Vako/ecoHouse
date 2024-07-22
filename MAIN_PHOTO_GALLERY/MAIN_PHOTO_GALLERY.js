document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  const layers = document.querySelectorAll(".layer");
  let currentIndex = 2; // Центральний шар

  function updateLayers() {
    layers.forEach((layer, index) => {
      const offset = index - currentIndex;
      if (offset === -2 || offset === 3) {
        layer.classList.remove("middle", "front", "center", "right");
        layer.classList.add("back", "left");
      } else if (offset === -1 || offset === 4) {
        layer.classList.remove("back", "front", "center", "right");
        layer.classList.add("middle", "left");
      } else if (offset === 0) {
        layer.classList.remove("back", "middle", "left", "right");
        layer.classList.add("front", "center");
      } else if (offset === 1 || offset === -4) {
        layer.classList.remove("back", "front", "center", "left");
        layer.classList.add("middle", "right");
      } else if (offset === 2 || offset === -3) {
        layer.classList.remove("middle", "front", "center", "left");
        layer.classList.add("back", "right");
      }
    });
  }

  function showNextLayer() {
    currentIndex = (currentIndex + 1) % layers.length;
    updateLayers();
  }

  function showPrevLayer() {
    currentIndex = (currentIndex - 1 + layers.length) % layers.length;
    updateLayers();
  }

  prevButton.addEventListener("click", showPrevLayer);
  nextButton.addEventListener("click", showNextLayer);

  updateLayers();
});
