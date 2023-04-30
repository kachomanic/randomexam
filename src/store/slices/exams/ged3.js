import { createSlice } from "@reduxjs/toolkit";
import exam3img12 from "../../../assets/imgs/exam3-question12.jpg";
import exam3img26 from "../../../assets/imgs/exam3-question26.jpg";

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
      Question:
        "Peter wants an average of 90 points in their 4 subjects, he already has 3 of the grades of 85, 92 and 88. What would he need to get in the last Test to average 90 points?",
      Img: "",
      Responses: [
        "89",
        "90",
        "93",
        "95",
        "Is impossible to find the answer with the information provided.",
        "91",
      ],
      Correct: [3],
    },
    {
      Question:
        "In a dealer a car costs $25,000 at 8% off. What is the price of the car after discount?",
      Img: "",
      Responses: ["$25,000", "$22,000", "$21,000", "$23,000", "$24,000"],
      Correct: [3],
    },
    {
      Question: "Find the Value of 2m if 3(m + 5) - 4 = 23",
      Img: "",
      Responses: ["-4", "5", "8", "2", "9", "-5"],
      Correct: [2],
    },
    {
      Question:
        "John has in his bank account $40,000 and he is planning to make 3 different investments. 1/5 of the money will go to the stock market, 1/4 of the total will be spend to sell online and the rest in real estate. How much money Does John will invest in Real Estate? ",
      Img: "",
      Responses: [
        "$7,500",
        "$6,500",
        "$6,000",
        "$22,000",
        "$21,500",
        "$13,800",
      ],
      Correct: [3],
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
        "If we add Combination (7,7) with Permutation (7,7) what is the answer?",
      Img: "",
      Responses: ["25", "721", "5,040", "5,041", "1025", "1024"],
      Correct: [3],
    },
    {
      Question: "What is half of 0.025?",
      Img: "",
      Responses: ["1/8", "0.1575", "0.755", "0.0125", "1/0.75", "0.00755"],
      Correct: [3],
    },
    {
      Question: "What is Combination (5, 4)?",
      Img: "",
      Responses: ["24", "6", "2", "5", "10", "120", "1", "0"],
      Correct: [3],
    },
    {
      Question:
        "What is the area of a parallelogram with base 4ft and high 100 in",
      Img: "",
      Responses: ["4800 ft²", "2400 ft²", "100 ft²", "4800 in²", "4800 in"],
      Correct: [3],
    },
    {
      Question:
        "A circular park has a diameter of 3 miles, and you want to jog around the park. How many miles do you complete in 4 laps? ",
      Img: "",
      Responses: [
        "9.68 mi²",
        "37.68 mi",
        "9.68 mi",
        "37.68 mi²",
        "25.68 mi",
        "17.68 in",
        "27.68 in",
      ],
      Correct: [1],
    },
    {
      Question: "Write the following equation in Standard Form: y = 6x + 2/3",
      Img: "",
      Responses: [
        "y - 2/3 = 6x",
        "3y - 18x = 2",
        "- 6x - 2/3 = -y",
        "No answer is correct",
        "There is no standard form when you work with Fractions",
      ],
      Correct: [1],
    },
    {
      Question:
        "Which of the following equation is NOT the equation of the line in the Graph",
      Img: exam3img12,
      Responses: [
        "2y + 4x = -1",
        "y = - 2x -1",
        "2y = - 4x -1",
        "y = - 2x -1/2",
        "2y + 1 = - 4x",
      ],
      Correct: [1],
    },
    {
      Question: "Which of the following Graph has slope undefine? ",
      Img: "",
      Responses: ["y = x", "y = 4", "y = -4x", "x = -2", "y = -x", "y = -1/2"],
      Correct: [3],
    },
    {
      Question:
        "How do you model the process of buying a car when you pay a $3,000 down payment and a monthly payment of $350. Which number represents the slope and which the y-intercept?",
      Img: "",
      Responses: [
        "$3,000 represents the slope but $350 is not needed in this case",
        "$350 represents the slope and $3,000 the y-intercept",
        "$3,000 represents the slope and $350 the y-intercept",
        "$350 represents the slope but you cannot find the y intercept",
        "The slope and Y-intercept is to model linear equations in coordinate plane NOT in finance",
      ],
      Correct: [2],
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
      Question: "Find the Value of -3P. 3(P + 5) - 4 = 23",
      Img: "",
      Responses: ["-4", "5", "-12", "2", "9", "-5"],
      Correct: [2],
    },
    {
      Question:
        "Find the answer: (3g<sup>4</sup> + 3g² - 8 + 19g)+ (8g² - 3g<sup>4</sup> - 17)",
      Img: "",
      Responses: [
        "6g<sup>4</sup> + 11g² + 25g - 19",
        "6g<sup>4</sup> + 11g² + 19g + 25",
        "3g<sup>4</sup> + 11g² + 19g - 25",
        "6g<sup>4</sup> + 11g² + 19g - 25",
        "6g<sup>4</sup> - 11g² + 19g - 25",
        "No answers is correct",
      ],
      Correct: [5],
    },
    {
      Question: "Divide (48m - 30n³ + 16t²) / 4",
      Img: "",
      Responses: [
        "12m - 15/2n³ + 5t²",
        "12m - 15/2n² + 4t²",
        "12m - 13/2n³ + 4t²",
        "10m - 15/2n³ + 4t²",
        "12m - 15/2n³ + 4t²",
      ],
      Correct: [4],
    },
    {
      Question: "4,500 is 25% of What number?",
      Img: "",
      Responses: ["13,500", "20,000", "18,500", "19,000", "17,000", "18,000"],
      Correct: [5],
    },
    {
      Question:
        "Find the probability of selecting a black marker if you have 8 black, 2 red and 5 blue",
      Img: "",
      Responses: ["7/15", "8/20", "8/8", "8/15", "8/12"],
      Correct: [3],
    },
    {
      Question: "Find the answer: (h² + 3h - 5) - (7h - 3h² -12)",
      Img: "",
      Responses: [
        "4h² + 4h + 7",
        "4h² - 4h - 17",
        "3h² - 4h + 7",
        "4h² - 4h + 7",
        "7h² - 4h + 12",
      ],
      Correct: [3],
    },
    {
      Question: "What is the unit that we use to represent volume?",
      Img: "",
      Responses: [
        "cube units",
        "square units",
        "linear units",
        "none of these",
        "all of these",
      ],
      Correct: [0],
    },
    {
      Question:
        "A Gym charges one time enrolment fee of $50 plus $12 monthly fee after that. What equation best model the information describes? ",
      Img: "",
      Responses: [
        "y = 50x",
        "y = 12x",
        "y = 12x + 50",
        "y = 50x + 12",
        "None is correct",
      ],
      Correct: [2],
    },
    {
      Question:
        "Which of the following equations has y-intercept equal to zero?",
      Img: "",
      Responses: [
        "-y = 1/2 x - 1 ",
        "y = x - 1",
        "y = 1/2 x + 2",
        "y = 1/2 x -7",
        "y -2 = 1/2 x - 2",
      ],
      Correct: [4],
    },
    {
      Question:
        "What is the area of a triangle that has base 5 and height is double the base?",
      Img: "",
      Responses: ["15", "20", "50", "25", "40", "35"],
      Correct: [3],
    },
    {
      Question:
        "What is the equation of the line from the graph showing in the picture",
      Img: exam3img26,
      Responses: [
        "y = 3x + 2",
        "y = -2x + 1",
        "y = 2x + 2",
        "y = 2x + 1",
        "y = 5x + 2",
        "y = 4x - 1",
        "-2y = 2x + 2",
      ],
      Correct: [3],
    },
    {
      Question:
        "Do I find the perimeter of the square with the same formula as a rectangle",
      Img: "",
      Responses: [
        "Maybe if they have the same perimeter",
        "You can calculate both using the formula of the rectangle",
        "The formula of the square you can use for a rectangle",
      ],
      Correct: [1],
    },
    {
      Question: "What is the perimeter of an square that has a side of 25m?",
      Img: "",
      Responses: ["90", "75", "40", "50", "100", "75"],
      Correct: [4],
    },
    {
      Question:
        "In a lock of 3 character's combination (2 of them are numbers and one is a letter) there are 10 numbers to choose from (0,1,2,3,4,5,6,7,8,9) and 24 letters. How many different options for a code do we have if: Numbers cannot be repeated",
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
        "What is the mode from the following set of Data? 20, 10, 10, 15, 25, 20, 30, 10",
      Img: "",
      Responses: [
        "mode = 10",
        "mode = 15",
        "mode = 20",
        "mode = 25",
        "mode = 30",
      ],
      Correct: [4],
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
