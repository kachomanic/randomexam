import { createSlice } from "@reduxjs/toolkit";
import q2 from "../../../assets/imgs/q2.jpg";
import q3 from "../../../assets/imgs/q3.jpg";
import q4 from "../../../assets/imgs/q4.jpg";
import q5 from "../../../assets/imgs/q5.jpg";
import q8 from "../../../assets/imgs/q8.jpg";
import q10 from "../../../assets/imgs/q10.jpg";
import q11 from "../../../assets/imgs/q11.jpg";
import q12 from "../../../assets/imgs/q12.jpg";
import q13 from "../../../assets/imgs/q13.jpg";
import q14 from "../../../assets/imgs/q14.jpg";
import q15 from "../../../assets/imgs/q15.jpg";

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
      getRandomNumber.remaining = Array.from(Array(15).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 15; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "Calcule el límite de: (x + 2)<sup>2</sup>",
      Img: "",
      Responses: ["r = 26", "r = 16", "r = 0", "r = 12", "r = 11"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question: "Calcule el límite en la imagen siguiente:",
      Img: q2,
      Responses: ["r = π", "r = 5 / π", "r = π / 4", "r = 4 / π", "r = 3π / 2"],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question: "Calcule el límite en la imagen siguiente:",
      Img: q3,
      Responses: ["r = e + 3", "r = e", "r = e + 1", "r = e + π", "r = e - π"],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question: "Calcule el límite en la imagen siguiente:",
      Img: q4,
      Responses: ["r = 0", "r = 1", "r = -1", "r = 2π", "r = π/2"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "Calcule el límite en la imagen siguiente:",
      Img: q5,
      Responses: ["r = 9", "r = -9", "r = 18", "r = -18", "r = 18π"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "Dónde   Y = cosx   tiene punto de inflexión?",
      Img: "",
      Responses: ["π/3", "π", "2π/3", "4π/3", "π/2"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "Halle la derivada por la definición: y = x<sup>3</sup>",
      Img: "",
      Responses: [
        "r = 2x<sup>2</sup>",
        "r = 3x<sup>3</sup> - 1",
        "r = 3x<sup>2</sup>",
        "r = 3x<sup>2</sup> + 1",
        "r = 3x + 1",
      ],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Derive usando las reglas: ",
      Img: q8,
      Responses: ["-1 < x < ∞", "-∞ < x < -1", "-∞ < x", "x < ∞", "-∞ < x < ∞"],
      Correct: [4],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Derive las siguientes funcion: f(x) = lnx<sup>4</sup>",
      Img: "",
      Responses: ["1 / x", "2 / x", "4 / x", "x / 3", "2x"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question: "Halle los puntos críticos de:",
      Img: q10,
      Responses: [
        "r = 2,0,3",
        "r = 1,0,3",
        "r = 4,0,3",
        "r = 4,2,3",
        "r = 0,3,2",
      ],
      Correct: [1],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question: "Calcule la siguiente integral:",
      Img: q11,
      Responses: ["r = 1", "r = -2", "r = 2", "r = -4", "r = 3"],
      Correct: [2],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question: "Calcule la siguiente integral:",
      Img: q12,
      Responses: [
        "r = 4e - 3",
        "r = 2e - 2",
        "r = 5e - 3",
        "r = 3e",
        "r = 6e - 2",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "Calcule la siguiente integral:",
      Img: q13,
      Responses: [
        "r = e + 2",
        "r = e + 1",
        "r = e - 3",
        "r = e - 1",
        "r = e - 2",
      ],
      Correct: [3],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question: "Calcule la siguiente integral:",
      Img: q14,
      Responses: [
        "r = π / 6",
        "r = π / 3",
        "r = π / 4",
        "r = 2π / 4",
        "r = 3π / 2",
      ],
      Correct: [2],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question: "Calcule la siguiente integral:",
      Img: q15,
      Responses: ["r = 2π", "r = -2", "r = -1", "r = 1", "r = 0"],
      Correct: [4],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
  ];

  // Shuffle the array and take only 25 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 15);

  dispatch(setExams(selectedExams));
};
