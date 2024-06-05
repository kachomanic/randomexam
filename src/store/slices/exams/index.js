import { createSlice } from "@reduxjs/toolkit";
import novenoq2 from "../../../assets/imgs/novenoq2.jpg";
import novenoq3 from "../../../assets/imgs/novenoq3.jpg";
import novenoq5 from "../../../assets/imgs/novenoq5.jpg";
import novenoq14 from "../../../assets/imgs/novenoq14.jpg";
import novenoq16 from "../../../assets/imgs/novenoq16.jpg";
import novenoq17 from "../../../assets/imgs/novenoq17.jpg";
import novenoq19 from "../../../assets/imgs/novenoq19.jpg";
import novenoq21 from "../../../assets/imgs/novenoq21.jpg";

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
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 33; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "Si una pirámide rectangular con base cuadrada tiene uno de sus lados igual a 13m y 9 m de altura. ¿Cuánto es su volumen?  ",
      Img: "",
      Responses: [
        "500 m<sup>3</sup>",
        "507 m<sup>3</sup>",
        "407 m<sup>3</sup>",
        "307 m<sup>3</sup>",
        "600 m<sup>3</sup>",
      ],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question: "¿Cuál es la solución del siguiente sistema de 2 ecuaciones?",
      Img: novenoq2,
      Responses: [
        "a = 5; b = 1",
        "a = 4; b = 0",
        "a = 3; b = 2",
        "a = 1; b = 0",
        "a = 0; b = 4",
      ],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Basados en las siguientes operaciones cuanto es el valor de a + b + c",
      Img: novenoq3,
      Responses: ["300", "377", "277", "200", "400", "Ninguna es correcta"],
      Correct: [2],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Encuentre el 6mo término en la sucesión geométrica siguiente: 3, 9, 27, 81…",
      Img: "",
      Responses: ["740", "201", "629", "729", "829"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question: "Resuelva la siguiente desigualdad:",
      Img: novenoq5,
      Responses: [
        "X > -29/5",
        "X ≤ 30",
        "X ≤ -30",
        "X ≤ -29/5",
        "Ninguna es correcta",
      ],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "¿Cuál es el vértice en la siguiente función cuadrática? y = -3x<sup>2</sup> + 12x - 3",
      Img: "",
      Responses: ["(9, 9)", "(2, 2)", "(3, 3)", "(-2, -9)", "(2, 9)"],
      Correct: [4],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "¿Cuál es el valor de la variable en la siguiente ecuación exponencial? 8<sup>(5x+2)</sup> = 4<sup>(5x-3)</sup>",
      Img: "",
      Responses: ["x = -12/5", "x = -1/5", "x = 12/5", "x = 7/5", "x = 9/3"],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "¿Cuál es la inversa de la siguiente función? y = -2x<sup>2</sup> - 5",
      Img: "",
      Responses: [
        "y=√(-4(x-5))",
        "y=√(-4(x-5))",
        "y=√(+2(x+5))",
        "y=√(-2(x+5))",
      ],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Si los salarios anuales para los graduados de carreras de estadística son de: $22,250; $31,185; $18,250; $25,230; $41,150; $23,270; $50,240; $32,310 y $41,195 respectivamente encuentre la desviación estándar de estos datos.",
      Img: "",
      Responses: [
        "Desviación Estándar  106.49",
        "Desviación Estándar  106",
        "Desviación Estándar  10647.49",
        "Desviación Estándar  10648.50",
        "Ninguna es correcta",
      ],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Cuál es la probabilidad de lanzar una moneda 3 veces y que salga la misma cara 2 veces?",
      Img: "",
      Responses: ["5/9", "1/2", "1/8", "1/3", "1/4"],
      Correct: [4],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Cuál es el valor de la variable en la siguiente ecuación? 4=2√(2x-8)",
      Img: "",
      Responses: ["6", "3", "2", "1", "-6"],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Cuál es el valor de C para el cual la siguiente ecuación se hace un cuadrado perfecto? x<sup>2</sup> - 6x + C",
      Img: "",
      Responses: ["3", "-9", "9", "-3", "Ninguna de las anteriores"],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "De los siguientes números, ¿cuál de ellos es un número irracional?",
      Img: "",
      Responses: ["√7", "-1/2", "4", "0", "2√4", "1/-4", "-2/3"],
      Correct: [0],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Basados en las siguientes operaciones cuanto es el valor de a + b + c",
      Img: novenoq14,
      Responses: ["-160 8/3", "123 7/8", "-124 1/8", "-123 7/8"],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Si un prisma rectangular de lado 5cm, 12cm y volumen 180.6cm3; ¿cuánto es la medida del otro lado en mm? ",
      Img: "",
      Responses: ["600mm", "501mm", "401mm", "601mm", "60mm"],
      Correct: [3],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question: "Encuentre el valor de X:",
      Img: novenoq16,
      Responses: [
        "x = 6",
        "x = 3",
        "x = Log(6)",
        "x = 1",
        "Ninguna es correcta",
      ],
      Correct: [0],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question: "¿Cuál es la solución del siguiente sistema?",
      Img: novenoq17,
      Responses: [
        "n = 10; m = 24",
        "n = 11; m = 11",
        "n = 10/11; m = 24/11",
        "n = 10/11; m = 11",
        "n = 1; m = 24/11",
      ],
      Correct: [2],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Encuentre el 7mo término en la sucesión geométrica siguiente: 2, -4, 8, -16,…",
      Img: "",
      Responses: ["-128", "128", "-124", "Ninguna es correcta"],
      Correct: [0],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "En el siguiente triángulo rectángulo a = 15cm, ángulo A = 35 grados; encuentre los lados c y b.",
      Img: novenoq19,
      Responses: ["32.5", "50", "42.5", "42"],
      Correct: [2],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si lanzo un dado dos veces. ¿Cuál es la probabilidad de que obtenga un número par y luego uno impar?",
      Img: "",
      Responses: [
        "c = 17 y b = 11",
        "c = 21 y b = 38",
        "c = 29 y b = 26",
        "c = 38 y b = 24",
        "c = 29.38 y b = 25.26",
      ],
      Correct: [4],
      Verse:
        "En el principio era el Verbo, el Verbo estaba con Dios y el Verbo era Dios. Juan 1:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "En un triángulo (no rectángulo) de vértices A, B y C con lados a, b y c opuestos a sus respectivos ángulos. Encuentre el lado b si sabemos que a = 12, c = 16 y A = 40",
      Img: "",
      Responses: [
        "b = 327.5",
        "b = 226.5",
        "b = 326.5",
        "b = 100.5",
        "b = 26.5",
      ],
      Correct: [2],
      Verse:
        "De Jehová es la tierra y su plenitud, el mundo y los que en él habitan, Salmos 24:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question: "Resuelva la siguiente desigualdad:",
      Img: novenoq21,
      Responses: ["X > 12", "X ≤ 36", "X ≤ 5", "X ≤ 12", "X ≤ 24"],
      Correct: [3],
      Verse:
        "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Salmos 91:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el vértice en la siguiente función cuadrática? y = 2x<sup>2</sup> – 3x - 3",
      Img: "",
      Responses: [
        "(2/3, 4/5)",
        "(1/4, 3/8)",
        "(3/4, 7/3)",
        "(1/4, 2/8)",
        "(3/4, 3/8)",
      ],
      Correct: [4],
      Verse:
        "¿No sabéis que los injustos no heredarán el reino de Dios? No os engañéis: ni los fornicarios, ni los idólatras, ni los adúlteros, ni los afeminados, ni los homosexuales,  1 Corintios 6:9",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es la representación de la siguiente ecuación cuadrática en su forma estándar?  y = - 2 (x - 3)<sup>2</sup> + 1",
      Img: "",
      Responses: [
        "y = -2 x<sup>2</sup> + 24x - 10",
        "y = -3 x<sup>2</sup> - 12x + 17",
        "y = -2 x<sup>2</sup> + 12x - 17",
        "y = 2 x<sup>2</sup> + 24x - 17",
        "Ninguna es correcta",
      ],
      Correct: [2],
      Verse:
        "El que cree en el Hijo tiene vida eterna; pero el que se niega a creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él. Juan 3:36",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question: "Encuentre el valor de la variable: log<sub>2</sub> x + 3 = 5",
      Img: "",
      Responses: [
        "X= 25",
        "X= -74/25",
        "X= -74",
        "X= 74/25",
        "Ninguna es correcta",
      ],
      Correct: [1],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna. 1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor de la variable en la siguiente ecuación exponencial? 8<sup>3x+1</sup>=2<sup>2x-3</sup>",
      Img: "",
      Responses: ["x = -6/7", "x = 7/6", "x = -6", "x = -7"],
      Correct: [0],
      Verse:
        "La revelación de Jesucristo, que Dios le dio para manifestar a sus siervos las cosas que deben suceder pronto. La declaró enviándola por medio de su ángel a su siervo Juan, Apocalipsis 1:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es la pendiente de la inversa de la siguiente función? y = -2x + 1/4",
      Img: "",
      Responses: ["m = 1/4", "m = 1/5", "m = 1", "m = 1/2"],
      Correct: [3],
      Verse:
        "Recibid mi enseñanza antes que la plata, y ciencia antes que el oro puro; Proverbios 8:10",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es la inversa de la siguiente función? y = 3x<sup>2</sup> + 2",
      Img: "",
      Responses: [
        "y=√(5(x-1))",
        "y=√(2(x-3))",
        "y=√(3(x-2))",
        "y=√(x-2)",
        "y=√(3)",
      ],
      Correct: [2],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si en una zona determinada los valores de alquiler de apartamentos son de: $250, $185, $250, $230, $150, $270, $240, $400, $310 y $195 respectivamente encuentre la varianza de estos datos.",
      Img: "",
      Responses: [
        "Varianza  3912",
        "Varianza  12",
        "Varianza  4900",
        "Varianza  4950",
        "Varianza  4912",
      ],
      Correct: [4],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si en una zona determinada los valores de alquiler de apartamentos son de: $250, $185, $250, $230, $150, $270, $240, $400, $310 y $195 respectivamente encuentre la desviación estándar de estos datos",
      Img: "",
      Responses: [
        "Desviación Estándar  99.1",
        "Desviación Estándar  10.1",
        "Desviación Estándar  40.1",
        "Desviación Estándar  70.1",
        "Desviación Estándar  60.1",
      ],
      Correct: [3],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es la probabilidad de lanzar una moneda 3 veces y que salga la misma cara 3 veces?",
      Img: "",
      Responses: ["1/5", "1/4", "1/9", "1/3", "1/8"],
      Correct: [4],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "En una competencia 25 corredores salen al mismo tiempo y se quiere saber ¿de cuantas formas diferentes podemos obtener los primeros 3 lugares? ",
      Img: "",
      Responses: ["13,800", "12,800", "13,000", "12,000", "13,200"],
      Correct: [0],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor de C para el cual la siguiente ecuación se hace un cuadrado perfecto?	x<sup>2</sup> + 7x + C",
      Img: "",
      Responses: ["49", "49/4", "4", "40/4", "4/3"],
      Correct: [1],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor de la variable en la siguiente ecuación? √(3x+5)=√(x-8)",
      Img: "",
      Responses: ["4", "-3.5", "-5/3", "-2.5", "-6.5"],
      Correct: [4],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
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
