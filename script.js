
const discoverButton = document.getElementById("discoverButton");
const letter = document.getElementById("letter");
const toast = document.getElementById("toast");

discoverButton.addEventListener("click", () => {
  letter.classList.add("visible");

  letter.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});
