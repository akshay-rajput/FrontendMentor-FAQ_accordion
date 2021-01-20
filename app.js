var question_links = document.getElementsByClassName("btn-expand");
var answers = document.getElementsByClassName('answer');
var i;

for (i = 0; i < question_links.length; i++) {
  question_links[i].addEventListener("click", function() {
    this.classList.add("active");

    let getSiblings = function (element) {
        // for collecting siblings
        let otherQuestions = []; 

        // if no parent, return no sibling
        if(!element.parentNode) {
            return otherQuestions;
        }
        
        // first child of the parent node
        let sibling  = element.parentNode.firstChild;
        
        // collecting siblings
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== element) {
                otherQuestions.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return otherQuestions;
    };

    // remove active class from other siblings
    let allQuestions =  getSiblings(this.parentNode);
    allQuestions.forEach(question => {
        let questionDiv = question.querySelector(`.btn-expand`);
        questionDiv.classList.remove('active');
    });
  });
}