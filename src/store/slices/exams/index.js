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
        20, 21, 22, 23, 24, 25, 26, 27, 28,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 28; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question: "Resuelva el siguiente ejercicio: ¾ - ½ * 2 + 1/5 * 5",
      Img: "",
      Responses: ["-2", "1.5", "3.5", "1.2", "3.1"],
      Correct: [1],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question: "Resuelva el siguiente ejercicio: -1/5+2/3*1/2+13/15=",
      Img: "",
      Responses: ["2", "3", "3", "-1", "1"],
      Correct: [4],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "¿Cuál es el número que falta para obtener la respuesta esperada? 1/5-2/6* ___  +3/4=2",
      Img: "",
      Responses: ["4/15", "3/20", "1/5", "-63/20"],
      Correct: [3],
      Verse:
        "En el principio creó Dios los cielos y la tierra. Genesis Génesis 1:1",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "Antonieta es una Sra. que le gusta cocinar y su receta secreta de pizzas lleva 6 ingredientes, 2 libras de harina y media taza de aceite. Si hace 7 pizzas además le presta 1 ½ libra a una vecina que quería hacer tortillas. ¿Cuántas pizzas puede hacer al día siguiente con la harina restante si lo que tenía al inicio era un balde de 25 libras? ",
      Img: "",
      Responses: ["4 pizzas", "3 pizzas", "8 pizzas", "2 pizzas", "5 pizzas"],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "Un empresario usa el 25% de sus 75 manzanas de su finca para sembrar arroz, 1/3 de la finca para frijoles, la mitad del resto tiene ganado y la otra mitad deja descansar la tierra. ¿Cuántas manzanas deja descansar el empresario?   ",
      Img: "",
      Responses: [
        "Deja descansando 6.25mz",
        "Deja descansando 5.25mz",
        "Deja descansando 4.25mz",
        "Deja descansando 3.25mz",
      ],
      Correct: [0],
      Verse:
        "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Génesis 1:27",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question: "Resuelva la siguiente ecuación: (3x – 13) / (- 5) = - 1",
      Img: "",
      Responses: ["4", "5", "6", "-6", "-5"],
      Correct: [2],
      Verse:
        "1 Pedro 1:25 Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "¿Cuál es el valor de x en la siguiente ecuación? 1/5-2/6* X +3/4=2",
      Img: "",
      Responses: ["-53/20", "-1/5", "-63/20", "-60/20", "1"],
      Correct: [2],
      Verse:
        "Santiago 3:18 Y el fruto de justicia se siembra en paz para aquellos que hacen la paz.",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "Andrea quiere cocinar una sopa con 7 ingredientes, carne, condimentos y verduras.  Si hablamos en libra tenemos de carne 10 veces lo que tenemos en condimentos, de verduras 11 veces lo que tenemos en carne, y de condimentos tenemos 0.2 libras. ¿Cuántas libras tenemos de cada condimento?",
      Img: "",
      Responses: [
        "2 libras de carne; 1/5 de condimento y 22 libras de verdura",
        "2 libras de carne; 22 de condimento y 1/5 libras de verdura",
        "1/5 libras de carne; 1/3 de condimento y 1/4 libras de verdura",
        "4 libras de carne; 1 de condimento y 16 libras de verdura",
      ],
      Correct: [0],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=QsLciq3IKoo&list=PLSPbyO4D6CgF1vdy-6WE9lY_qBnYXw9X1",
    },
    {
      Question:
        "Escoja la ecuación que acorde con la información me ayude a encontrar la respuesta correcta: Alberto tiene en una cuenta de ahorro $248, gano la mitad de lo que tenía en un trabajo y lo deposito en la cuenta 1 mes después la tercera parte del total la invirtió comprando una computadora.",
      Img: "",
      Responses: [
        "248 + 248/3 - 372/2 = x",
        "248 + 124/2 - 372/3 = x",
        "248 - 372/3 + 124 = x",
        "248 + 248/2 - 372/3 = x",
      ],
      Correct: [3],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva la siguiente operación: - ½ + ¾ -2 * 15",
      Img: "",
      Responses: ["30 y 3/4", "29 y 3/4", "29 y 1/2", "29 y 1/9", "29 y 3/2"],
      Correct: [1],
      Verse:
        "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Hebreos 11:1",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva: ¾ - 7/4 =",
      Img: "",
      Responses: ["1", "-1", "2", "-2", "0"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva 3x > -12",
      Img: "",
      Responses: ["x > - 5", "x > - 8", "x > - 2", "x > - 4"],
      Correct: [3],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva - 2x < 18",
      Img: "",
      Responses: ["x < 9", "x > - 9", "x > 9", "x < - 9"],
      Correct: [1],
      Verse:
        "Por la fe comprendemos que el universo fue hecho por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía. Hebreos 11:3",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva ½ X + 4/3 = ¾ ",
      Img: "",
      Responses: ["x = -6/5", "x = -7/3", "x = -7/2", "x = -7/6"],
      Correct: [3],
      Verse:
        "Genesis 1:31 Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva 3x + 8 = 2x - 5 ",
      Img: "",
      Responses: ["11", "-11", "13", "-13"],
      Correct: [3],
      Verse:
        "Proverbios 9:9 Da al sabio, y será más sabio; Enseña al justo, y aumentará su saber. ",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question: "Resuelva 2y - 12 = - 3y + 13",
      Img: "",
      Responses: ["y=-5", "y=10", "y=5", "y=4", "y=1"],
      Correct: [2],
      Verse:
        "Josué 1:9 Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question:
        "¿Cuál es la altura de un triángulo si su base es 20 y su área es 200? ",
      Img: "",
      Responses: ["10", "30", "20", "100", "18"],
      Correct: [2],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question:
        "¿Si una circunferencia tiene una longitud de 100 metros cuanto mide su diámetro en centímetros? (Encuentre su respuesta en términos de pi)",
      Img: "",
      Responses: ["100/pi", "50pi", "30pi", "20pi", "90pi"],
      Correct: [0],
      Verse:
        "Efesios 6:10 Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
      List: "https://www.youtube.com/watch?v=OEV_hfNphxc&list=PLSPbyO4D6CgEhOkW87ESCsyKUILDCybie",
    },
    {
      Question:
        "Si comparamos el área de un triángulo de base 4 y altura 10 con el área de un círculo de radio 3. ¿Cuál es mayor?",
      Img: "",
      Responses: [
        "Cuadrado",
        "Trapecio",
        "Son iguales",
        "Circulo",
        "Triangulo",
      ],
      Correct: [3],
      Verse:
        "Bienaventurados los de limpio corazón, porque verán a Dios. Mateo 5:8",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "Si una familia va a tener 3 hijos cuantas posibilidades diferentes hay que representen el sexo de los hijos.",
      Img: "",
      Responses: ["4", "7", "6", "8"],
      Correct: [3],
      Verse:
        "Jesús les dijo: —De cierto, de cierto os digo: Antes que Abraham fuera, yo soy.  Juan 8:58",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "Si lanzamos un dado y luego tiramos una moneda dos veces. ¿Cuál sería el espacio maestral de estos sucesos?",
      Img: "",
      Responses: ["16", "32", "24", "8", "48"],
      Correct: [2],
      Verse:
        "En el principio era el Verbo, el Verbo estaba con Dios y el Verbo era Dios. Juan 1:1",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "Si la probabilidad de lanzar un dado y que caiga en 4 es 1/6. ¿A cuánto equivale esto en porcentaje? (Redondee su respuesta)",
      Img: "",
      Responses: ["12%", "25%", "13%", "17%", "10%"],
      Correct: [3],
      Verse:
        "De Jehová es la tierra y su plenitud, el mundo y los que en él habitan, Salmos 24:1",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "¿Cuál es el número que falta para obtener la respuesta esperada? 1/5-3/10 * ___  +19/5=4",
      Img: "",
      Responses: ["1", "-1", "10", "-10", "0"],
      Correct: [4],
      Verse:
        "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Salmos 91:1",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question: "¿Qué número sumado con ¼ es igual a 1/3?",
      Img: "",
      Responses: ["1/15", "2/13", "2/18", "1/12", "1/10"],
      Correct: [3],
      Verse:
        "¿No sabéis que los injustos no heredarán el reino de Dios? No os engañéis: ni los fornicarios, ni los idólatras, ni los adúlteros, ni los afeminados, ni los homosexuales,  1 Corintios 6:9",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "Un empresario tiene medio millón de dólares en una cuenta bancaria de los cuales 50% lo da a su esposa, 3/8 del total inicial lo reparte entre sus hijos y de lo que queda la mitad lo usa para donarlo a personas necesitadas. ¿Cuánto dinero le queda en su cuenta?",
      Img: "",
      Responses: ["$ 56,875", "$ 10,875", "$ 26,875", "$ 36,875", "$ 46,875"],
      Correct: [4],
      Verse:
        "El que cree en el Hijo tiene vida eterna; pero el que se niega a creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él. Juan 3:36",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "¿Cuál es la altura de un triángulo si su área es 100 metros cuadrados? ",
      Img: "",
      Responses: [
        "300 metros",
        "50 metros ",
        "100 metros",
        "150 metros",
        "La respuesta no puede encontrarse",
      ],
      Correct: [4],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna. 1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "¿Si una circunferencia tiene una longitud de 85 metros cuanto mide su diámetro en    centímetros? (Encuentre su respuesta en términos de pi)   ",
      Img: "",
      Responses: ["4,707 cm", "3,707 cm", "1,707 cm", "2,707 cm"],
      Correct: [3],
      Verse:
        "La revelación de Jesucristo, que Dios le dio para manifestar a sus siervos las cosas que deben suceder pronto. La declaró enviándola por medio de su ángel a su siervo Juan, Apocalipsis 1:1",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question: "Resuelva la siguiente ecuación: (2x - ¾ ) / ( 5) = - 1",
      Img: "",
      Responses: ["3.21", "2.375", "2.487", "1.985"],
      Correct: [1],
      Verse:
        "Recibid mi enseñanza antes que la plata, y ciencia antes que el oro puro; Proverbios 8:10",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
    },
    {
      Question:
        "30.	Resuelva la siguiente ecuación con variables a ambos lados. ½ x + 5 = 2.5 x – 3",
      Img: "",
      Responses: ["7", "5", "4", "3", "6"],
      Correct: [2],
      Verse:
        "Pero sabemos que el Hijo de Dios ha venido y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Éste es el verdadero Dios y la vida eterna.  1 Juan 5:20",
      List: "https://www.youtube.com/watch?v=aH3ZOtu-e2M&list=PLSPbyO4D6CgFfjt1kaYdIq5jM8u9RQqOz",
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
