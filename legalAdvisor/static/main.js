// FAQ
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        
        question.parentElement.classList.toggle('active');
       
        const answer = question.nextElementSibling;
    
        answer.classList.toggle('open');
    });
});


// law made easy 
const cards = document.querySelectorAll('.lawCard-item');

cards.forEach( card => {
    card.addEventListener('click', function() {
        card.classList.add("isrotated");
    
        
        setTimeout(function() {
            card.classList.remove("isrotated");
        }, 1000); 
    })
});
