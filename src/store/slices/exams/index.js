import { createSlice } from "@reduxjs/toolkit";
import question4 from "../../../assets/imgs/question4.jpg";
import question8 from "../../../assets/imgs/question8.jpg";
import question13 from "../../../assets/imgs/question13.jpg";
import question15 from "../../../assets/imgs/question15.jpg";
import question24 from "../../../assets/imgs/question24.jpg";

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
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 29; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "¿A que es igual la suma de los siguientes polinomios? (5x^2 - 9x + 2) - (3x^2 + 3x - 8)",
      Img: "",
      Responses: [
        "2x^2 + 12x - 10",
        "2x^2 - 24x + 10",
        "2x^2 - 10 + 12x",
        "2x^2 - 12x + 10",
        "x^2 - 12x + 10",
      ],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Si un caracol va a una velocidad de 2 m/min. ¿Cuánto será esto si lo convertimos a millas por hora?",
      Img: "",
      Responses: ["0.01 mph", "0.03 mph", "0.08 mph", "0.02 mph", "0.07 mph"],
      Correct: [4],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Si dos hermanos arman una bicicleta en 3 horas pero uno de ellos puede armar la bicicleta solo en 2.2 horas; ¿en cuánto tiempo armaría el otro hermano la bicicleta solo?",
      Img: "",
      Responses: ["3", "2", "1", "1.5", "1.8", "Ninguna es correcta"],
      Correct: [5],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question: "Resuelva el siguiente ejercicio:",
      Img: question4,
      Responses: ["1/42", "2/27", "3/49", "1/49", "1"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Si entre un círculo de radio 5 y un cuadrado de lado 10 concéntricos tenemos un área entre las dos figuras. ¿Cuánto tiene esta área entre el círculo y el cuadrado?",
      Img: "",
      Responses: ["21.5", "19.5", "31.5", "29.5", "Ninguna es correcta"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Calcule el área de la esfera que tiene como radio 1.5. (Exprese su respuesta en términos de pi).",
      Img: "",
      Responses: ["4.5pi", "5.5pi", "6pi", "4pi", "10pi"],
      Correct: [0],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "Si lanzo un dado dos veces y después una moneda. ¿Cuál es la probabilidad de que obtenga un número par, luego uno mayor que 5 y después salga cualquiera de las dos caras de la moneda?",
      Img: "",
      Responses: [
        "½ * 1/6 = 1/12",
        "1/12",
        "1/3 * 2/6 = 1/12",
        "½ * 1/4 = 8/12",
      ],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question:
        "¿Cuál es la resta de (Rango + Moda) – (Mediana + Media) en los siguientes datos: ",
      Img: question8,
      Responses: [
        "84 - 106.25 = -22.25",
        "80 - 100 = -20",
        "84 - 110 = -26",
        "80 - 50 = 30",
      ],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=bN2Y14uaZpw&list=PLSPbyO4D6CgHo81gqaZB4dPXEQkCeRpvU",
    },
    {
      Question: "Calcule la siguiente operación: (15! * 10) / 14! = ",
      Img: "",
      Responses: ["550", "100", "250", "150"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Si en dos cajas A y B hay 12 libros distribuidos de la siguiente forma: En la caja A hay 5 de Matemática y 3 de inglés; y en caja B hay 2 de Matemática y 2 de inglés. ¿Cuál es la probabilidad de que aleatoriamente escogemos un libro de Matemática dado que lo tomamos de la caja A?",
      Img: "",
      Responses: ["5/9", "6/8", "1/8", "5/8", "3/7"],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Cuál es el valor del vértice en la siguiente ecuación? y = (x + 2)^2 - 3 ",
      Img: "",
      Responses: ["(5, -3)", "(-2, 1)", "(-6, -4)", "(-6, -1)", "(-2, -3)"],
      Correct: [4],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question: "13.	Resuelva el siguiente ejercicio:",
      Img: question13,
      Responses: ["-1", "1", "-10", "10", "Ninguna de las anteriores"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Un empresario tiene $250,000 y tiene que tomar una decisión para poner a trabajar su dinero. A este empresario se le presentan varias opciones de las cuales puede va a escoger la que le proporcione mejor resultado.",
      Img: question15,
      Responses: ["a", "b", "c", "d"],
      Correct: [3],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Si un carro va a una velocidad de 70m/s. ¿Cuánto será esto si lo convertimos a kilómetros por hora?",
      Img: "",
      Responses: ["70km/h", "252km/h", "170km/h", "100km/h"],
      Correct: [1],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Si un hombre pinta una casa pequeña en 5 horas y otro hace el mismo trabajo en 6 horas. ¿En cuanto tiempo pintan los dos juntos la casa?",
      Img: "",
      Responses: ["2 y 4/15", "4/15", "2", "2 y 15", "2 y 4"],
      Correct: [0],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "Calcule el área de la esfera que tiene como radio 2m. (Exprese su respuesta en términos de pi)",
      Img: "",
      Responses: ["9pi", "16pi", "12pi", "10pi", "18pi"],
      Correct: [1],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Cuál es el volumen de una esfera de 6m de diámetro? Calcule su respuesta en términos de pi usando centímetros como unidad de medida.",
      Img: "",
      Responses: ["9,600pi cm", "50pi", "3,600pi cm", "1,600pi cm", "600pi cm"],
      Correct: [2],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=v2autI4LAyA&list=PLSPbyO4D6CgEcgelPSqelK6kJmzTC_0fx",
    },
    {
      Question:
        "¿Puede un triángulo equilátero y un triángulo isósceles ser congruentes? ",
      Img: "",
      Responses: [
        "Es imposible",
        "Si porque un equilátero es también isósceles",
        "No puede ser",
        "Ninguna es correcta",
      ],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si entre un círculo de radio 5 y un cuadrado de lado 11 concéntricos tenemos una región sombreada. ¿Cuánto tiene esta área entre el círculo y el cuadrado?",
      Img: "",
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
        "1/3 * 1/3 = 1/9",
        "1/4 * 1/4 = 1/16",
        "½ * ½ = 1",
        "½ * ½ = 1/4",
        "½ * ½ = 2/4",
      ],
      Correct: [3],
      Verse:
        "En el principio era el Verbo, el Verbo estaba con Dios y el Verbo era Dios. Juan 1:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Cuál es la probabilidad de sacar una pelota roja si tenemos en una caja 10 pelotas rojas, 7 azules y 4 amarillas?",
      Img: "",
      Responses: ["10/21", "10/21", "21/10", "21/11", "11/21"],
      Correct: [0],
      Verse:
        "De Jehová es la tierra y su plenitud, el mundo y los que en él habitan, Salmos 24:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si un alumno quiere un tener un promedio de 91 y ha sacado en 4 de sus 5 evaluaciones 88, 95, 90, 87. ¿Cuánto tendría que sacar de nota final?",
      Img: "",
      Responses: ["95", "90", "89", "91", "100"],
      Correct: [0],
      Verse:
        "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Salmos 91:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es la resta de (Rango + Moda) – (Mediana + Media) en los siguientes datos: ",
      Img: question24,
      Responses: [
        "120 – 105 = 15",
        "117 – 100 = 17",
        "120 – 117 = 3",
        "117 – 90 = 27",
        "117 – 105 = 12",
      ],
      Correct: [4],
      Verse:
        "¿No sabéis que los injustos no heredarán el reino de Dios? No os engañéis: ni los fornicarios, ni los idólatras, ni los adúlteros, ni los afeminados, ni los homosexuales,  1 Corintios 6:9",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question: "Calcule la siguiente operación: (5! * 3!) / 4! =",
      Img: "",
      Responses: ["12", "36", "24", "10", "Ninguna es correcta"],
      Correct: [2],
      Verse:
        "El que cree en el Hijo tiene vida eterna; pero el que se niega a creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él. Juan 3:36",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si en dos cajas A y B hay 12 libros distribuidos de la siguiente forma: En la caja A hay 5 de Matemática y 3 de inglés; y en caja B hay 2 de Matemática y 2 de inglés. ¿Cuál es la probabilidad de que aleatoriamente escogemos un libro de Ingles dado que lo tomamos de la caja B?",
      Img: "",
      Responses: ["2 = 1/2", "2/4 = 1/2", "2/3 = 2/3", "14/7 = 2", "4/6 = 2/3"],
      Correct: [1],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna. 1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "Si el área de un círculo con respecto a otro es de 4:1 ¿cuánto es la razón de los radios?  ",
      Img: "",
      Responses: ["3:1", "4:1", "5:1", "2:1"],
      Correct: [3],
      Verse:
        "La revelación de Jesucristo, que Dios le dio para manifestar a sus siervos las cosas que deben suceder pronto. La declaró enviándola por medio de su ángel a su siervo Juan, Apocalipsis 1:1",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿A que es igual la suma de los siguientes polinomios? (2x^2 - 5x + 6) – (x^2 + 2x – 6) ",
      Img: "",
      Responses: [
        "x^2 - 7x + 12",
        "x^2 - 3x + 10",
        "x^2 + 7x - 12",
        "x^2 - 9x + 16",
      ],
      Correct: [0],
      Verse:
        "Recibid mi enseñanza antes que la plata, y ciencia antes que el oro puro; Proverbios 8:10",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor de la coordenada x del vértice en la siguiente ecuación cuadrática? y = (x – 2)^2 - 4 ",
      Img: "",
      Responses: ["X = 5", "X = 6", "X = 1", "X = 4", "X = 2"],
      Correct: [4],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor del vértice en la siguiente ecuación? y = (x – 3)^2 + 5 ",
      Img: "",
      Responses: ["(3, 5)", "(5, 5)", "(1, 5)", "(2, 5)", "(4, 5)"],
      Correct: [0],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=UoUajGo734c&list=PLSPbyO4D6CgFj-wENoH8e4kWvBCnlbMWm",
    },
    {
      Question:
        "¿Cuál es el valor de la pendiente en la siguiente ecuación? -2y + x = - 4 ",
      Img: "",
      Responses: ["m = 2", "m = 1/2", "m = 4/3", "m = 1/9", "m = 1/3"],
      Correct: [1],
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
