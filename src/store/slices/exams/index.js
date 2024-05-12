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
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 23; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "¿Cuál sería el perímetro de un pentágono regular en cual uno de sus lados mide 12m?",
      Img: "",
      Responses: ["600", "120", "60", "48", "1200"],
      Correct: [2],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Los polígonos irregulares pueden tener más lados que los polígonos regulares",
      Img: "",
      Responses: ["Verdadero", "Falso"],
      Correct: [1],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si una empresa va a pagar el casto de sus trabajadores en una capacitación de mejora continua. ¿Cuánto tiene que pagar la empresa si los 12 trabajadores gastaron $256.65 en los 4 días del seminario?",
      Img: "",
      Responses: ["3079", "307,980", "207,980", "2079.80", "3079.80"],
      Correct: [4],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si una empresa grande paga en subsidio semanal $7,950.50 por la el almuerzo de sus 980 trabajadores cada semana. ¿Cuánto estaría asignando a cada trabajador?",
      Img: "",
      Responses: ["$ 11.11", "$ 9.11", "$ 10.11", "$ 11.8", "$ 8.11"],
      Correct: [4],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "¿Cuál sería el menor de 3 números pares que suman 84?",
      Img: "",
      Responses: ["36", "26", "16"],
      Correct: [1],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál sería el mayor de dos números primos consecutivos que suman 18?",
      Img: "",
      Responses: ["1", "13", "11", "7"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "De los siguientes números. ¿Cuál sería divisible por 2, 5 y 10?",
      Img: "",
      Responses: ["55", "64", "75", "105", "60"],
      Correct: [4],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Puede existir un número que sea divisible por 10 y no sea divisible por 5?",
      Img: "",
      Responses: ["No", "Si", "Si, pero solo usando números negativos"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuáles de los siguientes números es el que más se repite cuando descomponemos el 54 en factores primos?",
      Img: "",
      Responses: ["2", "3", "5", "11", "7"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuáles de los siguientes números NO lo podemos usar para descomponer en factores primos?",
      Img: "",
      Responses: ["5", "6", "11", "3", "2", "13"],
      Correct: [1],
      Verse:
        "Salmos 119:9 ¿Con qué limpiará el joven su camino? Con guardar tu palabra.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si María llena con 3/4 de agua un balde que tiene 1/2 de un galón. ¿Cuánto necesita de agua para llenar un balde que tiene 1 galón completo?",
      Img: "",
      Responses: ["1.5", "3/4", "1/2", "3", "6"],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question: "Cuál es el Máximo Común Divisor de 80, 60 y 95?",
      Img: "",
      Responses: ["10", "5", "3"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cómo se podría escribir la siguiente fracción a decimal?  3/5",
      Img: "",
      Responses: ["0.8", "0.2", "0.6", "0.45"],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si una circunferencia tiene un diámetro de 30cm; ¿cuál será la medida de su longitud?",
      Img: "",
      Responses: ["720cm", "260.45cm", "706.5cm"],
      Correct: [2],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si con 2 litros de agua puedo hacer un refresco para 7 personas. ¿Cuánto necesitare para hacerle un fresco a 49 personas?",
      Img: "",
      Responses: [
        "4 litros",
        "56 litros",
        "42 litros",
        "49 litros",
        "14 litros",
      ],
      Correct: [4],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "El 25% de un colegio de 200 alumnos son parte de los equipos deportivos. ¿Cuántos alumnos no participan en los deportes en ese colegio?",
      Img: "",
      Responses: ["50", "75", "150", "200"],
      Correct: [2],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Encuentre el área de un triángulo que su base es de 4m y su altura es del doble de la base.",
      Img: "",
      Responses: ["32m²", "8m²", "16m²", "28m²", "24m²"],
      Correct: [2],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál es el área de una ciudad cuadrada que su perímetro es 40km?  ",
      Img: "",
      Responses: ["400km²", "100km²", "200km²", "80km²", "800km²"],
      Correct: [1],
      Verse: "¿Cuántos cuadrantes hay en el plano cartesiano?",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál es la suma de los 3 ángulos interiores de un triángulo? ¿Se aplica esto a todos los triángulos?",
      Img: "",
      Responses: [
        "180 grados y no se aplica a todos los triangulos",
        "360 grados",
        "90 grados",
        "270 grados",
        "180 grados y se aplica a todos los triangulos",
      ],
      Correct: [4],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Investigue en internet y encuentre ¿cuál es el promedio de las edades del presidente de Finlandia, Canadá y España? Redondee su respuesta",
      Img: "",
      Responses: ["67 años", "61 años", "44 años", "50 años", "57 años"],
      Correct: [4],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "De los siguientes valores que representan El número de usuarios usando internet por año; encuentre la moda mediana y Rango? Argentina 55.8; Bolivia 34.2; Canada 86.8; Chile 61.4; Colombia 49; Costa Rica 47.5; El Salvador 25.5; Ecuador 35.1; Brazil 49.8, Mexico 38.4",
      Img: "",
      Responses: [
        "Moda: No hay, Mediada: 48.25, Rango: 61.3",
        "Moda: 55, Mediada: 40, Rango: 60",
        "Moda: No hay, Mediada: 10, Rango: 25",
      ],
      Correct: [0],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "Si vamos a una tienda y están vendiendo un juguete que tiene un valor de $55 pero esta con un descuento de 20%. ¿Cuánto tiene que pagar mi mama si la convenzo de que me lo compre porque está en rebaja?",
      Img: "",
      Responses: ["45", "44", "50", "40"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "El 12% de un colegio de 400 alumnos son parte de los equipos deportivos. ¿Cuántos alumnos participan en los deportes en ese colegio?",
      Img: "",
      Responses: ["12", "50", "52", "48", "25"],
      Correct: [3],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=325-p2KnI_E&list=PLSPbyO4D6CgFBLtvpQED8JfETlSu0HCv5",
    },
    {
      Question:
        "¿Cuál es el perimetro de una ciudad cuadrada que su area es 49km²?",
      Img: "",
      Responses: ["10km", "9km", "20km", "7km"],
      Correct: [3],
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
