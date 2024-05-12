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
      getRandomNumber.remaining = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 18; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "¿Cuál es el número que está en la posición de las decenas? ",
      Img: "",
      Responses: ["2,389", "8", "2", "9", "3"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Qué numero falta la siguiente sucesión: 38, 39, 40, 41, __, 43, 44?",
      Img: "",
      Responses: ["37", "42", "45", "46", "47"],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál es el número que está en la posición de las centenas en: 9,451? ",
      Img: "",
      Responses: ["9", "0", "4", "5", "1"],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Qué número es mayor en la siguiente lista?",
      Img: "",
      Responses: ["688", "295", "509"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál es el número mayor que puede formar con los dígitos 1, 9 y 7?",
      Img: "",
      Responses: ["197", "791", "917", "971", "977"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Cual es el resultado de la suma de las siguientes multiplicaciones: 6 x 2 y 4 x 6",
      Img: "",
      Responses: ["36", "26", "32", "34", "28"],
      Correct: [0],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Sume los siguientes números mentalmente y seleccione la respuesta: 265 + 158 ",
      Img: "",
      Responses: ["443", "413", "413", "423", "422"],
      Correct: [3],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si un equipo de Básquet en los últimos 4 juegos de la temporada anoto 56, 85, 60 y 75 puntos. ¿Cuántos puntos anotaron en total?",
      Img: "",
      Responses: ["256", "246", "266", "276", "286"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Cuanto es la respuesta de restar el antecesor de 88 con el sucesor de 27? ",
      Img: "",
      Responses: ["49", "59", "61", "63", "70"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si una caja tiene 8 cajas medianas y una caja mediana tiene 8 cajas pequeñas y una caja pequeña tiene 10 marcadores. ¿Cuántos marcadores habrá en total?",
      Img: "",
      Responses: ["64", "640", "600", "160", "26"],
      Correct: [1],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Cual es el resultado de multiplicar 247 x 243",
      Img: "",
      Responses: ["247,243", "60,201", "60,021", "60,000", "490"],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Tres alumnos se proponen llenar un barril de agua aportando cada uno con una cantidad. Si dos traen la misma cantidad y el otro aporta el restante que sería el 0.4 del total del barril. ¿Cuánto trajo de agua otro de sus compañeros? ",
      Img: "",
      Responses: [
        "0.2 del total",
        "0.6 del total",
        "0.3 del total",
        "0.4 del total",
      ],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Multiplique 12.5 * 35.46",
      Img: "",
      Responses: ["444.51", "443.51", "443.55", "443.00", "443.25"],
      Correct: [4],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si un alumno tiene un paquete de maní con 60 granos y reparte igualmente a 4 de sus amigos. ¿Cuánto le tocara a cada uno?",
      Img: "",
      Responses: ["10", "12", "4", "15", "16"],
      Correct: [3],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si vamos a una tienda donde nos dan $85 para gastar y compramos una galleta de $7, un chocolate de $15, y un jugo natural de $6. ¿Cuánto nos sobrara si siempre ahorramos $10 de todo lo que nos dan?",
      Img: "",
      Responses: ["28", "38", "47", "57", "10"],
      Correct: [2],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Si sumamos 4 decenas y 5 unidades, ¿Qué número obtenemos?",
      Img: "",
      Responses: ["54", "44", "45", "405"],
      Correct: [2],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Si restamos 3 decenas de 300, ¿Qué número obtenemos?",
      Img: "",
      Responses: ["297", "0", "270", "260", "150"],
      Correct: [2],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuántas unidades hay en el numero 95? ",
      Img: "",
      Responses: ["95", "9", "100", "1", "96"],
      Correct: [0],
      Verse:
        "Salmos 91:1 El que habita al abrigo del Altísimo Morará bajo la sombra del Omnipotente.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Si sumamos 0.2 cuatro veces, ¿Qué número obtenemos?",
      Img: "",
      Responses: ["0.8", "0.4", "1", "0.42", "0.24"],
      Correct: [0],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
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
