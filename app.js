var question_links = document.getElementsByClassName("btn-expand");
var i;

for (i = 0; i < question_links.length; i++) {
  question_links[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}