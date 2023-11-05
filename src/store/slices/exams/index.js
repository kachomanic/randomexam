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
      Question:
        "What is the area of a triangle that has base 4 and height is 7?",
      Img: "",
      Responses: ["15", "12", "20", "14", "21", "28"],
      Correct: [3],
    },
    {
      Question:
        "What is the area of the triangle in square feet with base = 24in and high = 2ft ;   (1ft = 12in)",
      Img: "",
      Responses: ["12 ft²", "8 ft²", "24 ft²", "4 ft²", "2 ft²", "6 ft²"],
      Correct: [4],
    },
    {
      Question: "What is the perimeter of a square that has a side of 10m?",
      Img: "",
      Responses: ["10", "16", "30", "40", "28", "14"],
      Correct: [3],
    },
    {
      Question: "What is 100% of 10?",
      Img: "",
      Responses: ["10", "1", "1000", "100", "5", "20"],
      Correct: [0],
    },
    {
      Question:
        "What is the area of the circle with r = 10 m? (Remember pi = 3.14)",
      Img: "",
      Responses: [
        "10.85 m²",
        "4.17 m²",
        "3.14 m²",
        "314 m²",
        "8.17 m²",
        "12.17 m²",
      ],
      Correct: [3],
    },
    {
      Question:
        "What is an area of a rectangle with side A = 10ft and B = 8ft?",
      Img: "",
      Responses: ["100 ft", "80 ft²", "60 ft²", "110 ft²", "70 ft²", "80 ft²"],
      Correct: [5],
    },
    {
      Question: "What is the perimeter of a square that has a side of 13mm?",
      Img: "",
      Responses: ["60", "75", "40", "50", "52", "75"],
      Correct: [4],
    },
    {
      Question: "What is 50% of 50? ",
      Img: "",
      Responses: ["25", "12.5", "500", "250", "5", "50"],
      Correct: [0],
    },
    {
      Question:
        "What is the area of the parallelogram with base = 12ft and hight = 9ft",
      Img: "",
      Responses: ["102 ft", "96 ft", "108 ft²", "96 ft²", "90 ft²", "21 ft²"],
      Correct: [2],
    },
    {
      Question:
        "What is the area of the parallelogram with base = 12ft and hight = 12ft",
      Img: "",
      Responses: ["102 ft", "96 ft", "144 ft²", "136 ft²", "24 ft²", "21 ft²"],
      Correct: [2],
    },
    {
      Question:
        "What is the difference between a rectangle and a parallelogram?",
      Img: "",
      Responses: [
        "One has opposite sides different and the other not",
        "The difference is in the formulas for Perimeters and areas",
        "The difference is that all sides are different",
        "The sides of the rectangles intersect with 90 degrees angels and sides of the parallelogram no",
        "There is no difference between them",
      ],
      Correct: [3],
    },
    {
      Question: "Convert the following measure: 0.0015 km to mm",
      Img: "",
      Responses: [
        "500 mm",
        "5150 mm",
        "0.95 mm",
        "1500 mm",
        "2500 mm",
        "15000 mm",
      ],
      Correct: [3],
    },
    {
      Question:
        "If a rectangle has a width of 2 km and a length of 3 km. What is the area in square km? ",
      Img: "",
      Responses: ["10 km²", "16 km²", "14 km²", "12 km²", "6 km²"],
      Correct: [4],
    },
    {
      Question:
        "Convert the following measure: 1.82 miles to yards if (1 mi = 1760 yd)",
      Img: "",
      Responses: [
        "3971.2 yd",
        "2971.2 yd",
        "1871.2 yd",
        "3203.2 yd",
        "1971.2 yd",
        "2771.2 yd",
      ],
      Correct: [3],
    },
    {
      Question: "Find the area of a circle with diameter = 8 in",
      Img: "",
      Responses: [
        "50.24 ft",
        "150.24 in",
        "50.24 in²",
        "200.96 in",
        "200.96 ft",
        "184.25 ft",
      ],
      Correct: [2],
    },
    {
      Question:
        "What is the area of a parallelogram with base 12in and high 100 in",
      Img: "",
      Responses: ["1800 in²", "1400 in²", "100 in²", "1200 in²", "4800 in²"],
      Correct: [3],
    },
    {
      Question: "Which of the following is equal to -6?",
      Img: "",
      Responses: [
        "-5 + 8",
        "3 + 1",
        "2 - 8",
        "12 - 5",
        "-8 + 1",
        "None is equal to -6",
      ],
      Correct: [2],
    },
    {
      Question: "Find the answer: 8 + 7 * 12 - 40 =",
      Img: "",
      Responses: ["55", "52", "-44", "60", "-50", "-15"],
      Correct: [1],
    },
    {
      Question:
        "When we calculate using Order of Operation the second operation if there is present is always:",
      Img: "",
      Responses: [
        "Multiplication",
        "Division",
        "Addition",
        "Parenthesis",
        "Subtraction",
        "Exponent",
      ],
      Correct: [5],
    },
    {
      Question: "Find the answer: - 12 + 9 * 3 - 15 + 3 * (5) =",
      Img: "",
      Responses: ["14", "20", "16", "15", "10", "18"],
      Correct: [3],
    },
    {
      Question:
        "Talking about US money, what is the equivalent of $5.25 in quarters?",
      Img: "",
      Responses: [
        "6 quarters",
        "21 quarters",
        "12 quarters",
        "75 quarters",
        "10 quarters",
        "18 quarters",
      ],
      Correct: [1],
    },
    {
      Question:
        "Talking about US money, what is the equivalent of $12.10 in dimes?",
      Img: "",
      Responses: [
        "136 dimes",
        "65 dimes",
        "121 dimes",
        "124 dimes",
        "118 dimes",
        "110 dimes",
      ],
      Correct: [2],
    },
    {
      Question: "Find the value of K if 10K = 440",
      Img: "",
      Responses: ["54", "10", "32", "44", "25", "300"],
      Correct: [3],
    },
    {
      Question: "Find the value of X if -4X = 52",
      Img: "",
      Responses: ["-6", "-10", "12", "-13", "-16", "-4"],
      Correct: [3],
    },
    {
      Question: "Multiply the following numbers: 0.25 x 0.5 = ",
      Img: "",
      Responses: ["0.025", "1.5", "12", "0.125", "0.14", "0.1025"],
      Correct: [3],
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
