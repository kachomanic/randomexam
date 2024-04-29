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
        20, 21, 22,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 22; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "¿Cuál es el número que se escribe después del 7?",
      Img: "",
      Responses: ["8", "9", "4", "7"],
      Correct: [0],
      Verse:
        "Juan 1:1 En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "Escriba 3 de los números que siguen después del 5 en orden",
      Img: "",
      Responses: ["6,7,8 y 9", "4,5,6 y 7"],
      Correct: [0],
      Verse:
        "Mateo 5:9 Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cómo se escribe el numero 7?",
      Img: "",
      Responses: ["Siete", "Ocho", "Cuatro", "Nueve", "Tres"],
      Correct: [0],
      Verse:
        "Marcos 8:36 Porque ¿qué aprovechará al hombre si ganare todo el mundo, y perdiere su alma?",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuál es el número cinco?",
      Img: "",
      Responses: ["5", "7", "2", "6"],
      Correct: [0],
      Verse:
        "Mateo 5:3 Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Que es un conjunto? ",
      Img: "",
      Responses: [
        "Agrupación de personas, animales o cosas considerados como un todo homogéneo, sin distinguir sus partes. (Todos son iguales)",
        "Es un grupo de diferentes cosas o animales que tienen el mismo color. ",
        "Son cosas que tiene el mismo color y son animales que comen el mismo tipo de comida. ",
      ],
      Correct: [0],
      Verse:
        "Lucas 18:17 De cierto os digo, que el que no recibe el reino de Dios como un niño, no entrará en él.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "Escoja la resta tiene cero como respuesta:",
      Img: "",
      Responses: ["10-9", "3-1", "11-11", "15-12"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Si comparamos el 8 y el 5. ¿Cuál sería la representación correcta? ",
      Img: "",
      Responses: ["8 < 5", "8 < 5", "8 = 5"],
      Correct: [0],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Que signo utilizaría para comparar las siguiente suma: 3 + 5 ___ 4 + 3 ",
      Img: "",
      Responses: ["<", ">", "="],
      Correct: [0],
      Verse:
        "Juan 5:28 No os maravilléis de esto; porque vendrá hora cuando todos los que están en los sepulcros oirán su voz.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Qué número es el que se indica en la recta Numérica?",
      Img: recta,
      Responses: ["0", "1", "2", "3", "7"],
      Correct: [3],
      Verse:
        "1 de Corintios 2:15 En cambio el espiritual juzga todas las cosas; pero él no es juzgado de nadie.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuánto es la suma de 5 y 4? ",
      Img: "",
      Responses: ["10", "8", "1", "7", "9"],
      Correct: [4],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cual es la suma los siguientes Números: 25 + 13 =",
      Img: "",
      Responses: ["35", "39", "37", "36", "38"],
      Correct: [4],
      Verse: "Tito 2:6 Exhorta asimismo a los jóvenes a que sean prudentes.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuánto es la respuesta si restamos 12 - 9 =",
      Img: "",
      Responses: ["21", "4", "2", "5", "10", "3"],
      Correct: [5],
      Verse:
        "Apocalipsis 1:8 Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Si Marcos tienes un paquete de galleta que tiene 12 galletas adentro y su mama le pidió que quería 3. ¿Cuantas galletas le quedan a Marcos?",
      Img: "",
      Responses: ["11", "7", "10", "15", "9"],
      Correct: [4],
      Verse:
        "Proverbios 8:32 Ahora, pues, hijos, oídme, Y bienaventurados los que guardan mis caminos. ",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Si Daniela tienes 5 juguetes y su tía le regala 3 más y después Daniela le da uno a su hermanito. ¿Cuantos juguetes tienen?",
      Img: "",
      Responses: ["9", "7", "5", "8"],
      Correct: [1],
      Verse:
        "Apocalipsis 22:13 Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuantos lados tiene un triángulo?  ",
      Img: "",
      Responses: ["1", "2", "3", "4", "5"],
      Correct: [2],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuántos lados tiene un cuadrado?",
      Img: "",
      Responses: ["1", "2", "3", "4", "5"],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuantas decenas hay en el número 84?",
      Img: "",
      Responses: ["84", "4", "10", "8", "9"],
      Correct: [3],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuántas unidades hay en el numero 95? ",
      Img: "",
      Responses: ["95", "9", "100", "1", "96"],
      Correct: [0],
      Verse:
        "Salmos 91:1 El que habita al abrigo del Altísimo Morará bajo la sombra del Omnipotente.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuantas caras hay en un dado?  ",
      Img: "",
      Responses: ["8", "4", "10", "6", "9"],
      Correct: [3],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "¿Cuál es el resultado de sumar 56 + 75? ",
      Img: "",
      Responses: ["121", "141", "131", "100", "130"],
      Correct: [2],
      Verse:
        "Salmos 146:5 Bienaventurado aquel cuyo ayudador es el Dios de Jacob, Cuya esperanza está en Jehová su Dios",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question: "Reste los siguientes números:  128 - 39",
      Img: "",
      Responses: ["99", "79", "89", "109", "167"],
      Correct: [2],
      Verse:
        "1 Juan 1:9 Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Alberto tiene 10 amigos y van a jugar futbol, pero deciden que todos incluyendo el, deben llevar un amigo para jugar en una cancha grande. ¿Cuantos van a jugar en total? ",
      Img: "",
      Responses: ["11", "10", "20", "22", "12"],
      Correct: [3],
      Verse:
        "2 Timoteo 4:5 Pero tú sé sobrio en todo, soporta las aflicciones, haz obra de evangelista, cumple tu ministerio.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
    },
    {
      Question:
        "Si Jeremías ya tiene 36 meses, ¿Cuantos años tiene? (Asumiendo que 1 año tiene 12 meses)",
      Img: "",
      Responses: ["1", "4", "3", "36"],
      Correct: [2],
      Verse:
        "Gálatas 4:28 Así que, hermanos, nosotros, como Isaac, somos hijos de la promesa.",
      List: "https://www.youtube.com/watch?v=ztG2OAwT9Lk&list=PLSPbyO4D6CgE24QV7oFdW57YY5CjvJuJo",
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
