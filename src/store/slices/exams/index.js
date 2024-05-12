import { createSlice } from "@reduxjs/toolkit";
import recta from "../../../assets/imgs/exam1-recta.jpg";

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
      getRandomNumber.remaining = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 24; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "Escriba el siguiente numero en forma desarrollada: 125,600",
      Img: "",
      Responses: [
        "100,000 + 20,000 + 5,600",
        "120,000 + 5,000 + 600",
        "100,000 + 20,000 + 5,600",
        "100,000 + 20,000 + 5,000 + 500 + 100",
        "100,000 + 20,000 + 5,000 + 600",
      ],
      Correct: [4],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Reste la siguiente cantidad: 64,321 – 16,254",
      Img: "",
      Responses: ["48,254", "48,000", "48,670", "48,675", "48,067"],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cómo se escribe el número 25 en números romanos?",
      Img: "",
      Responses: ["XXVV", "XXIV", "XXIIIII", "XXV", "XX5"],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si a una colonia de hormigas puede albergar más de 895 hormigas y en un patio de una casa hay otras 2 colonias de 1250 y 498. ¿Cuantas hormigas hay en total?",
      Img: "",
      Responses: ["2,000", "2,640", "2,850", "1,643", "2,643"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál sería la forma correcta de redondear el número 125.346 utilizando dos decimales después del punto?",
      Img: "",
      Responses: ["125.37", "125.27", "125.35"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Multiplique la siguiente cantidad y seleccione la respuesta correcta: 27 x 153",
      Img: "",
      Responses: ["1,530", "4,150", "4,131", "153,027"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si en una librería hay 3, 216 lapiceros y lo van a dividir entre 16 niños. ¿Cuantos lapiceros tocara a cada uno?",
      Img: "",
      Responses: ["156", "301", "302", "303", "201"],
      Correct: [4],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuál es la medida máxima que puede medir un ángulo? ",
      Img: "",
      Responses: ["180", "360", "90", "Infinito"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuánto mide un ángulo recto?",
      Img: recta,
      Responses: ["90 grados", "180 grados", "360 grados", "270 grados"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si una recta numérica tiene como escala los números enteros del 1 al 10. ¿Sería posible ubicar el 1.5? ",
      Img: "",
      Responses: ["No", "No porque es entero", "Si"],
      Correct: [2],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Convierta 3.5 kilogramos en gramos:",
      Img: "",
      Responses: ["350 gramos", "3.50 gramos", "3,500 gramos", "35,000 gramos"],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si la mitad de un galón de helado le agregamos ¾ de otro galón de helados. ¿podremos completar al menos un galón?",
      Img: "",
      Responses: ["Si", "No"],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuánto seria la siguiente fracción a números mixtos 15/2?",
      Img: "",
      Responses: ["7 1/2 ", "3.5", "9 3/4 "],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Sume las siguientes fracciones 1/2 + 3/4 + 3/4 ?",
      Img: "",
      Responses: ["2", "3", "7/8"],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Calcule el área del siguiente triangulo si la base es 24 y la altura es 16",
      Img: "",
      Responses: ["38", "384", "500", "200", "192"],
      Correct: [4],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Existen más de dos diferencias entre un trapecio y un cuadrado?",
      Img: "",
      Responses: ["Si", "No"],
      Correct: [1],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuánto seria la medida del lado de un cuadrado si su perímetro es 53?",
      Img: "",
      Responses: ["13.25", "17.5", "14.25", "17.55"],
      Correct: [0],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Qué datos necesita para encontrar la longitud de la circunferencia?",
      Img: "",
      Responses: [
        "Necesito todos los datos",
        "El perimetro",
        "El radio",
        "Una cuerda",
        "El valor de pi",
      ],
      Correct: [4],
      Verse: "¿Cuántos cuadrantes hay en el plano cartesiano?",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Multiplique los siguientes números: 220*16",
      Img: "",
      Responses: ["1", "6", "2", "8", "4"],
      Correct: [4],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿En qué cuadrante graficaría el punto (2, 4)?",
      Img: "",
      Responses: ["2", "Todos", "3", "5", "1"],
      Correct: [4],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si venden un terreno de 5 mz y están pagando $10 por vara cuadrada cuanto me pagarían por todo el terreno?",
      Img: "",
      Responses: ["120,000", "110,000", "150,000", "10,000", "100,000"],
      Correct: [4],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Multiplique la siguiente cantidad y seleccione la respuesta correcta: 200 x 199",
      Img: "",
      Responses: ["200,199", "49,500", "25,150", "39,800"],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si en una librería hay 3, 216 libros azules y lo van a dividir entre 16 clases para hacer los trabajos practicos. ¿Cuantos libros tocaran por clase?",
      Img: "",
      Responses: ["156", "201", "150", "210"],
      Correct: [1],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuál es la medida máxima que puede medir un ángulo llano?",
      Img: "",
      Responses: ["270", "150", "360", "180"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Sume las siguientes fracciones: 1/8 + 2/4",
      Img: "",
      Responses: ["1/4", "1/16", "5/8", "7/8", "9/16"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
  ];

  dispatch(
    setExams(
      exams.sort(function () {
        return Math.random() - 0.5;
      })
    )
  );
};
