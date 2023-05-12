import { createSlice } from "@reduxjs/toolkit";
import exam6img29 from "../../../assets/imgs/exam6-question29.jpg";
import exam6img30 from "../../../assets/imgs/exam6-question30.jpg";
import exam6img31 from "../../../assets/imgs/exam6-question31.jpg";
import exam6img32 from "../../../assets/imgs/exam6-question32.jpg";

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
        "What is the probability of throwing dice and getting an odd number?",
      Img: "",
      Responses: ["1/4", "1/3", "1/2", "No answer is correct", "1/5", "3"],
      Correct: [2],
    },
    {
      Question:
        "Five gentlemen have taken off five identical hats in the locker room. What is the probability that took the wrong hat?",
      Img: "",
      Responses: [
        "3/5",
        "1/5",
        "2/7",
        "4/5",
        "2/5",
        "All the answer are incorrect",
      ],
      Correct: [3],
    },
    {
      Question: "Multiply (3y+z²)(3y+z²)",
      Img: "",
      Responses: [
        "6y² + 3yz² - z<sup>4</sup>",
        "3y² + 3yz² - z<sup>4</sup>",
        "6y² + 6yz² - z<sup>4</sup>",
        "9y² + 6yz² + z<sup>4</sup>",
        "6y² + 6yz² - 2z<sup>4</sup>",
        "No answer is correct",
      ],
      Correct: [3],
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
      Correct: [4],
    },
    {
      Question: "Solve: 8k - 12 = 4k - 8",
      Img: "",
      Responses: ["k = 13", "k = 6", "k = 3", "k = 1", "k = 8", "k = 7"],
      Correct: [3],
    },
    {
      Question: "What is a Surface Area of a Cube that has a side of 12 m?",
      Img: "",
      Responses: [
        "36 m²",
        "64 m²",
        "164 m²",
        "564 m²",
        "864 m²",
        "No answer is correct",
      ],
      Correct: [4],
    },
    {
      Question:
        "What is the difference in the formula of the Cone and Cylinder?",
      Img: "",
      Responses: [
        "No answer is correct",
        "The formulas are the same",
        "The cone is divided by 3 and cylinder no",
        "The cylinder is divided by 3 and cone no",
        "One has radio square and the other not",
      ],
      Correct: [2],
    },
    {
      Question: "What is the y-intercept of the following line: 2y = 2x - 4",
      Img: "",
      Responses: ["2", "1", "4", "-2", "3", "-3", "1/2"],
      Correct: [3],
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
      Question:
        "If a rectangle has a width of 2 ft and a length of 3 ft. What is the area in square inches?",
      Img: "",
      Responses: ["1564 in²", "164 in", "514 in²", "72 in²", "864²"],
      Correct: [4],
    },
    {
      Question: "What is Permutation (8, 2)?",
      Img: "",
      Responses: ["120", "24", "15", "56", "8", "10"],
      Correct: [3],
    },
    {
      Question:
        "A small business owner wants to apply for a loan to expand the business. The business has an average monthly revenue of $50,000 and an average monthly cost of $35,000. The bank requires the business to have a debt-to-equity ratio of no more than 1.5. If the business owner has $100,000 in personal savings and wants to borrow as much money as possible, how much can the business owner borrow?",
      Img: "",
      Responses: ["$37,500", "$50,000", "$75,000", "$100,000"],
      Correct: [2],
    },
    {
      Question: "Multiply 1/4 * 5/7 =",
      Img: "",
      Responses: ["3/7", "1/7", "2/5", "5/7", "5/28", "7/25"],
      Correct: [4],
    },
    {
      Question: "What is half plus half of half?",
      Img: "",
      Responses: ["1/4", "1/5", "1/2", "3/4", "1/8", "3/8"],
      Correct: [3],
    },
    {
      Question: "What is 7.5ft in inches?",
      Img: "",
      Responses: ["86 in", "120 in", "96 in", "72 in", "120 in", "90 in"],
      Correct: [5],
    },
    {
      Question:
        "A company is planning to launch a new product line. The fixed costs for developing and launching the product are $100,000, and the variable costs for producing each unit are $10. The selling price for each unit is $20. How many units does the company need to sell to break even?",
      Img: "",
      Responses: [
        "5,000 units",
        "10,000 units",
        "15,000 units",
        "None of the above",
      ],
      Correct: [1],
    },
    {
      Question:
        "What is the length of CD in a circle with center O, where the line segment AB intersects the circle at points C and D, and AC = 4 and BD = 6?",
      Img: "",
      Responses: ["2", "3", "4", "5", "1"],
      Correct: [0],
    },
    {
      Question: "Solve for K; 7k - 4 = 73",
      Img: "",
      Responses: ["k = 13", "k = 15", "k = 10", "k = 11", "k = 8", "k = 3"],
      Correct: [3],
    },
    {
      Question:
        "A company is producing t-shirts and sweatshirts to sell at a local fair. The company can produce a maximum of 500 shirts, and each T-shirt costs $8 to produce while each sweatshirt costs $12 to produce. If the company wants to produce at least 100 T-shirts, how many sweatshirts can they produce while staying within their budget of $4000?",
      Img: "",
      Responses: [
        "At most 250 sweatshirts",
        "At most 375 sweatshirts",
        "At most 400 sweatshirts",
        "None of the above",
      ],
      Correct: [1],
    },
    {
      Question: "-5² + (-5)² + 4²",
      Img: "",
      Responses: ["-25", "25", "-5", "5", "1", "0", "16"],
      Correct: [6],
    },
    {
      Question: "Solve: 3(5m - 1 ) = 12",
      Img: "",
      Responses: ["m = 2", "3", "m = 4", "m = 1", "m = 5", "0"],
      Correct: [3],
    },
    {
      Question:
        "A startup company has developed a new product and is considering two different pricing strategies. Strategy A involves pricing the product at $50 and selling 1000 units, while strategy B involves pricing the product at $60 and selling 800 units. The company's fixed costs are $30,000, and its variable costs are $20 per unit. Which pricing strategy should the company choose to maximize its profit?",
      Img: "",
      Responses: [
        "Strategy A",
        "Strategy B",
        "Both strategies will result in the same profit",
        "Neither strategy will result in a profit",
      ],
      Correct: [1],
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
        "What is the length of CD in a circle with center O, where the line segment AB intersects the circle at points C and D, and AC = 4 and BD = 6?",
      Img: "",
      Responses: ["2", "3", "4", "5", "1"],
      Correct: [0],
    },
    {
      Question:
        "Johnny wrote a random natural number from 1 to 20. Determine the probability that he wrote an even number",
      Img: "",
      Responses: ["1/5", "1/4", "1/3", "1/2", "1/6", "No answer is correct"],
      Correct: [3],
    },
    {
      Question: "5 is 100% of what Number?",
      Img: "",
      Responses: ["100", "1", "5", "20", "4"],
      Correct: [2],
    },
    {
      Question:
        "There are 20 products in the box, of which 3 are faulty. Find the probability of pulling out a non-faulty product",
      Img: "",
      Responses: ["0", "1/10", "2/15", "1/20", "1/9", "17/20"],
      Correct: [5],
    },
    {
      Question:
        "At a certain school, 70 out of 180 Year 2 students walk to school, while 90 out of 210 Year 6 students walk to school. What is the percentage difference in the number of Year 6 students who walk to school compared to Year 2 students who walk to school?",
      Img: exam6img29,
      Responses: ["3%", "4%", "5%", "6%", "2%", "8%"],
      Correct: [1],
    },
    {
      Question:
        "A sports club spends $100,000 on different sports in a year. The pie chart representing this expenditure shows that hockey accounts for 27.78% of the total amount spent. What is the total amount spent on sports other than hockey?",
      Img: exam6img30,
      Responses: [
        "$22,220",
        "$72,220",
        "$77,780",
        "$100,000",
        "$22,780",
        "$77,220",
      ],
      Correct: [1],
    },
    {
      Question: "Which of the following Graph does NOT represent a function?",
      Img: exam6img31,
      Responses: ["a", "b", "c", "d"],
      Correct: [3],
    },
    {
      Question: "Find the perimeter of the following triangle.",
      Img: exam6img32,
      Responses: [
        "16.8 u",
        "27.5 u",
        "35.7 u",
        "33.6 u",
        "24.2 u",
        "The answer is not in the options",
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
