let controlPanel = document.getElementsByClassName(
  "control-panel js-control-panel"
)[0];
controlPanel.addEventListener("click", (event) => {
  if (event.target.className === "js-button") {
    alert("Кнопка нажата");
  }
});
