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
      getRandomNumber.remaining = Array.from(Array(20).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 20; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "¿Cuál es el área de un octágono regular que tiene medida de lado 4cm y apotema 60mm?",
      Img: "",
      Responses: ["96cm²", "32cm²", "320cm²", "960cm²", "9.6cm²"],
      Correct: [0],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
    {
      Question:
        "Si un Hexágono regular tiene lado igual a 8dm. ¿Cuál sería su perímetro en metro?",
      Img: "",
      Responses: ["48m", "4.8m", "48 dm", "48m", "8m"],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "Calcule el área de un heptágono que tiene como lado 5km y apotema 100,000 cm.",
      Img: "",
      Responses: ["27 km²", "117,980 km²", "35 km²", "17.5 km²"],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "",
    },
    {
      Question:
        "Calcule el perímetro de un pentágono irregular que tiene las siguientes medidas en sus lados. Exprese su respuesta en Número Mixto. 4/6;  ¾; 6/9; 4/5; 2/6;",
      Img: "",
      Responses: ["4 y 7/60", "5 y 8/60", "4", "6 y 1/60", "7 y 9/60"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question: "Si dividimos 73.017 entre 3.15. ¿Cuál es la respuesta?   ",
      Img: "",
      Responses: ["33.05cm", "23.18cm", "18cm"],
      Correct: [1],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "",
    },
    {
      Question:
        "Calcule el volumen de un cilindro que tiene como radio 3.6 y su altura es de 3/4, redondee su respuesta al entero más cercano.",
      Img: "",
      Responses: ["30", "28", "31", "29"],
      Correct: [1],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "",
    },
    {
      Question:
        "Si un cubo tiene como lado 4m. ¿Será posible encontrar su volumen con solamente esta información? ",
      Img: "",
      Responses: [
        "Si",
        "No",
        "Solo los alumnos de la universidad",
        "No estoy seguro",
      ],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "",
    },
    {
      Question:
        "Si sumamos las dimensiones con las que trabaja el área y las dimensiones con las que trabaja el volumen obtendríamos: ",
      Img: "",
      Responses: ["4 dimensiones", "3 dimensiones", "5 dimensiones"],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "Si ubicamos una esfera dentro de un cubo, ¿cuál de los dos tiene el volumen más grande? ",
      Img: "",
      Responses: [
        "La esfera por supuesto",
        "El Cubo por supuesto",
        "Pueden ser iguales",
      ],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question: "Multiplique 3/4 * 1/2 * 3/4 ",
      Img: "",
      Responses: ["9/24", "3/24", "9/32", "3/10"],
      Correct: [2],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "",
    },
    {
      Question: "Divida las siguientes fracciones: 7/10 entre 3/5",
      Img: "",
      Responses: ["1/6", "2/6", "7/6", "9/7", "6/7"],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "",
    },
    {
      Question:
        "Si Paco usa un tercio de sal de un envase lleno para una salsa y su hermana usa la mitad de lo que queda. ¿Cuánto es lo que hay que comprar del pequeño envase para rellenarlo? ",
      Img: "",
      Responses: [
        "1/3 es lo que necesita para rellenar el envase.",
        "2/3 es lo que necesita para rellenar el envase.",
        "1/4 es lo que necesita para rellenar el envase.",
      ],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "Si dos hermanos quieren comprar una casa de $45,000 y uno de ellos se compromete a pagar las cuotas restantes si su otro hermano paga $20,000. ¿Qué fracción de la casa pagará el otro hermano que para en cuotas?",
      Img: "",
      Responses: ["2/8", "5/6", "1/4", "5/9"],
      Correct: [3],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "Si con dos libras de harina hacemos 3 pizas. ¿Cuantas libras de harina se necesitan para hacer 27 pizas?",
      Img: "",
      Responses: ["28 libras", "18 libras", "12 libras"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "",
    },
    {
      Question:
        "Si lanzamos un dado de 10 caras enumerado del 0 al 9. ¿Cuántas posibilidades tenemos en total?",
      Img: "",
      Responses: ["10 posibilidades", "9 porque el número mayor es 9"],
      Correct: [0],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "",
    },
    {
      Question:
        "Si vamos a un restaurante y sirven 6 platos de comida, 4 postres y 3 jugos naturales. ¿Cuantas opciones posibles tenemos si cada opción tiene una comida, un postre y un jugo? ",
      Img: "",
      Responses: [
        "27 posibilidades",
        "75 posibilidades",
        "13 posibilidades",
        "72 posibilidades",
      ],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "",
    },
    {
      Question:
        "Si lanzamos un dado y después una moneda; ¿Cuantas opciones diferentes tendríamos?",
      Img: "",
      Responses: ["12", "10", "9", "14", "1"],
      Correct: [0],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "",
    },
    {
      Question:
        "Si 5 hombres pintando una casa pueden hacer el trabajo en 12 días en cuanto tiempo podrían hacer el mismo trabajo 7 hombres.",
      Img: "",
      Responses: ["12 días", "5 días", "9 días", "8.57 días"],
      Correct: [3],
      Verse: "¿Cuántos cuadrantes hay en el plano cartesiano?",
      List: "",
    },
    {
      Question:
        "Si con dos libras de harina y 1 de Tomate hacemos 3 pizas. ¿Cuantas libras de harina y de tomate se necesitan para hacer 60 pizas?",
      Img: "",
      Responses: [
        "10 libras de harina y 50 de tomate",
        "40 libras de harina y 40 de tomate",
        "10 libras de harina y 20 de tomate",
        "30 libras de harina y 30 de tomate",
        "40 libras de harina y 20 de tomate",
      ],
      Correct: [4],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "",
    },
    {
      Question:
        "Si para lavar se necesitan 8 monedas de 25 centavos y para secar la ropa se necesitan 12 monedas iguales. ¿Cuanto cuesta terminar de lavar 2 veces?",
      Img: "",
      Responses: [
        "$12 en Total o 36 monedas",
        "$8 en Total o 32 monedas",
        "$9 en Total o 36 monedas",
        "$10 en Total o 40 monedas",
        "$10 en Total o 30 monedas",
      ],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "",
    },
  ];

  // Shuffle the array and take only 25 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 20);

  dispatch(setExams(selectedExams));
};
