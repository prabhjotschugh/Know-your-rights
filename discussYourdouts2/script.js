// Sample data for answered questions
const sampleAnswers = [
    { category: 'legal', question: 'How can I file a legal complaint?', answer: 'To file a legal complaint in India, consult a lawyer for guidance. Prepare a written complaint detailing facts, parties involved, and relief sought. File it with the appropriate court, pay the required fees, and serve copies to the opposing party. Follow court procedures and attend hearings as directed by the court.' },
    { category: 'rights', question: 'What are my rights as a tenant?', answer: 'As a tenant in India, you have rights, including peaceful possession, reasonable rent increases, repair and maintenance by the landlord, and protection from eviction without due process. You can also seek legal remedies for disputes and ensure a written rent agreement for clarity on terms and conditions.' },
    { category: 'government', question: 'How can I apply for a government job?', answer: 'To apply for a government job in India, visit official websites like SSC, UPSC, or state portals. Find job notifications, meet eligibility criteria, fill out the application form online or offline, pay any fees, submit documents and photos, attend exams or interviews, and follow post-application instructions. Stay informed about job openings and requirements.' },
    { category: 'finance', question: 'How can I invest in stocks?', answer: 'Investing in stocks involves opening a brokerage account, researching companies, and building a diversified portfolio. Keep an eye on stock prices and market news, buy shares through your chosen platform, and decide whether to hold for long-term growth or sell based on your financial goals and risk tolerance.' },
    { category: 'education', question: 'How can I apply for Scholarship for Btech', answer: 'To apply for a B.Tech scholarship in India, first, identify suitable scholarships offered by government agencies, universities, or private organizations. Carefully review the eligibility criteria and application deadlines. Prepare the necessary documents, such as academic records and income certificates, and complete the application form, whether online or offline. Ensure that you submit your application along with the required documents before the specified deadline. Once submitted, patiently await the scholarship results and be proactive in following up if needed' },
    // Add more sample questions and answers as needed
];

// Function to display sample questions and answers by category
function displaySampleAnswers(category) {
    const sampleAnswerList = document.getElementById('sample-answer-list');
    sampleAnswerList.innerHTML = '';

    if (category === 'all') {
        sampleAnswers.forEach(sample => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>${sample.question}</h3>
                <p>${sample.answer}</p>
            `;
            sampleAnswerList.appendChild(item);
        });
    } else {
        const filteredAnswers = sampleAnswers.filter(sample => sample.category === category);
        filteredAnswers.forEach(sample => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>${sample.question}</h3>
                <p>${sample.answer}</p>
            `;
            sampleAnswerList.appendChild(item);
        });
    }
}

// Event listener for the sample category filter
const sampleCategoryFilter = document.getElementById('sample-category-filter');
sampleCategoryFilter.addEventListener('change', function () {
    const selectedCategory = sampleCategoryFilter.value;
    displaySampleAnswers(selectedCategory);
});

// Event listener for the message submission form
const messageForm = document.getElementById('message-form');
messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;
    
    // Show the modal popup
    modal.style.display = 'block';

    messageForm.reset();
});

// Get the modal and close button elements
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Initial display of sample questions and answers
displaySampleAnswers('all');
