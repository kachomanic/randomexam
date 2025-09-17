import { createSlice } from "@reduxjs/toolkit";

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
      getRandomNumber.remaining = Array.from(Array(32).keys()).sort(
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
      Question:
        "The recipe is called for 3/4 cup of sugar. If you want to make half the recipe, how much sugar do you need?",
      Img: "",
      Responses: ["3/7 cup", "3/8 cup", "5/8 cup", "1/4 cup", "3/6 cup"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question:
        "Emily ate 2/5 of a pizza and her brother ate 3/10 of it. What fraction of the pizza did they eat together?",
      Img: "",
      Responses: ["7/10", "5/7", "7/5", "5/6", "4/9"],
      Correct: [0],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "John read 7/12 of a book, and after finished 1/3 that was pending. What fraction of the book did he read?",
      Img: "",
      Responses: ["10/12", "11/15", "11/12", "7/12", "1/3"],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "The classroom has 30 students, and 2/5 of them are girls. How many boys are there in the class?",
      Img: "",
      Responses: ["10 boys", "16 boys", "14 boys", "12 boys", "18 boys"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "A garden has 5/8 planted with vegetables and 3/10 with flowers. What fraction is planted with other than vegetables or flowers?",
      Img: "",
      Responses: ["3/30", "3/20", "2/32", "3/37", "3/40"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "If a car travels 3/4 of a mile in one minute, how far will it travel in 10 minutes?",
      Img: "",
      Responses: [
        "10 1/2 miles",
        "7 1/4 miles",
        "8 1/2 miles",
        "9 3/4 miles",
        "7 1/2 miles",
      ],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "A cake recipe requires 2/3 cup of milk. If you are making 1/3 of the recipe, how much milk do you need?",
      Img: "",
      Responses: ["10/9 cup", "2/8 cup", "2/7 cup", "2/9 cup", "5/9 cup"],
      Correct: [3],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "Sarah used 5/8 of a bottle of glue for a project. If there were originally 2 liters, how much glue did she use?",
      Img: "",
      Responses: [
        "1.25 liters",
        "1.75 liters",
        "2.25 liters",
        "3.75 liters",
        "4.5 liters",
      ],
      Correct: [0],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "A company's revenue increased by 7/20 this year compared to last year. If last year's was $50,000, what is the increase?",
      Img: "",
      Responses: ["$17,500", "$17,200", "$19,400", "$16,200", "$30,500"],
      Correct: [0],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "A farmer harvested 4/7 of his crops, and 3/5 of those were sold. What fraction of total crops were sold?",
      Img: "",
      Responses: ["15/35", "10/37", "11/39", "12/35", "7/35"],
      Correct: [3],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "The recipe uses 3/4 cup of oil and 1/6 cup of vinegar. How much more oil is used than vinegar?",
      Img: "",
      Responses: [
        "9/12 cup",
        "10/12 cup",
        "11/12 cup",
        "15/16 cup",
        "7/12 cup",
      ],
      Correct: [4],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "Michael spent 3/10 on books and 2/5 on food. What fraction of allowance is left?",
      Img: "",
      Responses: ["3/10", "10/11", "11/12", "4/9", "7/10"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A pizza is cut into 8 slices. If 3/4 was eaten, how many slices remain?",
      Img: "",
      Responses: ["2 slices", "6 slices", "4 slices", "3 slices", "5 slices"],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "Linda has 2/5 gallon of paint. She uses 1/3 of it. How much paint does she use?",
      Img: "",
      Responses: [
        "1/3 gallon",
        "2/13 gallon",
        "2/18 gallon",
        "2/3 gallon",
        "2/15 gallon",
      ],
      Correct: [4],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "A car's fuel tank is 5/8 full. If it holds 16 gallons, how many gallons of fuel are in the tank?",
      Img: "",
      Responses: [
        "10 gallons",
        "16 gallons",
        "14 gallons",
        "12 gallons",
        "11 gallons",
      ],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "In a bag of 30 marbles, 2/3 are red. How many red marbles are in the bag?",
      Img: "",
      Responses: [
        "20 marbles",
        "16 marbles",
        "14 marbles",
        "12 marbles",
        "18 marbles",
      ],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "A class has 24 students, and 7/12 are boys. How many girls are in the class?",
      Img: "",
      Responses: ["12 girls", "16 girls", "14 girls", "10 girls", "18 girls"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "A car traveled 3/5 of 500 miles in the first half of the trip. How far did it travel?",
      Img: "",
      Responses: [
        "200 miles",
        "250 miles",
        "300 miles",
        "310 miles",
        "280 miles",
      ],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "A recipe requires 3/4 cup sugar, and you have 5/6 cup. How much more do you need?",
      Img: "",
      Responses: ["2/13 cup", "1/12 cup", "2/18 cup", "2/3 cup", "1/3 cup"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "A worker finished 4/9 of a task then 3/5 of remaining. What fraction of task was completed?",
      Img: "",
      Responses: ["19/45", "10/39", "11/45", "13/45", "7/45"],
      Correct: [0],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "A plant has 3/7 of height left to grow. If it has grown 15 inches, what is the total height?",
      Img: "",
      Responses: [
        "31 inches",
        "36 inches",
        "34 inches",
        "35 inches",
        "38 inches",
      ],
      Correct: [3],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "A school has 200 students, and 3/8 are in the band. How many are not in the band?",
      Img: "",
      Responses: [
        "155 students",
        "116 students",
        "124 students",
        "121 students",
        "125 students",
      ],
      Correct: [4],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "A bottle of juice is 5/6 full. If originally 1 liter, how much juice is left?",
      Img: "",
      Responses: [
        "5/6 liter",
        "5/9 liter",
        "5/7 liter",
        "4/7 liter",
        "3/6 liter",
      ],
      Correct: [0],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question:
        "A project uses 2/3 of tape, and 1/4 of the remaining tape is used. How much is left?",
      Img: "",
      Responses: ["1/36", "2/5", "1/5", "3/4", "1/6"],
      Correct: [4],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question:
        "You cut pizza into 8 slices, you have 3/4 pizza. How many slices are left if you give away 1/2?",
      Img: "",
      Responses: ["5", "3", "6", "4", "2"],
      Correct: [1],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question: "5/6 – 1/3 = ?",
      Img: "",
      Responses: ["1/7", "1/5", "3/5", "3/4", "1/2"],
      Correct: [4],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question: "3/8 × 4/7 = ?",
      Img: "",
      Responses: ["1/14", "1/15", "3/12", "3/14", "1/12"],
      Correct: [3],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question:
        "Alice has 7/12 yard of fabric. Cut into 3 equal pieces, uses 1/4 of one piece. How much left of that piece?",
      Img: "",
      Responses: ["3/50", "1/24", "7/48", "3/14", "1/48"],
      Correct: [2],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question:
        "The recipe calls for 3/4 cup flour for 6 people. If serving 2, how much flour needed?",
      Img: "",
      Responses: ["1/4", "1/2", "3/5", "3/7", "1/12"],
      Correct: [0],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "",
    },
    {
      Question: "6/8 × 5/7 × 7/2 = ?",
      Img: "",
      Responses: ["15/7", "8/15", "15/8", "8/14", "5/12"],
      Correct: [2],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "",
    },
    {
      Question: "5/6 – 1/3 + 1/4 = ?",
      Img: "",
      Responses: ["3/4", "1/2", "3/5", "3/7", "1/12"],
      Correct: [0],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "",
    },
    {
      Question:
        "A company's subscribers increased by 1/5 this year = $60,000 growth. If this year's subs = 1,250,000, what was last year’s revenue/subscribers/income?",
      Img: "",
      Responses: [
        "$260,000 revenue, 1M subscribers, 28cents income per subscriber",
        "$280,000 revenue, 1M subscribers, 26cents income per subscriber",
        "$250,000 revenue, 1M subscribers, 28cents income per subscriber",
        "$240,000 revenue, 1M subscribers, 26cents income per subscriber",
        "$240,000 revenue, 1M subscribers, 24cents income per subscriber",
      ],
      Correct: [4],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
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
