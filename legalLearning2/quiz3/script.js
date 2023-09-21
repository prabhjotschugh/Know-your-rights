var quiz = {
  data: [
    {
        q: "What is the legal age for voting in India?",
        o: ["16", "18", "21", "25"],
        a: 1, // Answer is 18
    },
    {
        q: "Which document serves as proof of Indian citizenship?",
        o: ["Passport", "Aadhar Card", "Voter ID Card", "Driving License"],
        a: 1, // Answer is Aadhar Card
    },
    {
        q: "Which court is the highest judicial authority in India?",
        o: ["Supreme Court", "High Court", "District Court", "Magistrate Court"],
        a: 0, // Answer is Supreme Court
    },
    {
        q: "What is the punishment for dowry harassment under Section 498A of the Indian Penal Code (IPC)?",
        o: ["Fine", "Imprisonment", "Community service", "Probation"],
        a: 1, // Answer is Imprisonment
    },
    {
        q: "In which year did India adopt its current Constitution?",
        o: ["1945", "1950", "1960", "1975"],
        a: 1, // Answer is 1950
    },
    {
        q: "Who has the power to appoint judges to the Supreme Court of India?",
        o: ["President of India", "Prime Minister", "Chief Justice of India", "Governor of RBI"],
        a: 0, // Answer is President of India
    },
    {
        q: "What does the Right to Information (RTI) Act, 2005, enable citizens to do?",
        o: ["Access government information", "Access classified documents", "Access private company records", "Access foreign bank records"],
        a: 0, // Answer is Access government information
    },
    {
        q: "Which law governs the protection of women against domestic violence in India?",
        o: ["Indian Penal Code", "Dowry Prohibition Act", "Domestic Violence Act", "Hindu Marriage Act"],
        a: 2, // Answer is Domestic Violence Act
    },
    {
        q: "What is the legal age for marriage for men and women in India?",
        o: ["18 for men, 21 for women", "21 for men, 18 for women", "18 for both men and women", "20 for men, 18 for women"],
        a: 0, // Answer is 18 for men, 21 for women
    },
    {
        q: "Which Indian state has a separate legal system under Article 370 of the Constitution?",
        o: ["Kerala", "Jammu and Kashmir", "Maharashtra", "Tamil Nadu"],
        a: 1, // Answer is Jammu and Kashmir
    },
    {
        q: "Under which law are intellectual property rights protected in India?",
        o: ["Copyright Act", "Trademarks Act", "Patents Act", "Designs Act"],
        a: 0, // Answer is Copyright Act
    },
    {
        q: "What is the punishment for murder under Section 302 of the IPC?",
        o: ["Life imprisonment", "Death penalty", "10 years imprisonment", "20 years imprisonment"],
        a: 1, // Answer is Death penalty
    },
    {
        q: "Which law regulates environmental protection and conservation in India?",
        o: ["Wildlife Protection Act", "Forest Conservation Act", "Environmental Protection Act", "Water (Prevention and Control of Pollution) Act"],
        a: 2, // Answer is Environmental Protection Act
    },
    {
        q: "What is the minimum age for employment in hazardous occupations under the Child Labour (Prohibition and Regulation) Act?",
        o: ["12 years", "14 years", "16 years", "18 years"],
        a: 1, // Answer is 14 years
    },
    {
        q: "In which case did the Indian Supreme Court recognize the right to privacy as a fundamental right?",
        o: ["A. K. Gopalan v. State of Madras", "Maneka Gandhi v. Union of India", "Puttaswamy v. Union of India", "ADM Jabalpur v. Shiv Kant Shukla"],
        a: 2, // Answer is Puttaswamy v. Union of India
    },
    {
        q: "What does the Juvenile Justice (Care and Protection of Children) Act, 2015, deal with?",
        o: ["Child labor", "Child marriage", "Rights and protection of children", "Child adoption"],
        a: 2, // Answer is Rights and protection of children
    },
    {
        q: "Which law regulates the prevention and control of air pollution in India?",
        o: ["Water (Prevention and Control of Pollution) Act", "Air (Prevention and Control of Pollution) Act", "Forest (Conservation) Act", "Environmental Impact Assessment (EIA) Act"],
        a: 1, // Answer is Air (Prevention and Control of Pollution) Act
    },
    {
        q: "What is the maximum duration of preventive detention without trial under the National Security Act (NSA)?",
        o: ["90 days", "180 days", "365 days", "730 days"],
        a: 2, // Answer is 365 days
    },
    {
        q: "Under which law can a person seek protection against workplace harassment?",
        o: ["Employees' State Insurance Act", "Factories Act", "Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act", "Minimum Wages Act"],
        a: 2, // Answer is Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act
    },
    {
        q: "What is the punishment for drug trafficking under the Narcotic Drugs and Psychotropic Substances Act, 1985?",
        o: ["Fine", "Life imprisonment", "Community service", "Death penalty"],
        a: 1, // Answer is Life imprisonment
    },
    {
        q: "Under which law can an Indian citizen file a Public Interest Litigation (PIL)?",
        o: ["Indian Penal Code", "Constitution of India", "Civil Procedure Code", "Consumer Protection Act"],
        a: 1, // Answer is Constitution of India
    },
    {
        q: "What is the minimum percentage of reservation for Scheduled Castes (SC) in educational institutions in India?",
        o: ["10%", "15%", "25%", "30%"],
        a: 1, // Answer is 15%
    },
    {
        q: "Which law governs the banking and financial sector in India?",
        o: ["Companies Act", "Banking Regulation Act", "Securities Exchange Board of India Act", "Income Tax Act"],
        a: 1, // Answer is Banking Regulation Act
    },
    {
        q: "What is the maximum duration of preventive detention without trial under the National Security Act (NSA)?",
        o: ["90 days", "180 days", "365 days", "730 days"],
        a: 2, // Answer is 365 days
    },
    {
        q: "Under which law can a person seek protection against workplace harassment?",
        o: ["Employees' State Insurance Act", "Factories Act", "Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act", "Minimum Wages Act"],
        a: 2, // Answer is Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act
    },
    {
        q: "What is the punishment for drug trafficking under the Narcotic Drugs and Psychotropic Substances Act, 1985?",
        o: ["Fine", "Life imprisonment", "Community service", "Death penalty"],
        a: 1, // Answer is Life imprisonment
    },
    {
        q: "Under which law can an Indian citizen file a Public Interest Litigation (PIL)?",
        o: ["Indian Penal Code", "Constitution of India", "Civil Procedure Code", "Consumer Protection Act"],
        a: 1, // Answer is Constitution of India
    },
    {
        q: "What is the minimum percentage of reservation for Scheduled Castes (SC) in educational institutions in India?",
        o: ["10%", "15%", "25%", "30%"],
        a: 1, // Answer is 15%
    },
    {
        q: "Which law governs the banking and financial sector in India?",
        o: ["Companies Act", "Banking Regulation Act", "Securities Exchange Board of India Act", "Income Tax Act"],
        a: 1, // Answer is Banking Regulation Act
    },
  ],

    hWrap: null, 
    hRules: null,
    hQn: null, 
    hAns: null,
    hPlayButton: null,

    now: 0, 
    score: 0, 
    questionsToAsk: 5, 
  
    init: () => {
      quiz.hWrap = document.getElementById("quizWrap");
  
      quiz.hRules = document.createElement("div");
      quiz.hRules.id = "quizRules";
      quiz.hWrap.appendChild(quiz.hRules);
  
      let rulesText = document.createElement("div");

      let rule1 = document.createElement("p");
      rule1.innerHTML = "<b>Welcome to the trivia quiz! Here are the rules:</b?";
      rulesText.appendChild(rule1);
      
      let rule2 = document.createElement("p");
      rule2.innerHTML = "1. Answer all questions to the best of your knowledge.";
      rulesText.appendChild(rule2);
      
      let rule3 = document.createElement("p");
      rule3.innerHTML = "2. Each correct answer earns you one point.";
      rulesText.appendChild(rule3);
      
      let rule4 = document.createElement("p");
      rule4.innerHTML = "3. There are a total of 5 questions in this quiz.";
      rulesText.appendChild(rule4);
      
      let rule5 = document.createElement("p");
      rule5.innerHTML = "4. Good luck and enjoy the quiz!<br>";
      rulesText.appendChild(rule5);
      
      quiz.hRules.appendChild(rulesText);
      
      quiz.hPlayButton = document.createElement("button");
      quiz.hPlayButton.innerText = "Play";
      quiz.hPlayButton.classList.add("play-button"); // Add a class
      quiz.hPlayButton.addEventListener("click", () => {
        quiz.startGame();
        quiz.hRules.style.display = "none"; 
        quiz.hQn.style.display = "block"; 
      });

      quiz.hRules.appendChild(quiz.hPlayButton);
  
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);
  
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
  
      quiz.hRules.style.display = "block"; 
    },
 
   startGame: () => {
     quiz.score = 0;
     quiz.shuffleArray(quiz.data);
 
     quiz.now = 0;
     quiz.askQuestion();
   },
 
   askQuestion: () => {
     if (quiz.now < quiz.questionsToAsk) {
       quiz.draw();
     } else {
       quiz.endGame();
     }
   },
 
   draw: () => {
     quiz.hQn.innerHTML = quiz.data[quiz.now].q;
 
     quiz.hAns.innerHTML = "";
     for (let i in quiz.data[quiz.now].o) {
       let radio = document.createElement("input");
       radio.type = "radio";
       radio.name = "quiz";
       radio.id = "quizo" + i;
       quiz.hAns.appendChild(radio);
 
       let label = document.createElement("label");
       label.innerHTML = quiz.data[quiz.now].o[i];
       label.setAttribute("for", "quizo" + i);
       label.dataset.idx = i;
       label.addEventListener("click", () => {
         quiz.select(label);
       });
       quiz.hAns.appendChild(label);
     }
   },
 
   select: (option) => {
     let all = quiz.hAns.getElementsByTagName("label");
     for (let label of all) {
       label.removeEventListener("click", quiz.select);
     }
 
     let correct = option.dataset.idx == quiz.data[quiz.now].a;
     if (correct) {
       quiz.score++;
       option.classList.add("correct");
     } else {
       option.classList.add("wrong");
     }
 
     quiz.now++;
     setTimeout(() => {
       quiz.askQuestion();
     }, 1000);
   },
 
   endGame: () => {
    if (quiz.score === quiz.questionsToAsk) {
      quiz.hQn.innerHTML = "Congratulations, you won!";
    } else {
      quiz.hQn.innerHTML = `You scored ${quiz.score} out of ${quiz.questionsToAsk} questions.`;
    }
    quiz.hAns.innerHTML = "";  

      let playAgainButton = document.createElement("button");
      playAgainButton.innerText = "Play Again";
      playAgainButton.classList.add("play-again-button"); // Add a class
      playAgainButton.addEventListener("click", () => {
        quiz.startGame();
      });
      quiz.hAns.appendChild(playAgainButton);

   },
 
   shuffleArray: (array) => {
     for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
     }
   },
 };
 
 window.addEventListener("load", quiz.init);