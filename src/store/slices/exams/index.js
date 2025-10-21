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
        "Para un ángulo de 300 grados ¿cuál es el equivalente en radianes? y ¿cuál es el punto en el plano si hablamos de un círculo unitario?",
      Img: "",
      Responses: [
        "5π/3 y (1/2, −√3/2)",
        "2π/3 y (−1/2, √3/2)",
        "4π/3 y (−1/2, −√3/2)",
        "π/3 y (√3/2, 1/2)",
        "π/2 y (0, 1)",
      ],
      Correct: [0],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question:
        "¿Cuál es la probabilidad de seleccionar dos médico y dos enfermeras de un grupo de 5 médicos y 5 enfermeras?",
      Img: "",
      Responses: ["25%", "35%", "47.62%", "50%", "60%"],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "¿Cuál es la intercepción Y de la siguiente función logarítmica?  y = log₃(x + 3)",
      Img: "",
      Responses: ["0", "log₃3", "1", "3", "-1"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "¿Cuál es la intercepción X de la siguiente función Exponencial?  y = −(1/2)ˣ + 4",
      Img: "",
      Responses: ["x = 2", "x = -2", "x = 4", "x = 0", "x = 3"],
      Correct: [1],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "¿A cuánto es equivalente el punto 4, 70° en coordenadas rectangulares?",
      Img: "",
      Responses: [
        "(1.37, 3.76)",
        "(2, 4)",
        "(3.76, 1.37)",
        "(4, 1.37)",
        "(0, 4)",
      ],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "¿Cuál es el 5to término al expandir el siguiente binomio?  (5 − y)⁶",
      Img: "",
      Responses: ["375y²", "250y²", "150y³", "625y³", "300y²"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "En el siguiente sistema de 3 ecuaciones ¿cuál sería la suma de (a + b + c)?   a + b + c = 12;  2a − 2b + c = 10;  a − b − c = 0",
      Img: "",
      Responses: ["10", "12", "15", "9", "8"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "Si hablamos de las funciones principales (función madre o la forma más simple de una función). ¿Cuál es el dominio de la función exponencial y el rango de la función radical?",
      Img: "",
      Responses: [
        "Dominio: todos los reales; Rango: todos los reales",
        "Dominio: todos los reales; Rango: reales ≥ 0",
        "Dominio: reales ≥ 0; Rango: todos los reales",
        "Dominio: x > 0; Rango: y > 0",
        "Dominio: x < 0; Rango: y > 0",
      ],
      Correct: [1],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "¿Cuál es el volumen de un cuerpo que se genera por la rotación de un cuadrado alrededor del eje Y que tiene una diagonal con vértices en (-3, -3); (3, 3)?   (exprese su respuesta en términos de pi)",
      Img: "",
      Responses: ["36π", "54π", "48π", "60π", "42π"],
      Correct: [1],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber.",
      List: "",
    },
    {
      Question:
        "¿Cuál es el Volumen de un casquete esférico que tiene como altura 2 y como radio del casquete 3? (exprese su respuesta en términos de pi)",
      Img: "",
      Responses: ["30π", "31π/3", "28π/3", "27π", "35π/3"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
  ];

  const shuffledExams = exams.sort(() => Math.random() - 0.5);
  const selectedExams = shuffledExams.slice(0, 10);
  dispatch(setExams(selectedExams));
};
