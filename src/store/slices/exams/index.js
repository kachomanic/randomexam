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
        "What is the area of a triangle that has base 5 and height is double the base? ",
      Img: "",
      Responses: ["15", "20", "50", "25", "35", "40"],
      Correct: [3],
    },
    {
      Question:
        "What is the area of the triangle with base = 14in and high = 8in Impossible to find the answer.",
      Img: "",
      Responses: ["80 in²", "56 in", "120 in²", "112 in²", "56 in²", "110 in"],
      Correct: [4],
    },
    {
      Question: "How to find the perimeter?",
      Img: "",
      Responses: [
        "Adding all sides around the figure",
        "Adding all sides that are the same",
        "Adding the most important information",
        "Not sure how to find it",
        "Adding the first 3 sides and multiply the last one",
      ],
      Correct: [0],
    },
    {
      Question:
        "Do I find the perimeter of the square with the same formula than a rectangle",
      Img: "",
      Responses: [
        "Maybe if they have the same perimeter",
        "You can calculate both using the formula of the rectangle",
        "The formula of the square you can use it for a rectangle",
        "Only if the rectangle has one 90 degrees angle",
      ],
      Correct: [1],
    },
    {
      Question:
        "What is the area of the circle with r = 1.8 mi ? (remember pi = 3.14)",
      Img: "",
      Responses: [
        "10.85 mi",
        "4.17 mi²",
        "3.14 mi²",
        "10.17 mi²",
        "8.17 mi²",
        "12.17 mi²",
        "-5.24 mi²",
      ],
      Correct: [3],
    },
    {
      Question:
        "What is an area of a rectangle with side A = 20ft and B = 8ft?",
      Img: "",
      Responses: [
        "120 ft",
        "80 ft²",
        "120 ft²",
        "110 ft²",
        "200 ft²",
        "160 ft²",
      ],
      Correct: [5],
    },
    {
      Question: "What is the perimeter of a square that has a side of 25m?",
      Img: "",
      Responses: ["90", "75", "40", "50", "100", "75"],
      Correct: [4],
    },
    {
      Question:
        "A circular park has a diameter of 3 miles, and you want to jog around the park. How many miles do you complete in 4 laps?",
      Img: "",
      Responses: [
        "9.68 mi²",
        "37.68 mi",
        "9.68 mi",
        "37.18 mi²",
        "25.68 mi",
        "97.68 mi",
      ],
      Correct: [1],
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
        "What is the difference between a rectangle and a parallelogram?",
      Img: "",
      Responses: [
        "One has opposite sides different and the other not.",
        "The difference is in the formulas for Perimeters and areas.",
        "The difference is that all sides are different.",
        "The sides of the rectangles intersect with 90 degrees angels and sides of the parallelogram no.",
        "There is no difference between them.",
      ],
      Correct: [3],
    },
    {
      Question: "Convert the following measure: 0.0015 km to cm",
      Img: "",
      Responses: ["50 cm", "15 cm", "0.15 cm", "150 cm", "50 cm", "1,500 cm"],
      Correct: [3],
    },
    {
      Question:
        "If a rectangle has a width of 2 ft and a length of 3 ft. What is the area in square inches?",
      Img: "",
      Responses: ["1564 in²", "164 in", "514 in²", "72 in²", "864 in²"],
      Correct: [4],
    },
    {
      Question:
        "Convert the following measure: 1.12 miles to yards if (1 mi = 1760 yd)",
      Img: "",
      Responses: [
        "3971.2 yd",
        "2971.2 yd",
        "871.2 yd",
        "1971.2 yd",
        "971.2 yd",
        "1771.2 yd",
      ],
      Correct: [3],
    },
    {
      Question: "Find the area of a circle with diameter = 8 in.",
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
        "What is the area of a parallelogram with base 4ft and high 100 in",
      Img: "",
      Responses: ["4800 ft²", "2400 in²", "100 ft²", "4800 in²", "4800 in"],
      Correct: [3],
    },
    {
      Question: "Which of the following is equal to -5?",
      Img: "",
      Responses: [
        "-5 + 5",
        "4 + 1",
        "3 - 8",
        "10 - 5",
        "-5 + 1",
        "None is equal to -5",
      ],
      Correct: [2],
    },
    {
      Question: "Find the answer: -5 + 7 * 2 -10 =",
      Img: "",
      Responses: ["13", "-1", "-14", "2", "-8", "-15"],
      Correct: [1],
    },
    {
      Question:
        "When we calculate using Order of Operation the first operation if is present is always:",
      Img: "",
      Responses: [
        "Multiplication",
        "Division",
        "Addition",
        "Parenthesis",
        "Subtraction",
        "Exponent",
      ],
      Correct: [3],
    },
    {
      Question: "Find the answer: -2 + 9 * 3 -10 +3 * (-10) =",
      Img: "",
      Responses: ["4", "-20", "20", "-15", "9", "-10", "18"],
      Correct: [3],
    },
    {
      Question:
        "Talking about US money, what is the equivalent of $3.75 in quarters?",
      Img: "",
      Responses: [
        "6 quarters",
        "15 quarters",
        "12 quarters",
        "75 quarters",
        "10 quarters",
        "18 quarters",
      ],
      Correct: [1],
    },
    {
      Question:
        "Talking about US money, what is the equivalent of $5.40 in dimes?",
      Img: "",
      Responses: [
        "36 dimes",
        "54 dimes",
        "48 dimes",
        "65 dimes",
        "44 dimes",
        "40 dimes",
      ],
      Correct: [1],
    },
    {
      Question: "Find the value of X if 10X = 30",
      Img: "",
      Responses: ["4", "10", "2", "3", "5", "300", "1/3"],
      Correct: [3],
    },
    {
      Question: "Find the value of X if -4X = 28",
      Img: "",
      Responses: ["-6", "-10", "2", "-7", "6", "-4"],
      Correct: [3],
    },
    {
      Question: "Multiply the following numbers: 0.25 x 0.1 =",
      Img: "",
      Responses: ["0.025", "2.5", "25", "0.125", "0.4", "0.0025"],
      Correct: [0],
    },
    {
      Question:
        "Which of the following expressions is equal (same answer) to 2 x ½",
      Img: "",
      Responses: [
        "4 times 10",
        "8 divided by 8",
        "12 minus 10",
        "7 times ½",
        "7 plus 6",
        "4 multiply 4",
      ],
      Correct: [1],
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
