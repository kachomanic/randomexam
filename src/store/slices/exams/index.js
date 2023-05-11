import { createSlice } from "@reduxjs/toolkit";
import exam2img2 from "../../../assets/imgs/exam2-question2.jpg";
import exam2img6 from "../../../assets/imgs/exam2-question6.jpg";
import exam2img31 from "../../../assets/imgs/exam2-question31.jpg";

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
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ].sort(() => Math.random() - 0.5);
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 31; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "When two die are rolled, find the probability of getting a 5 and then a number less than 2?",
      Img: "",
      Responses: [
        "1/36",
        "3/36",
        "1/12",
        "1/18",
        "0.90",
        "4/36",
        "All are incorrect",
      ],
      Correct: [0],
    },
    {
      Question:
        "What is the equation of the line from the graph showing in the picture.",
      Img: exam2img2,
      Responses: [
        "y = 3x + 2",
        "y = -2x + 1",
        "y = 2x + 2",
        "y = 2x + 1",
        "y = 5x + 2",
        "y = 4x - 1",
        "-2y = 2x +2",
      ],
      Correct: [3],
    },
    {
      Question:
        "In Mary borrowed $40,000 at a 7% rate for 3 years. How much will she pay in interest?",
      Img: "",
      Responses: ["$5,100", "$9,200", "$6,400", "$7,600", "$8,400"],
      Correct: [4],
    },
    {
      Question:
        "Joan is closing the register at the end of the day. He oversees counting all the changes. There are 129 coins counting only quarters and dimes. If Jason counts $27.00 in these coins, how many quarters(x) and dimes(y) are there?",
      Img: "",
      Responses: ["x=100, y=29", "x=70, y=95", "x=94, y=35", "x=150, y=15"],
      Correct: [2],
    },
    {
      Question:
        "In a circle with center O, the radius is 8 cm. What is the length of the arc intercepted by a central angle of 60 degrees?",
      Img: "",
      Responses: ["4π cm", "8π/3 cm", "4π/3 cm", "16π/3 cm"],
      Correct: [1],
    },
    {
      Question:
        "If the amount of money collected by the girls in all six classes is multiplied by 5, and the amount of money collected by the boys in all six classes is multiplied by 2, what would be the new ratio of the total amount of money collected by the girls to that of the boys? The chart shows how much money the boys and girls collected.",
      Img: exam2img6,
      Responses: ["215:86", "150:57", "445:172", "258:100", "150:86", "86:172"],
      Correct: [2],
    },
    {
      Question: "Divide (15x - 25x³ + 40x²) / 5x",
      Img: "",
      Responses: [
        "3 + 5x² - 8x",
        "3 - 5x² + 8x",
        "3 + 5x² + 8x",
        "3x + 8x - 5x²",
        "3 + 5x + 8x²",
        "No answer is correct",
        "5 + 3x² + 8x",
      ],
      Correct: [1],
    },
    {
      Question:
        "How do you model the process of buying a car when you pay a $3,000 down payment and a monthly payment of $350. Which number represents the slope and which the y-intercept?",
      Img: "",
      Responses: [
        "$3,000 represents the slope but $350 is not needed in this case",
        "$350 represents the slope and $3,000 the y-intercept",
        "$3,000 represents the slope and $350 the y-intercept.",
        "$350 represents the slope but you cannot find the y intercept",
        "The slope and Y-intercept is to model linear equations in coordinate plane NOT in finance",
      ],
      Correct: [2],
    },
    {
      Question: "Does a line with positive slope go:",
      Img: "",
      Responses: ["Dawn", "Horizontal", "Up", "Vertical"],
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
        "What is the area of the circle with r = 1.8 mi? (Remember pi = 3.14)",
      Img: "",
      Responses: [
        "10.17 mi",
        "4.17 mi²",
        "3.14 mi²",
        "10.17 mi²",
        "8.17 mi²",
        "12.17 mi²",
        "-5.24mi²",
      ],
      Correct: [3],
    },
    {
      Question:
        "What words can you look at or help you determine if a problem is a Combination or Permutation?",
      Img: "",
      Responses: [
        "Select a group indicate Permutation and find a sequence or choosing specific order group like places in a race or president secretary indicate Combination.",
        "Select a group, like places in a race or president secretary indicate Combination and any other word indicate Permutation",
        "Select a group, like places in a race or president secretary indicate Permutation and any other word indicate Combination",
        "Select a group indicate Combination and find a sequence or choosing specific order group like places in a race or president secretary indicate Permutation.",
      ],
      Correct: [3],
    },
    {
      Question: "What is half of 0.025?",
      Img: "",
      Responses: ["1/8", "0.1575", "0.755", "0.0125", "1/0.75", "0.00755"],
      Correct: [3],
    },
    {
      Question:
        "Peter bought a pair of pants for $11.25 and 2 T-shirts for $7.35 each and 1 pair of shoes for double the total of one T-shirt and 1 pair of pants. What is the change if he pays with a $100 bill? ",
      Img: "",
      Responses: [
        "$5.35 is the change",
        "$1.50",
        "$36.85",
        "$1.15 is the change.",
        "The answer is not on the options.",
        "$27.60",
      ],
      Correct: [2],
    },
    {
      Question:
        "Which the slope for the following linear equation? 2y = -2x + 1/3",
      Img: "",
      Responses: ["5", "-1", "3", "-3", "1/3", "-1/3", "1"],
      Correct: [1],
    },
    {
      Question: "Factor the polynomial: 16x² - 169",
      Img: "",
      Responses: [
        "(4x + 12)(4x - 12)",
        "(4x + 13)(4x - 13)",
        "(x + 13)(x - 13)",
        "(x + 11)(x - 11)",
        "(4x - 13)(4x - 13)",
        "(4x + 13)(4x + 13)",
      ],
      Correct: [1],
    },
    {
      Question: "The following equation y = 2x - 1 is written in:",
      Img: "",
      Responses: [
        "Slope Intercept Form",
        "Standard Form",
        "Point Slope Form",
        "Quadratic Form",
      ],
      Correct: [0],
    },
    {
      Question:
        "In a school there are 350 students, 1/5 of them are Christians. From the Christians 1/10 does not go to church every week. How many students go to church every week? ",
      Img: "",
      Responses: ["58", "24", "35", "55", "63", "No answer is correct"],
      Correct: [4],
    },
    {
      Question: "-5² + (-5)² + 4²",
      Img: "",
      Responses: ["-25", "25", "-5", "5", "1", "0", "16", "64"],
      Correct: [6],
    },
    {
      Question: "If 3(5m - 1 ) = 12 ; What is the value of -2m",
      Img: "",
      Responses: ["m = 2", "m = -3", "m = 4", "m = -2", "m = -5", "m = 0"],
      Correct: [3],
    },
    {
      Question:
        "There are 20 products in the box, of which 3 are faulty. Find the probability of pulling out a nonfaulty product",
      Img: "",
      Responses: ["0", "1/10", "2/15", "1/20", "1/9", "17/20"],
      Correct: [5],
    },
    {
      Question: "Multiply xy²z<sup>4</sup> (2x² - 5yz)",
      Img: "",
      Responses: [
        "2x³y²z<sup>4</sup - 5xy³z<sup>5</sup",
        "4x³y²z<sup>4</sup> - 5xy³z<sup>5</sup>",
        "2x³y²z<sup>5</sup> - 5xy³z<sup>5</sup>",
        "2x³y²z<sup>4</sup> + 5xy³z<sup>5</sup>",
        "2x³y²z<sup>4</sup> + 5xy²z<sup>5</sup>",
        "No answer is correct",
      ],
      Correct: [0],
    },
    {
      Question:
        "Solve: 5(5p - 5) = 5 (Find all correct answer if there are more than one) ",
      Img: "",
      Responses: [
        "p = 1/5",
        "p = 1.325",
        "p = 1.425",
        "p = 1.2",
        "p = 6/4",
        "p = 6/5",
      ],
      Correct: [3, 5],
    },
    {
      Question:
        "What information do you need to find the Volume of the Sphere?",
      Img: "",
      Responses: [
        "Only high",
        "Depends on the formula we use",
        "The radio and the high",
        "Only the radio",
        "All answers are correct",
      ],
      Correct: [3],
    },
    {
      Question: "What is the slope of the following equation? 4y = 2x - 8",
      Img: "",
      Responses: ["m = 0", "m = 4", "m = -2", "m = 8", "m = 0", "m = 1/2"],
      Correct: [5],
    },
    {
      Question:
        "Which are the intercepts from the following Equations: 2x + 3y =9",
      Img: "",
      Responses: [
        "(0, 1) and (4.5, 2)",
        "(0, -3) and (-4.5, 0)",
        "(0, -3) and (4.5, 2)",
        "(0, 3) and (4.5, 0)",
        "No answer is correct",
        "(1, 1) and (-4.5, 2)",
      ],
      Correct: [3],
    },
    {
      Question:
        "What is the equation of the line passes through the points (1, 2) and (2, -2)",
      Img: "",
      Responses: [
        "y = 4/3x + 1",
        "y = -4x + 6",
        "y = 4x + 4",
        "y = 4x -2",
        "y = 6x -1",
      ],
      Correct: [1],
    },
    {
      Question: "Convert the following measure: 0.0015 km to cm",
      Img: "",
      Responses: ["50 cm", "15 cm", "0.15 cm", "150 cm", "50 cm", "1,500 cm"],
      Correct: [3],
    },
    {
      Question:
        "What words can you look at or help you determine if a problem is a Combination or Permutation?",
      Img: "",
      Responses: [
        "Select a group indicate Permutation and find a sequence or choosing specific order group like places in a race or president secretary indicate Combination. ",
        "Select a group, like places in a race or president secretary indicate Combination and any other word indicate Permutation. ",
        "Select a group, like places in a race or president secretary indicate Permutation and any other word indicate Combination. ",
        "Select a group indicate Combination and find a sequence or choosing specific order group like places in a race or president secretary indicate Permutation.",
      ],
      Correct: [3],
    },
    {
      Question:
        "What is the meaning and range of the following set of Data? 20, 10, 10, 15, 25, 20, 30, 30.",
      Img: "",
      Responses: [
        "mean 20 and range 20",
        "mean 10 and range 20",
        "mean 10 and range 15",
        "mean 15 and range 20",
        "mean 15 and range 15",
      ],
      Correct: [0],
    },
    {
      Question: "Find the area of the following triangle",
      Img: exam2img31,
      Responses: [
        "90 u²",
        "27 u²",
        "54 u²",
        "36 u²",
        "42 u²",
        "The answer is not in the options",
      ],
      Correct: [2],
    },
    {
      Question:
        "Which of the following equation does NOT represent a function?",
      Img: "",
      Responses: [
        "y + 2 = x³ + 2",
        "x² = y + 1",
        "x = 2",
        "y - x = -2",
        "y = 1/2x³",
        "-y + 1 = -x",
        "y = 5",
      ],
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
