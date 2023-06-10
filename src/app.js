function gooniesYes(event) {
  event.preventDefault();
  let yes = document.querySelector("#question-goonies");
  yes.innerHTML = "Welcome to The Goonies Club!";
}

let answerYes = document.querySelector("#yes-goonies");
answerYes.addEventListener("click", gooniesYes);

function gooniesNo(event) {
  event.preventDefault();
  let no = document.querySelector("#question-goonies");
  no.innerHTML = "Go watch The Goonies!";
  window.open("https://www.justwatch.com/us/movie/the-goonies", "_blank");
}
let answerNo = document.querySelector("#no-goonies");
answerNo.addEventListener("click", gooniesNo);
