import { createSlice } from "@reduxjs/toolkit";
import q5 from "../../../assets/imgs/q5.jpg";
import q7 from "../../../assets/imgs/q7.jpg";
import q9 from "../../../assets/imgs/q9.jpg";

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
      getRandomNumber.remaining = Array.from(Array(10).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 10; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "Encuentre el volumen de un cono truncado dado que su altura es 12, y el radio mayor es 8 y su radio menor es 5. (exprese su respuesta en términos de pi)",
      Img: "",
      Responses: ["480π", "516π", "512π", "540π", "504π"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question:
        "Escriba el siguiente número 2359<sub>4</sub> (de base 4) a su equivalente en base 10.",
      Img: "",
      Responses: [
        "205<sub>10</sub>",
        "201<sub>10</sub>",
        "209<sub>10</sub>",
        "215<sub>10</sub>",
        "199<sub>10</sub>",
      ],
      Correct: [0],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "En un grupo de 90 personas el 60% son mujeres, en este grupo de personas hay 14 hombres que son muy emprendedores y en las mujeres 12 son muy emprendedoras. ¿Cuál es la probabilidad de escoger una persona al azar que sea muy emprendedora dado que es varón?",
      Img: "",
      Responses: ["1/2", "7/30", "7/15", "14/30", "7/18"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "¿Cuál es la coordenada del centroide de un rectángulo que tiene vértices en (0, 2); (0, 6), (7, 2), (7, 6)?",
      Img: "",
      Responses: ["(3, 7/2)", "(7/2, 3)", "(7/2, 4)", "(4, 7/2)", "(2, 4)"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "Encuentre el valor de la variable en la siguiente ecuación exponencial.",
      Img: q5,
      Responses: ["x = -3/2", "x = 2", "x = 0", "x = 3/2", "x = -2"],
      Correct: [4],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "Encuentre la suma de los primeros 5 términos para una progresión geométrica donde el valor inicial es - 4 y r = ½.",
      Img: "",
      Responses: ["-7/2", "-15/4", "-17/8", "-31/4", "-9/4"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "¿Cuál es el conjunto solución de la siguiente desigualdad racional?",
      Img: q7,
      Responses: ["x < 0", "x ≤ 0", "7/2 < x < 5", "x > 5", "0 < x < 7/2"],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question: "¿A que es igual el cos(5π/2) ?",
      Img: "",
      Responses: ["0", "1/2", "1", "−1/2", "−1"],
      Correct: [1],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question: "¿Dónde está ubicado el vértice de la siguiente elipse?",
      Img: q9,
      Responses: ["(2, -2)", "(2, -5)", "(-2, -5)", "(0, -5)", "(2, 0)"],
      Correct: [1],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber.",
      List: "",
    },
    {
      Question:
        "De termine cuál de los siguientes puntos pertenecen a la circunferencia  x<sup>2</sup> + y<sup>2</sup> = 81",
      Img: "",
      Responses: ["(0, 10)", "(9, 1)", "(0, -8)", "(8, 8)", "(-9, 0)"],
      Correct: [4],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
  ];

  const shuffledExams = exams.sort(() => Math.random() - 0.5);
  const selectedExams = shuffledExams.slice(0, 10);
  dispatch(setExams(selectedExams));
};
