(function () {
  const myQuestions = [{
      question: "Hvilke fag kan du bedste lide?  ",
      answers: {
        a: "Design, billedkunst eller mediefag",
        b: "Matematik eller teknikfag",
        c: "Fysik, kemi eller biologi",
        d: "Virksomhedsøkonomi, samfundsfag eller kommunikation"
      }
    },
    {
      question: "Hvad er vigtigst for dig?",
      answers: {
        a: "At udfolde dig kreativt",
        b: "At være med til at forme og udvikle noget",
        c: "At være i naturen",
        d: "At have styr på økonomi"
      }
    },
    {
      question: "Hvad er du bedst til?",
      answers: {
        a: "Kreativitet",
        b: "Mekanik",
        c: "Naturvidenskab",
        d: "Handel og økonomi"
      },
    },
    {
      question: "Hvad kan du bedst lide at lave i din fritid?",
      answers: {
        a: "Tegne og være kreativ på forskellige måder",
        b: "At game og nørde med teknik",
        c: "Være ude i naturen",
        d: "Læse nyheder og følge børsen"
      },
    },
    {
      question: "Spørgsmål 5 (Find på noget)",
      answers: {
        a: "En",
        b: "To",
        c: "Tre",
        d: "Fire"
      },
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;
    var a = 0,
      b = 0,
      c = 0,
      d = 0;
    var udd = "";


    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === "a")
        a++;
      if (userAnswer === "b")
        b++;
      if (userAnswer === "c")
        c++;
      if (userAnswer === "d")
        d++;

    });

    if (a >= 2)
      udd = ` <div>
      <p class="resultat-titel">Multimediedesigner</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj <br> Du kommer også til at beskæftige dig med asodkasodkaosdjasdoajsodjasod</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>

      <p class="resultat-titel">Datamatiker</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>

      <p class="resultat-titel">IT-Teknolog</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>
  </div>`;
    if (b >= 2)
      udd = "Datamatiker ";
    if (c >= 2)
      udd = "Digitalkonceptudvikler ";
    if (d >= 2)
      udd = "Webudvikler ";

    if (a >= 3)
      udd = ` <div>
      <p class="resultat-titel">Multimediedesigner</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj <br> Du kommer også til at beskæftige dig med asodkasodkaosdjasdoajsodjasod</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>

      <p class="resultat-titel">Datamatiker</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>

      <p class="resultat-titel">IT-Teknolog</h1>
      <p class="resultat">Hvis du kan lide at plaspldapsdlapsdasdasdjasjd <br> Så ville du helt sikkert kunasdasdh ashdhasdhasdhahsd <br> På uddannelsen kommer ud til at askdhasjdhassahj</p>
      <a href="#"><p class="se-mere"> Se mere om uddannelsen <u>her</u> </p> </a>
      <a href="#"><p class="program"><i class="fas fa-plus"></i> Tilføj til dit program </p> </a>
  </div>`;
    if (b >= 3)
      udd = "Datamatiker ";
    if (c >= 3)
      udd = "Digitalkonceptudvikler ";
    if (d >= 3)
      udd = "Webudvikler ";
    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`; 
    resultsContainer.innerHTML = `<p class="string"> Vi tror disse uddannelser ville passe godt til dig! <i class="far fa-smile"></i>` + udd;

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();