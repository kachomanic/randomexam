import { createSlice } from "@reduxjs/toolkit";
import exam1img1 from "../../../assets/imgs/question-1.jpg";
import exam1img2 from "../../../assets/imgs/question-2.jpg";
import exam1img27 from "../../../assets/imgs/question-27.jpg";

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
        "At a certain school, 70 out of 180 Year 2 students walk to school, while 90 out of 210 Year 6 students walk to school. What is the percentage difference in the number of Year 6 students who walk to school compared to Year 2 students who walk to school?",
      Img: exam1img1,
      Responses: ["3%", "4%", "5%", "6%", "2%", "8%"],
      Correct: "0",
    },
    {
      Question:
        "If the total 2013 cold cereal sales for the seven counties assessed were $180,000, what percent of these sales was purchased Trinity County? Disregard the percentage symbol when choosing your answer.",
      Img: exam1img2,
      Responses: ["20", "25", "10", "15", "12", "21"],
      Correct: "3",
    },
    {
      Question:
        "Do we use the same units to represent Surface Areas of three-dimensional figures and Areas?",
      Img: "",
      Responses: ["Yes", "No", "Maybe", "Only when the answer is the same"],
      Correct: "0",
    },
    {
      Question: "Write the following equation in Standard Form: y = 6x + 2/3",
      Img: "",
      Responses: [
        "y - 2/3 = 6x",
        "3y - 18x = 2",
        "-6x - 2/3 = -y",
        "No answer is correct",
        "There is no standard form when you work with Fractions.",
      ],
      Correct: "1",
    },
    {
      Question:
        "Do I find the perimeter of the square with the same formula as a rectangle?",
      Img: "",
      Responses: [
        "Maybe if they have the same perimeter.",
        "You can calculate both using the formula of the rectangle.",
        "The formula of the square you can use for a rectangle.",
        "Squares and Rectangles always are the same formulas.",
      ],
      Correct: "1",
    },
    {
      Question:
        "What is the area of the parallelogram with base = 12ft and height = 9ft",
      Img: "",
      Responses: ["108 ft", "96 ft", "108 ft²", "96 ft²", "90 ft²", "21 ft²"],
      Correct: "2",
    },
    {
      Question: "Convert the following measure: 0.0015 km to cm.",
      Img: "",
      Responses: ["50 cm", "15 cm", "0.15 cm", "150 cm", "50 cm", "1,500 cm"],
      Correct: "3",
    },
    {
      Question: "What is Permutation (8, 2)?",
      Img: "",
      Responses: ["120", "24", "15", "56", "8", "10"],
      Correct: "3",
    },
    {
      Question:
        "John has in his bank account $40,000 and he is planning to make 3 different investments. 1/5 of the money will go to the stock market, 1/4 of the total will be spent to sell online and the rest in real estate. How much money Does John will invest in Real Estate?",
      Img: "",
      Responses: [
        "$7,500",
        "$6,500",
        "$6,000",
        "$22,000",
        "$21,500",
        "$13,800",
      ],
      Correct: "3",
    },
    {
      Question:
        "If a linear equation has a formula y=2x-5. What is the y intercept for that equation?",
      Img: "",
      Responses: ["5", "2", "-5", "2", "7", "-7"],
      Correct: "2",
    },
    {
      Question:
        "Which are the coordinates of the y intercept for the following equation? y + 2 = 3x",
      Img: "",
      Responses: [
        "(0, -2)",
        "(1, -2)",
        "(1, 3)",
        "(0, -3)",
        "(1, 3/2)",
        "(0, -2/3)",
      ],
      Correct: "0",
    },
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
      Correct: "0",
    },
    {
      Question:
        "A recent survey indicates that in a town of 1500 households, 850 had cordless telephones. If a household is randomly selected, find the probability that it has a cordless telephone.",
      Img: "",
      Responses: [
        "17/30",
        "500/1500",
        "1/4",
        "25/32",
        "0.90",
        "4/36",
        "All are incorrect",
      ],
      Correct: "0",
    },
    {
      Question: "Factoring Trinomials 6x² + 15x - 21",
      Img: "",
      Responses: [
        "(x + 7)(3x - 3)",
        "(2x + 7)(3x - 3)",
        "(2x + 7)(3x + 3)",
        "(2x - 7)(3x - 3)",
        "(2x + 3)(3x - 7)",
        "(2x + 3)(3x + 7)",
        "The answer is not there",
      ],
      Correct: "6",
    },
    {
      Question: "Find the answer: -2 + 9 * 3 -10 +3 * (-10) =",
      Img: "",
      Responses: ["4", "-20", "20", "-15", "9", "-10", "18", "16"],
      Correct: "3",
    },
    {
      Question: "What is the unit that we use to represent volume?",
      Img: "",
      Responses: [
        "Cube units",
        "Square units",
        "Linear units",
        "None of these",
        "All of these",
      ],
      Correct: "0",
    },
    {
      Question: "In the following equation y = -2x + 4 the slope is:",
      Img: "",
      Responses: ["Negative", "Positive", "Undefined", "Zero"],
      Correct: "0",
    },
    {
      Question: "Solve for k; 3k + 5 = 17",
      Img: "",
      Responses: ["k = 2", "k = 5", "k = -3", "k = -2", "k = 4"],
      Correct: "4",
    },
    {
      Question: "Divide (48m - 30n³ + 16t²)/4",
      Img: "",
      Responses: [
        "12m - 15/2n³ + 5t²",
        "12m - 15/2n² + 4t²",
        "12m - 13/2n³ + 4t²",
        "10m - 15/2n³ + 4t²",
        "12m - 15/2n³ + 4t²",
      ],
      Correct: "4",
    },
    {
      Question: "Multiply (x + 7)(2x - 8)",
      Img: "",
      Responses: [
        "2x² - 6x + 56",
        "x² + 6x - 56",
        "2x² + 6x + 56",
        "2x² - 6x - 56",
        "2x² + 6x - 56",
        "No answer is correct",
      ],
      Correct: "4",
    },
    {
      Question: "5 is 100% of what Number?",
      Img: "",
      Responses: ["100", "1", "5", "20", "4"],
      Correct: "2",
    },
    {
      Question:
        "At a store we see that shoes are mark dawn15%. If the price of shoes is $160. What is the new price after the discount?",
      Img: "",
      Responses: ["154", "145", "136", "120", "155"],
      Correct: "2",
    },
    {
      Question: "Find the probability of getting a 7 when we role a dice.",
      Img: "",
      Responses: [
        "We can not calculated",
        "Probability is equal to 0",
        "Probability is equal to -1",
        "Probability is equal to 1/6",
        "Probability is equal to 1/5",
        "Probability is equal to 1/4",
        "Probability is equal to 35%",
      ],
      Correct: "1",
    },
    {
      Question:
        "What is the probability of selecting a vowel in a 24 later alphabet?",
      Img: "",
      Responses: ["7/24", "3/24", "4/24", "5/24", "No answer is correct"],
      Correct: "3",
    },
    {
      Question:
        "If a product's revenue is given by the function R(x) = 500x - 0.5x², where x is the number of units sold, what is the maximum revenue that can be generated by the product?",
      Img: "",
      Responses: [
        "$250,000",
        "$500,000",
        "$125,000",
        "None of the above",
        "$420,000",
        "$575,000",
      ],
      Correct: "2",
    },
    {
      Question:
        "A football team has scored 45 goals in 20 matches so far in the league. If they want to achieve an average of 3 goals per match for the remaining 10 matches, how many goals do they need to score in these matches?",
      Img: "",
      Responses: ["15", "20", "25", "30", "13", "22"],
      Correct: "2",
    },
    {
      Question:
        "A sports club spends $100,000 on different sports in a year. The pie chart representing this expenditure shows that hockey accounts for 27.78% of the total amount spent. What is the total amount spent on sports other than hockey?",
      Img: exam1img27,
      Responses: [
        "$22,220",
        "$72,220",
        "$77,780",
        "$100,000",
        "$22,780",
        "$77,220",
      ],
      Correct: "1",
    },
    {
      Question:
        "What is the probability of throwing dice and getting an odd number?",
      Img: "",
      Responses: ["1/4", "1/3", "1/2", "No answer is correct", "1/5", "3"],
      Correct: "2",
    },
    {
      Question: "What is 7.5ft in inches?",
      Img: "",
      Responses: ["86 in", "120 in", "96 in", "72 in", "120 in", "90 in"],
      Correct: "5",
    },
    {
      Question: "Find the Value of 2P. 3(P + 5) - 4 = 23",
      Img: "",
      Responses: ["-4", "5", "8", "2", "9", "-5"],
      Correct: "2",
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
