import { createSlice } from "@reduxjs/toolkit";
import exam3img12 from "../../../assets/imgs/exam3-question12.jpg";
import exam4img25 from "../../../assets/imgs/exam4-question25.jpg";

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
      Question: "Which definition of a mean is more accurate?",
      Img: "",
      Responses: [
        "Is the Average in a set of Data",
        "Mean is adding all the numbers in a set of Data",
        "Mean is dividing the greatest number in a set of Data by 2",
        "Is subtracting the greatest number minus the smallest",
        "Is the number that repeats the most",
      ],
      Correct: [0],
    },
    {
      Question:
        "Joseph borrowed $40,000 at a 7% rate for 3 years. How much will she pay in interest?",
      Img: "",
      Responses: ["$5,100", "$9,200", "$6,400", "$7,600", "$8,400"],
      Correct: [4],
    },
    {
      Question: "2² - 3² + 2<sup>3</sup> -3<sup>3</sup> =",
      Img: "",
      Responses: ["45", "-24", "-27", "36", "-52", "55"],
      Correct: [1],
    },
    {
      Question:
        "Peter buys a pair of pants for $11.25 and 2 T-shirts for $7.35 each and 1 pair of shoes for double the total of one 1 T-shirt and 1 pair of pants. What is the change if he pays with a $100 bill?",
      Img: "",
      Responses: [
        "$5.35 is the change",
        "$1.50",
        "$36.85",
        "$1.15 is the change",
        "The answer is not on the options",
        "$27.60",
      ],
      Correct: [2],
    },
    {
      Question:
        "In a school there are 350 students, 1/5 of them are Christians. From the Christians 1/10 does not go to church every week. How many students go to church every week?",
      Img: "",
      Responses: ["58", "24", "35", "55", "63", "No answer is correct"],
      Correct: [4],
    },
    {
      Question:
        "At a store we see that shoes are made 15% off. If the price of shoes is $160. What is the new price after the discount?",
      Img: "",
      Responses: ["154", "145", "136", "120", "155"],
      Correct: [2],
    },
    {
      Question:
        "What is the sum of Mean, Median, Mode and Range of the following set of Data. 12, 8, 10, 10, 15, 15, 3, 10, 17. (If needed round your answer)",
      Img: "",
      Responses: ["10", "40", "48", "15", "14", "45", "51", "20"],
      Correct: [5],
    },
    {
      Question: "What is Combination (100, 100)?",
      Img: "",
      Responses: [
        "The answer is not presented in the options",
        "100,000",
        "100",
        "10,000",
        "1,000,000",
        "1",
      ],
      Correct: [5],
    },
    {
      Question:
        "In a group of 8 businesspeople they want to select board of director conform by 1 President, 1 Vice-president and 1 Secretary. How many ways can this board of directors be selected?",
      Img: "",
      Responses: ["1024", "5024", "56", "120", "336", "720"],
      Correct: [4],
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
        "-5.24 mi²",
      ],
      Correct: [3],
    },
    {
      Question: "What is the slope of the following line: 2y = 2x - 4",
      Img: "",
      Responses: ["m = 2", "m = 3", "m = 4", "m = 1", "m = -2", "m = -4"],
      Correct: [3],
    },
    {
      Question:
        "What is the y-intercept of the following equation? -4y = 4x - 4",
      Img: "",
      Responses: [
        "b = 4",
        "b = -2",
        "b = 2",
        "b = 3",
        "b = -4",
        "b = 1",
        "b = undefine",
      ],
      Correct: [5],
    },
    {
      Question: "Simplify: m² + 3m - 5 + 7m - 3m²",
      Img: "",
      Responses: [
        "2m² + 10m - 5",
        "-2m² + 10m + 5",
        "-2m² + 10m - 5",
        "-2m² - 10m - 5",
        "2m² + 10m - 10",
        "-2m² + 4m - 5",
      ],
      Correct: [5],
    },
    {
      Question: "Solve: (2x+2) / (2) = 2",
      Img: "",
      Responses: ["1", "4", "2", "8", "5", "-2"],
      Correct: [0],
    },
    {
      Question: "Divide (15x - 25x<sup>3</sup> + 40x²) / 5x",
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
      Question: "Find the Value of M. 3(m + 5) - 4 = 23",
      Img: "",
      Responses: ["-4", "5", "4", "2", "9", "-5"],
      Correct: [2],
    },
    {
      Question:
        "In a dealer a car costs $25,000 at 8% off. What is the price of the car after discount?",
      Img: "",
      Responses: ["$25,000", "$22,000", "$21,000", "$23,000", "$24,000"],
      Correct: [3],
    },
    {
      Question:
        "Out of 200 pairs of shoes 8 pairs are of poor quality. The auditor selects randomly one pairs of the shoes. What is the probability that one is of poor quality?",
      Img: "",
      Responses: [
        "3/98",
        "5/200",
        "3/200",
        "1/25",
        "No answer is correct",
        "3/50",
      ],
      Correct: [3],
    },
    {
      Question: "Find the probability of getting a 7 when we roll a dice.",
      Img: "",
      Responses: [
        "We cannot calculated",
        "Probability is equal to 0",
        "Probability is equal to -1",
        "Probability is equal to 1/6",
        "Probability is equal to 1/5",
        "Probability is equal to 1/4",
        "Probability is equal to 35%",
      ],
      Correct: [3],
    },
    {
      Question:
        "A brand is considering whether to invest in a new project that has an expected return of 12% per year. The initial investment is $100,000, and the brand expects to receive cash flows of $25,000 per year for the first three years, and $35,000 per year for the next two years. If the brand's cost of capital is 10%, what is the net present value (NPV) of the project?",
      Img: "",
      Responses: ["$16,068", "$18,670", "$21,322", "$23,512"],
      Correct: [3],
    },
    {
      Question: "If x + 2y = 5 and 3x - 4y = 7, what is the value of x - y?",
      Img: "",
      Responses: ["-1", "1", "2", "3"],
      Correct: [2],
    },
    {
      Question:
        "If a product's revenue is given by the function R(x) = 500x - 0.5x², where x is the number of units sold, what is the maximum revenue that can be generated by the product?",
      Img: "",
      Responses: ["$250", "$500", "$625", "None of the above"],
      Correct: [2],
    },
    {
      Question:
        "A small business owner wants to apply for a loan to expand the business. The business has an average monthly revenue of $50,000 and an average monthly cost of $35,000. The bank requires the business to have a debt-to-equity ratio of no more than 1.5. If the business owner has $100,000 in personal savings and wants to borrow as much money as possible, how much can the business owner borrow?",
      Img: "",
      Responses: ["$37,500", "$50,000", "$75,000", "$100,000"],
      Correct: [2],
    },
    {
      Question:
        "The annual salaries of the employees working at The Island Resort are listed. What is the average salary and range for these salaries?",
      Img: exam4img25,
      Responses: [
        "$208,385.00, $63,070.00",
        "$26,273.00, $27,270.00",
        "$29,770.00, $27,470.00",
        "$208,385.00, $63,070.00",
        "None of the above",
      ],
      Correct: [2],
    },
    {
      Question:
        "What is the probability of selecting a vowel in a 24 later alphabet?",
      Img: "",
      Responses: ["7/24", "3/24", "4/24", "5/24", "No answer is correct"],
      Correct: [3],
    },
    {
      Question:
        "Mary borrowed $100,000 at a 6% rate for 4 years. How much will she pay in interest?",
      Img: "",
      Responses: ["$25,100", "$24,100", "$24,000", "$50,600", "$16,400"],
      Correct: [2],
    },
    {
      Question: "Simplify: (8m + n² ) - (5m - 2n² ) - 3m + n",
      Img: "",
      Responses: [
        "- 3n² + 2n",
        "3n² + n",
        "8m + 3n² + n",
        "3m + 3n² - n",
        "The answer is not correct",
        "m - 3n² + n",
        "3n² + 2n",
      ],
      Correct: [1],
    },
    {
      Question: "Solve for k; 3k + 5 = 17",
      Img: "",
      Responses: ["k = 2", "k = 5", "k = -3", "k = -2", "k = 4"],
      Correct: [4],
    },
    {
      Question:
        "What is a Surface Area of a Cone that has a radio of 4in and a slang high of 10in?",
      Img: "",
      Responses: ["42.37 pi", "48 pi", "50.25 pi", "64 i", "56 pi"],
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
