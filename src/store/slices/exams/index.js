import { createSlice } from "@reduxjs/toolkit";
import img27 from "../../../assets/imgs/q27.png";
import img28 from "../../../assets/imgs/q28.png";

export const examsSlice = createSlice({
  name: "exams",
  initialState: {
    list: [],
    orderArray: [],
  },
  reducers: {
    setExams: (state, action) => {
      state.list = action.payload;
    },
    setOrderArray: (state, action) => {
      state.orderArray = action.payload;
    },
  },
});

export const { setExams, setOrderArray } = examsSlice.actions;

export default examsSlice.reducer;

export const fetchOrderArray = () => (dispatch) => {
  function getRandomNumber() {
    if (getRandomNumber.remaining.length === 0) {
      getRandomNumber.remaining = Array.from(Array(40).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 25; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "In the following equation -y = -2x - 4 the slope is:",
      Img: "",
      Responses: ["Negative", "Positive", "Undefined", "Zero", "None"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question:
        "A Gym charge one time enrolment fee of $50 plus $12 monthly fee after that. What equation best model the information describes?",
      Img: "",
      Responses: [
        "y = 50x",
        "y = 12x",
        "y = 12x + 50",
        "y = 50x + 12",
        "None is correct",
      ],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question: "Which of the following equation has slope equal to zero?",
      Img: "",
      Responses: [
        "y = 2x - 1",
        "y = 1/2 x+ 0",
        "y = 2x+ 4",
        "y = 4",
        "y = x - 1",
      ],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "What is the inverse reciprocal of the slope passing through the following points (3, 9) and (0, 0).",
      Img: "",
      Responses: ["m = -3", "m = 9/3", "m = 3", "m = -1/3", "m = is undefine"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "A painter charge $50 for 2 hours and $100 for 4 hours of work. What is the equation that best describe the painter hourly rate?",
      Img: "",
      Responses: [
        "y = 50x + 100",
        "y = 50x",
        "y = 25x",
        "y = 50x + 100 *4",
        "No Answer is correct",
      ],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "Which of the following equation has y-intercept equal to zero?",
      Img: "",
      Responses: [
        "y + 3 = 1/2 x - 1",
        "y = x - 1",
        "y – 1 = 1/2 x + 2",
        "y = 1/2 x -7",
        "y -2 = 1/2 x – 2",
      ],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "How do you model the process of buying a car when you pay a $3,000 down payment and a monthly payment of $350. Which number represent the slope and which the y-intercept?",
      Img: "",
      Responses: [
        "$3,000 represent the slope but $350 is not needed in this case",
        "$350 represent the slope and $3,000 the y-intercept.",
        "$3,000 represent the slope and $350 the y-intercept.",
        "$350 represent the slope but you cannot find the y intercept",
        "The slope and Y-intercept is to model linear equations in coordinate plane NOT in finance",
      ],
      Correct: [1],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Which of the following equation has slope undefine?",
      Img: "",
      Responses: ["5 + x = 5y", "x = 5 + y", "-y = 5", "y = 5", "x = 5"],
      Correct: [4],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "What is the slope of the following equation ? 4y = 2x - 8",
      Img: "",
      Responses: ["m = 1/2", "m = 4", "m = -2", "m = -4", "m = 0"],
      Correct: [0],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Solve the equation 3(x−7) = 11 + 2x and find the value of x.",
      Img: "",
      Responses: ["36", "32", "18", "21", "22"],
      Correct: [1],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "What is the y-intercept of the following equation?  -4y = 4x - 4",
      Img: "",
      Responses: ["b = 1", "b = -2", "b = 2", "b = -4", "b = undefine"],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "After finding the value of “X” and “Y” with the following equations",
      Img: "",
      Responses: ["b = 100", "b = -32", "b = 85", "b = 121", "b = undefine"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A car travels at a constant speed and covers 150 miles in 3 hours. How many miles will it cover in 5 hours if in the last 2 hours the driver increase the speed by 20%?",
      Img: "",
      Responses: [
        "200 miles",
        "270 miles",
        "300 miles",
        "350 miles",
        "250 miles",
      ],
      Correct: [1],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "A company charges $25 per hour for consulting services and has a one-time setup fee of $50. If a client is billed $200 for a consultation, how many hours of consulting did the client receive?",
      Img: "",
      Responses: ["10 hours", "8 hours", "6 hours", "12 hours", "12 hours"],
      Correct: [2],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "Jane saves $50 each month and starts with an initial savings of $200. How much will her total savings be after 10 months if in month 6 she did not save and in month 8 spend $120?",
      Img: "",
      Responses: ["$630", "$720", "$600", "$530", "$235"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "A phone plan costs $30 per month plus $0.10 per minute on calls and 0.01 per text. If a customer’s bill for one month is $55, how many minutes of calls did he make if also test 120 text messages?",
      Img: "",
      Responses: [
        "120 minutes",
        "300 minutes",
        "238 minutes",
        "355 minutes",
        "332 minutes",
      ],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "Given the point (3, −2) and the slope m = 4/5 ​, write the equation of the line in point-slope form.",
      Img: "",
      Responses: [
        "y + 2 = -4/5(x−3)",
        "𝑦 + 2 = 4/5​(𝑥−3)",
        "y - 2 = -2(x+3)",
        "y + 2 = -4/5 (x+3)",
        "y - 2 = 4/5(x+3)",
      ],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "What is the slope of the line parallel to the following function? y = -2 x - 4",
      Img: "",
      Responses: [
        "Answer: 1/2",
        "Answer: 2",
        "Answer: -2",
        "Answer: 1/4",
        "Answer: -4",
      ],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "A farmer has chickens and cows. The total number of animals is 42. If there are 2 times as many chickens as cows, how many of each animal does the farmer have?",
      Img: "",
      Responses: [
        "Answer: x=30, y=10",
        "Answer: x=15, y=30",
        "Answer: x=28, y=14",
        "Answer: x=18, y=22",
        "Answer: x=14, y=26",
      ],
      Correct: [4],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "What is the slope of the line perpendicular to the following function?",
      Img: "",
      Responses: ["m=1/2", "m=2", "m=3", "m=-1", "m=6"],
      Correct: [3],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "Which are the intercepts from the following Function: 2x + 3y =9",
      Img: "",
      Responses: [
        "(0, 1) and (4.5, 0)",
        "(0, -3) and (-4.5, 0)",
        "(0, -3) and (4.5, 2)",
        "(0, 3) and (4.5, 0)",
        "No answer is correct",
      ],
      Correct: [3],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question: "The equation of the line 3y = -x +3 has:",
      Img: "",
      Responses: [
        "Slope -1/3 and y-intercept 1",
        "Slope 0 and y-intercept 1",
        "Slope -1 and y-intercept 3",
        "Slope 1/3 and y-intercept -3",
        "Slope -1 and y-intercept 1",
      ],
      Correct: [0],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question: "Which of the following Graph has slope undefine?",
      Img: "",
      Responses: ["y = x", "y = 0", "y = -4 x", "x = -2", "y = -1/2x"],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question: "Write the following equation in Standard Form: y = 6x + 2/3",
      Img: "",
      Responses: [
        "y - 2/3 = 6x",
        "3y - 18x = 2/3",
        "-6x - 2/3 = -y",
        "No answer is correct",
        "3y - 18x = 2",
      ],
      Correct: [4],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question: "Which of the following lines are NOT parallel?",
      Img: "",
      Responses: [
        "Y = -1/2x + 1 and -y = -1/2x − 3",
        "Y = 3x + 4 and y -3x = + 4",
        "Y = 2x + 5 and y = 2x - 5",
        "Y = −x + 2 and y - x = −3",
        "Y -5 = −x -7 and y - x= -7",
      ],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question:
        "Which of the following points lies on the graph of the equation",
      Img: "",
      Responses: ["(1, 1)", "(2, 1)", "(3, -2)", "(4, 4)", "(-2, 3)"],
      Correct: [1],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question: "Which of the following equations match the indicated Graph?",
      Img: img27,
      Responses: [
        "y - 3 = 4x",
        "x + y = 1",
        "y = -2x - 1",
        "x + 0.5 y = -1",
        "-y + 2x = -1",
      ],
      Correct: [4],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question: "What is the slope of the following graph?",
      Img: img28,
      Responses: [
        "Slope = 1/2",
        "Slope = -2",
        "Slope = 2/3",
        "Slope = 4",
        "Slope = 1/3",
      ],
      Correct: [2],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question:
        "At a Sport Olympics event, tickets for adults are $25 and for children are $15. If they sold a total of 100 tickets and made $1,800, how many adult and child tickets were sold?",
      Img: "",
      Responses: [
        "Answer: x=60, y=40",
        "Answer: x=50, y=50",
        "Answer: x=90, y=10",
        "Answer: x=55, y=45",
        "Answer: x=70, y=30",
      ],
      Correct: [4],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "",
    },
    {
      Question:
        "Price of a paint is $65.25 in order to breakeven (no profit and no losses) how many units will need to sells if al total of fixed expenses are $29,000 and a total variable costs per unit is $29.00?",
      Img: "",
      Responses: ["800", "750", "815", "600", "730"],
      Correct: [0],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "",
    },
    {
      Question:
        "On a map, 2 inches represents 100 miles. How many miles are represented by 2 feet? (1 foot = 12 inches)",
      Img: "",
      Responses: [
        "1400 miles",
        "1050 miles",
        "1250 miles",
        "1200 miles",
        "1220 miles",
      ],
      Correct: [3],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "",
    },
    {
      Question:
        "Martha is making a cake for a 12 years old birthday. She use 1.25 gr of sugar, 3.45 gr of sweet cookies and 0.238 gr of another condiment. What is the total weigh of the condiment that She use?",
      Img: "",
      Responses: ["3.45 gr", "4.987 gr", "2.438 gr", "4.938 gr", "2.256 gr"],
      Correct: [3],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "",
    },
    {
      Question:
        "Peter is organizing a game for a 12 years old kids. The subscription is $15 per kid and there will be spots for 12 teams of 20 kids each, if only 9 teams enroll (with all 20 kids) and another team with half of the kids. What is the total amount of money that will be collected?",
      Img: "",
      Responses: ["$3,250", "$3,500", "$2,850", "$2,950", "$2,750"],
      Correct: [2],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question: "Which of the following is NOT a linear function?",
      Img: "",
      Responses: [
        "y = -2",
        "y = x^2 + 1",
        "y = 0.5x - 1",
        "y = -2x + 7",
        "y = 5x + 3",
      ],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question: "What does the slope of a line indicate?",
      Img: "",
      Responses: [
        "The y-intercept of the line",
        "The steepness and direction of the line",
        "The curvature of the line",
        "The x-intercept of the line",
        "None is correct",
      ],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question: "Which of the following is a linear function?",
      Img: "",
      Responses: [
        "y = x^3 - 2",
        "y = x^2 + 3",
        "y = 2x + 5",
        "y = 3x^2 - 4x + 1",
        "y = 1/x",
      ],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "What is the slope of a linear function on a graph?",
      Img: "",
      Responses: [
        "The x-intercept of the function",
        "The y-intercept of the function",
        "The maximum value of the function",
        "The rate of change of the function",
        "The most important value of the function",
      ],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "What is a function in mathematics?",
      Img: "",
      Responses: [
        "A graph that is always a straight line",
        "A relation where one input can have multiple outputs",
        "A relation where each input has exactly one output",
        "A set of ordered pairs with no restrictions",
        "The line that always has a y-intercept",
      ],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "What does the y-intercept represent in a linear function?",
      Img: "",
      Responses: [
        "The slope of the line",
        "The x-intercept of the line",
        "The maximum value of the function",
        "The Minimum value of the function",
        "The point where the line crosses the y-axis",
      ],
      Correct: [4],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Which of the following equations has a vertical slope?",
      Img: "",
      Responses: ["y = -2x+2", "3x = 51", "2y = -8", "5x = 5y + 5", "2x = 2y"],
      Correct: [1],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
  ];

  // Shuffle the array and take only 25 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 25);

  dispatch(setExams(selectedExams));
};
