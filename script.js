const typed = new Typed(".typer", {
  strings: [
    "Html <i class='bi bi-filetype-html'></i>",
    "Css <i class='bi bi-filetype-css'></i>",
    "Php <i class='bi bi-filetype-php'></i>",
    "Javascript <i class='bi bi-filetype-js'></i>",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 1000;

valueNumbers.forEach((valueNumber) => {
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);

  let counter = setInterval(() => {
    startValue += 1;
    valueNumber.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    console.log(src);
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
