import { createSlice } from "@reduxjs/toolkit";
import exam3img12 from "../../../assets/imgs/exam3-question12.jpg";
import exam5img23 from "../../../assets/imgs/exam5-question23.jpg";
import exam5img24 from "../../../assets/imgs/exam5-question24.jpg";

export const examsSlice = createSlice({
  name: "exams3",
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
      Question: "In the following equation y = -2x + 4 the slope is:",
      Img: "",
      Responses: ["Negative", "Positive", "Undefined", "Zero"],
      Correct: [0],
    },
    {
      Question:
        "In a group of 8 doctors they want to select a committee of 5 people. How many ways can those committee be selected?",
      Img: "",
      Responses: ["336", "45", "720", "24", "110", "100", "56"],
      Correct: [6],
    },
    {
      Question: "Which of the following equation has slope equal to zero?",
      Img: "",
      Responses: [
        "y = 2x - 1",
        "y = 1/2 x+ 4",
        "y = 2x+ 4",
        "y = 4",
        "y = x - 1",
        "y = x",
      ],
      Correct: [3],
    },
    {
      Question:
        "A painter charges $50 for 2 hours and $100 for 4 hours of work. What is the equation that best describes the painter's hourly rate? ",
      Img: "",
      Responses: [
        "y = 50x + 100",
        "y = 50x",
        "y = 25x",
        "y = 25x + 25",
        "y = 50x + 100 * 4",
        "No Answer is correct",
      ],
      Correct: [2],
    },
    {
      Question: "Five is 100% of what Number?",
      Img: "",
      Responses: ["100", "1", "5", "20", "4", "6", "14"],
      Correct: [2],
    },
    {
      Question: "Which of the following equations has slope undefine?",
      Img: "",
      Responses: ["- 5 + x = 5y", "x = 5 + y", "-y = 5", "y = 5", "x = 5"],
      Correct: [4],
    },
    {
      Question:
        "What is the area of the triangle with base = 14in and high = 8in Impossible to find the answer",
      Img: "",
      Responses: ["80 in²", "56 in", "120 in²", "112 in²", "56 in²"],
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
      ],
      Correct: [0],
    },
    {
      Question:
        "If you know two points in a line, (3, 9) and (0, 0) What is the slope of that line?",
      Img: "",
      Responses: [
        "m = -3",
        "m = -9",
        "m = 9",
        "m = 3",
        "m = 12",
        "m is undefine",
      ],
      Correct: [3],
    },
    {
      Question: "What is a area of a rectangle with side A = 20ft and B = 8ft?",
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
      Question:
        "Five Runners are in a race. How many ways can 1st and 2nd be awarded?",
      Img: "",
      Responses: ["120", "6", "5", "1", "20", "24", "10", "15"],
      Correct: [4],
    },
    {
      Question: "4,500 is 25% of What number?",
      Img: "",
      Responses: ["13,500", "20,000", "18,500", "19,000", "17,000", "18,000"],
      Correct: [5],
    },
    {
      Question: "Solve: -(-4+7) - 2<sup>3</sup> + (-20) + 20",
      Img: "",
      Responses: ["-15", "-20", "-7", "-31", "25", "-11", "18"],
      Correct: [5],
    },
    {
      Question:
        "If a linear equation has a formula y=2x-5. What is the y intercept for that equation?",
      Img: "",
      Responses: ["5", "2", "-5", "2", "7", "-7"],
      Correct: [2],
    },
    {
      Question:
        "If we find a Combination (10,10) and Permutation (10,10) Which of those two will have a greater answer?",
      Img: "",
      Responses: [
        "We cannot answer with the information provided",
        "Depends on the context of the problem",
        "Combination",
        "Permutation",
      ],
      Correct: [3],
    },
    {
      Question:
        "Which are the coordinates of the y intercept for the following equation? y +2 = 3x",
      Img: "",
      Responses: [
        "(0, -2)",
        "(1, -2)",
        "(1, 3)",
        "(0, -3)",
        "(1, 3/2)",
        "(0, -2/3)",
      ],
      Correct: [0],
    },
    {
      Question:
        "Which the slope for the following linear equation? y = -2x + 1/3",
      Img: "",
      Responses: ["5", "-2", "3", "-3", "1/3", "-1/3", "1"],
      Correct: [1],
    },
    {
      Question:
        "In a lock of 3 character's combinations (2 of them are numbers and one is a letter) there are 10 numbers to choose from (0,1,2,3,4,5,6,7,8,9) and 24 letters. How many different options for a code do we have if: Numbers cannot be repeated",
      Img: "",
      Responses: [
        "600",
        "6",
        "720",
        "5040",
        "2160",
        "1024",
        "2400",
        "Not enough information to answer",
      ],
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
      Question: "Find the volume of a sphere in m3 that has a radio of 200cm?",
      Img: "",
      Responses: [
        "40/3 pi",
        "26/5 pi",
        "32/3 pi",
        "26/5 pi",
        "No answer is correct",
        "15.5 pi",
        "18.75 pi",
      ],
      Correct: [2],
    },
    {
      Question: "The equation of the line y=2x -1 has:",
      Img: "",
      Responses: [
        "Slope -1 and y-intercept 2",
        "Slope -2 and y-intercept 1",
        "Slope 2 and y-intercept -1",
        "Slope 2 and y-intercept 1",
      ],
      Correct: [2],
    },
    {
      Question:
        "What is the area of the parallelogram with base = 12ft and height = 9ft",
      Img: "",
      Responses: ["108 ft", "96 ft", "108 ft²", "96 ft²", "90 ft²", "21 ft²"],
      Correct: [2],
    },
    {
      Question: "Find the missing side",
      Img: exam5img23,
      Responses: [
        "9x - 20y",
        "9x - 19y",
        "9x - 21y",
        "7x - 21y",
        "No answer is correct",
      ],
      Correct: [2],
    },
    {
      Question: "Find the missing side",
      Img: exam5img24,
      Responses: [
        "3x - 8",
        "7x + 5",
        "10x + 5",
        "6x - 9",
        "7x + 9",
        "No answer is correct",
      ],
      Correct: [3],
    },
    {
      Question: "Multiply mk²p<sup>4</sup> (2m²kp<sup>5</sup>)",
      Img: "",
      Responses: [
        "m<sup>3</sup>k<sup>3</sup>p<sup>9</sup>",
        "m<sup>3</sup>k<sup>3</sup>p<sup>8</sup>",
        "2m<sup>3</sup>k<sup>3</sup>p<sup>9</sup>",
        "2m<sup>3</sup>k<sup>3</sup>p<sup>7</sup>",
        "No answer is correct",
        "2m²k²p<sup>9</sup>",
      ],
      Correct: [2],
    },
    {
      Question: "Simplify: (5x + z² + 3y) + (12x - 2z² - 8x) + x",
      Img: "",
      Responses: [
        "9x + 3y - z²",
        "10x + 3y + z²",
        "18x + 3y - z²",
        "No answer is correct",
        "5x - 3y - z²",
      ],
      Correct: [2],
    },
    {
      Question:
        "Find the probability of getting a 1 or a number greater than 5 when we role some dice.",
      Img: "",
      Responses: ["1/4", "1/5", "1/3", "2/7", "1/60", "-1"],
      Correct: [2],
    },
    {
      Question:
        "At a store we see that shoes are mark dawn15%. If the price of shoes is $160. What is the new price after the discount?",
      Img: "",
      Responses: ["154", "145", "136", "120", "155"],
      Correct: [2],
    },
    {
      Question: "What is a Volume of a Cube that has a side of 12 m?",
      Img: "",
      Responses: [
        "5728 m<sup>3</sup>",
        "36 m<sup>3</sup>",
        "1426 m<sup>3</sup>",
        "None is correct",
        "1728 m<sup>3</sup>",
        "144 m<sup>3</sup>",
      ],
      Correct: [4],
    },
    {
      Question:
        ". Joan is closing the register at the end of the day. He is in charge of counting all the change. There are 129 coins counting only quarters and dimes. If Jason counts $27.00 in these coins, how many quarters(x) and dimes(y) are there?",
      Img: "",
      Responses: [
        "x = 100, y = 29",
        "x = 70, y = 95",
        "x = 94, y = 35",
        "x = 150, y = 15",
      ],
      Correct: [2],
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
