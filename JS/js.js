/* ----------------------------------------------------------- Udd. test ----------------------------------------------------------- */


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
      question: "Hvornår føler du dig mest presset?",
      answers: {
        a: "Når jeg skal sidde og lytte hele dagen?",
        b: "Når jeg ikke kan sidde og følge hele processen?",
        c: "Når der nærmest kun er teoretisk arbejde?",
        d: "Når jeg er udenfor hele dagen med venner og familie uden smartphone og pc?"
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
      udd = ` <div class="row">
      <div class="col-1-of-3">
          <div class="card">
              <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">
                      &nbsp;
                  </div>
                  <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--1">Multimediedesigner</span>
                  </h4>
                  <div class="card__details">
                      <ul>
                          <li>Design</li>
                          <li>Kommunikation</li>
                          <li>Programmering</li>
                      </ul>
                  </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                      <div class="card__price-box">
                          <a href="#"><p class="card__price-value">Se mere om uddannelsen</p></a>
                          <a href="#" class="btn btn--white"><i class="fas fa-plus"></i>Tilføj til program</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-1-of-3">
          <div class="card">
              <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">
                      &nbsp;
                  </div>
                  <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--2">Datamatiker</span>
                  </h4>
                  <div class="card__details">
                      <ul>
                          <li>Systemudvikling</li>
                          <li>Forretning og IT</li>
                          <li>Programmering</li>
                      </ul>
                  </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                  <div class="card__cta">
                      <div class="card__price-box">
                      <a href="#"><p class="card__price-value">Se mere om uddannelsen</p></a>
                      <a href="#" class="btn btn--white"><i class="fas fa-plus"></i>Tilføj til program</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-1-of-3">
          <div class="card">
              <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">
                      &nbsp;
                  </div>
                  <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--3">IT-Teknolog</span>
                  </h4>
                  <div class="card__details">
                      <ul>
                          <li>Netværksteknologi</li>
                          <li>IT-sikkerhed</li>
                          <li>Programmering</li>
                      </ul>
                  </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                  <div class="card__cta">
                      <div class="card__price-box">
                      <a href="#"><p class="card__price-value">Se mere om uddannelsen</p></a>
                      <a href="#" class="btn btn--white"><i class="fas fa-plus"></i>Tilføj til program</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
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
    // Show a string of text before the results
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


