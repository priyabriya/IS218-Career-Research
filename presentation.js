const choices = document.querySelectorAll('input[name="presentation"]');
function applyPresentation(value) {
  document.body.dataset.presentation = value;
  choices.forEach((choice) => {
    choice.checked = choice.value === value;
  });
}
applyPresentation(new URLSearchParams(location.search).get("view") === "systems" ? "systems" : "notebook");
choices.forEach((choice) => {
  choice.addEventListener("change", () => {
    applyPresentation(choice.value);
  });
});
