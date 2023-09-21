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

// chatbot
document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const closeBtn = document.querySelector(".close-btn");
  const chatbox = document.querySelector(".chatbox");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector(".chat-input span");

  const API_URL = "http://localhost:5000/chat"; // Update with your server URL

  let userMessage = null;

  // Function to add a message to the chatbox
  function appendMessage(role, message) {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", role);
    chatLi.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatbox.appendChild(chatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }

  // Function to send user's message to the server
  function sendMessageToServer(message) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        const reply = data.reply;
        appendMessage("assistant-message", reply);

      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }

  // Event listener for sending a message
  sendChatBtn.addEventListener("click", () => {
    userMessage = chatInput.value.trim();
    if (userMessage) {
      //appendMessage("user", userMessage);
      appendMessage("user-message", userMessage);
      sendMessageToServer(userMessage);
      chatInput.value = "";
    }
  });

  // Event listener for pressing Enter key
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatBtn.click();
    }
  });

  // Delay the chatbot opening by a short time (e.g., 500 milliseconds)
  setTimeout(() => {
    chatbotToggler.click();
  }, 500);

  // Event listener for opening/closing the chatbot
  chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
  });

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
  });
});

// language






