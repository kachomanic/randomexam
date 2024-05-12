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
      Question: "Descomponga la siguiente cantidad: 35,404",
      Img: "",
      Responses: [
        "30,000 + 5,000 + 400 + 10 + 4",
        "30,000 + 5,000 + 400 + 00 + 4",
        "30,400 + 5,000 + 400 + 10 + 4",
        "30,000 + 5,400 + 400 + 10 + 4",
        "30,000 + 5,002 + 400 + 2",
      ],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Escriba el número que se ubica entre los siguientes dos números: 4694 y 4696",
      Img: "",
      Responses: ["4695", "4697", "4694", "4698", "4693"],
      Correct: [0],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Sume las siguientes cantidades 295 y 354",
      Img: "",
      Responses: ["649", "685", "549", "680", "658"],
      Correct: [0],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "En una aldea hay 384 adultos, 254 niños y 1219 ancianos. ¿Cuántas personas hay en total en la aldea?",
      Img: "",
      Responses: ["1,857", "1,325", "980", "1,380", "1,658"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Marta que es dueña de una cadena de restaurantes compró para la semana 345 lb de arroz el lunes, 262 lb el miércoles y 523 lb el viernes. ¿Cuántas libras de arroz se compraron para el restaurante?",
      Img: "",
      Responses: ["1,130", "1,525", "990"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Resuelva el siguiente ejercicio. 3*(1.5-0.8)=",
      Img: "",
      Responses: ["2.3", "3.5", "2.1"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Realice la siguiente conversión.  3 años =   _______ meses",
      Img: "",
      Responses: ["30 meses", "24 meses y 15 días", "36 meses"],
      Correct: [2],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Reste las siguientes cantidades decimales: 274.383 – 160.291",
      Img: "",
      Responses: ["114.092", "315.18"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "A cuántos milímetros equivalen? 3.7 metros:",
      Img: "",
      Responses: ["3700", "37.00", "37,000"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Entre 4 amigos se unen para llevar ayuda a un hospital. Si todos aportan la misma cantidad de dinero y compran con $600 artículos variados para los enfermos. ¿Cuánto dinero aporto cada uno de los amigos?",
      Img: "",
      Responses: ["150", "No se puede determinar", "200"],
      Correct: [0],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuantas aristas y cuantas caras tiene un circulo?",
      Img: "",
      Responses: [
        "8 aristas y 6 caras",
        "Ninguna arista y ninguna cara.",
        "6 aristas y 6 caras",
        "No se puede encontrar la respuesta",
      ],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Multiplique los siguientes números: 237*1000",
      Img: "",
      Responses: ["237,000", "325,000", "23,700"],
      Correct: [0],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Sume las siguientes cantidades mentalmente, trate de no usar papel y lápiz 593 y 180.",
      Img: "",
      Responses: ["658", "680", "549", "685", "773"],
      Correct: [4],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Un niño empresario con un negocio en su colegio gano $135 la primera semana, $115 la segunda, $95 la tercera y 205 la cuarta. ¿Cuánto dinero gano en total ese mes?",
      Img: "",
      Responses: ["525", "500", "495", "620", "550"],
      Correct: [4],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Descomponga la siguiente cantidad: 45,494",
      Img: "",
      Responses: [
        "40,000 + 5,000 + 400 + 90 + 0",
        "40,000 + 5,000 + 400 + 90 + 4",
        "40,400 + 5,000 + 400 + 80 + 4",
        "40,000 + 5,400 + 400 + 10 + 4",
        "45,000 + 494",
      ],
      Correct: [1],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Seleccione la respuesta correcta: 2345 – 542 ",
      Img: "",
      Responses: ["1,800", "1,725", "1,803", "1,220"],
      Correct: [2],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Un empresario compro 5280 camisetas. Si le entregan 3320 en un primer envió. ¿Qué cantidad de camisetas están pendientes de entrega? ",
      Img: "",
      Responses: ["0", "3,320", "5,280", "1,560", "1,960"],
      Correct: [4],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Entre 5 amigos se unen para llevar ayuda a un hospital. Si todos aportan la misma cantidad de dinero y compran con $500 artículos variados para los enfermos ¿cuánto aporto cada uno de los amigos? ",
      Img: "",
      Responses: ["50", "150", "100", "500", "3,600"],
      Correct: [2],
      Verse:
        "Salmos 91:1 El que habita al abrigo del Altísimo Morará bajo la sombra del Omnipotente.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Multiplique los siguientes números: 220*16",
      Img: "",
      Responses: ["2,520", "2,200", "1,990", "3,500", "3,520"],
      Correct: [4],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Multiplique los siguientes números 1,600 por 1,000",
      Img: "",
      Responses: [
        "160,000",
        "16,000",
        "1,666,600",
        "1,600,000",
        "1,600,000,000",
      ],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuál de los siguientes números es un numero decimal? ",
      Img: "",
      Responses: ["12", "10", "1,500", "35.20", "3"],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Reste las siguientes cantidades decimales: 64.321 – 16.254",
      Img: "",
      Responses: ["48.67", "48.66", "48.067", "48"],
      Correct: [2],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿A cuántos centímetros equivalen? 2.5 metros?",
      Img: "",
      Responses: ["2,500", "25", "250", "2.5"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Convierta las siguientes medidas a metro y luego reste el resultado. 25cm y 95mm",
      Img: "",
      Responses: ["0.07", "0.155", "0.0155", "1.55", "0.0055"],
      Correct: [2],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuantas aristas y cuantas caras tiene una caja de zapato? ",
      Img: "",
      Responses: [
        "8 aristas y 6 caras",
        "6 aristas y 8 caras",
        "8 aristas y 8 caras",
        "6 aristas y 6 caras",
      ],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Qué son las rectas paralelas? ",
      Img: "",
      Responses: [
        "Rectas que nunca se cortan",
        "Dos rectas que tienen la misma distancia entre si",
        "Ambas son correctas",
      ],
      Correct: [2],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Resuelva el siguiente ejercicio. 2*(1.8+3.2)=",
      Img: "",
      Responses: ["12.5", "10", "10.5", "11"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si la longitud se mide con regla, ¿con que se medirá el tiempo?",
      Img: "",
      Responses: ["Transportador", "Reloj", "Termómetro", "Pesa"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Realice la siguiente conversión.  2 años =   _______ días",
      Img: "",
      Responses: ["760 días", "365 días", "680 días", "730 días"],
      Correct: [3],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si 3kg de arroz tienen un precio de $85 y si yo quiero comprar 9kg de arroz ¿cuánto dinero tendría que llevar al mercado?",
      Img: "",
      Responses: ["$765", "$850", "$900", "$255"],
      Correct: [3],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
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
