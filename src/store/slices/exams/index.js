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
      getRandomNumber.remaining = Array.from(Array(40).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 25; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "A bookstore offers a 25% discount on a book that originally cost $32. What is the sale price of the book?",
      Img: "",
      Responses: ["$24", "$30", "$26", "$22", "$28"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The school’s student enrollment increased from 400 to 500 students. What was the percentage increase in enrollment?",
      Img: "",
      Responses: ["25%", "20%", "18%", "15%", "30%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A jacket is marked down by 15% and is now priced at $85. What was the original price of the jacket?",
      Img: "",
      Responses: ["$100", "$110", "$90", "$85", "$120"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A car's price decreased by 12% and is now $22,000. What was the original price of the car?",
      Img: "",
      Responses: ["$25,000", "$23,000", "$24,000", "$26,000", "$27,000"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A factory produced 1,200 units last year. This year, production increased by 18%. How many units were produced this year?",
      Img: "",
      Responses: [
        "1,416 units",
        "1,316 units",
        "1,446 units",
        "1,266 units",
        "1,265 units",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Sarah spent 60% of her monthly salary of $3,500 on rent. How much did she spend on other expenses than rent?",
      Img: "",
      Responses: ["$1,400", "$1,550", "$1,350", "$1,600", "$2,100"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The restaurant’s bill was $70 before tax. With a 10% tip, how much was the total bill?",
      Img: "",
      Responses: ["$77", "$87", "$75", "$82", "$79"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A website’s traffic increased from 2,500 visitors to 3,750 visitors in a month. What is the percentage increase in traffic?",
      Img: "",
      Responses: ["40%", "45%", "50%", "35%"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A fitness class has 24 students, and 25% of them are beginners. How many non-beginners are in the class?",
      Img: "",
      Responses: ["18", "16", "6", "20", "26"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 12% of 150?",
      Img: "",
      Responses: ["18", "16", "17", "15", "14"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 75% of 120?",
      Img: "",
      Responses: ["90", "85", "80", "88", "82"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 20% of 20?",
      Img: "",
      Responses: ["4", "3", "5", "7", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 15% of 90?",
      Img: "",
      Responses: ["13.5", "15", "14.5", "13.25", "13.75"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 5% of 80?",
      Img: "",
      Responses: ["4", "6", "8", "7", "5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A shirt costs $45 after a 20% discount. What was the original price?",
      Img: "",
      Responses: ["$56.25", "$52.75", "$55.75", "$54.25", "$53.75"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A car's value decreased by 30% and is now worth $14,000. What was its original value?",
      Img: "",
      Responses: ["$20,000", "$22,050", "$25,000", "$20,500", "$14,000"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "If a student scored 85% on an exam and got 51 questions correct, how many questions were on the exam?",
      Img: "",
      Responses: ["60", "65", "64", "62"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A stock's value increased from $80 to $100. What was the percentage increase?",
      Img: "",
      Responses: ["25%", "23%", "28%", "26%", "80%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A recipe calls for 30% more sugar than originally. If the original was 200 grams, how much sugar is used now?",
      Img: "",
      Responses: [
        "260 grams",
        "280 grams",
        "275 grams",
        "270 grams",
        "200 grams",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A house was worth $250,000 and appreciated 8% over a year. What is its new value?",
      Img: "",
      Responses: ["$270,000", "$260,000", "$280,000", "$290,000", "$250,000"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A company increased its production by 18% and now produces 5,276 units. What was the original production?",
      Img: "",
      Responses: [
        "4,472 units",
        "4,374 units",
        "5,372 units",
        "4,482 units",
        "4,462 units",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A population density of 1,500 people in a 3 square mile area equals how many persons per square mile?",
      Img: "",
      Responses: ["400", "500", "600", "300", "650"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "If you deposit $1,000 in a savings account with 4% simple interest for 2 years, how much money will you have at the end?",
      Img: "",
      Responses: ["$1,080", "$1,040", "$1,060", "$1,090", "$1,100"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "In a scale drawing where 1 inch = 10 feet, how many inches represent 45 feet?",
      Img: "",
      Responses: ["4.5", "55", "3.5", "44", "10"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "If a product costs $85 and has a markup of 35%, what is the selling price?",
      Img: "",
      Responses: ["$114.75", "$112.75", "$110.75", "$116.75", "$112.25"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A store is having a clearance sale. A jacket priced at $80 is marked down 30%, then another 20%. What is the final price?",
      Img: "",
      Responses: ["$44.80", "$40.00", "$48.00", "$52.80", "$42.88"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A car salesperson earns a 5% commission on each sale. If they sell a car for $28,500, what is their commission?",
      Img: "",
      Responses: ["$1,425", "$1,525", "$1,325", "$1,225", "$1,245"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A restaurant bill is $85. With an 18% tip and 8.25% tax, what is the total amount?",
      Img: "",
      Responses: ["$107.31", "$115.82", "$117.01", "$120.53", "$105.42"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "An electronics store buys tablets for $180 each and marks them up by 45%. During a sale, 20% off. What is the final price?",
      Img: "",
      Responses: ["$231.20", "$208.80", "$216.00", "$261.00", "$205.25"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Sarah invested $5000 at 4.5% simple interest per year. How much interest after 2 years?",
      Img: "",
      Responses: ["$225", "$450", "$475", "$500", "$900"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question: "If 72 is 60% of a number, what is the original number?",
      Img: "",
      Responses: ["120", "130", "760", "267", "110"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A business’s revenue increased from $500,000 to $600,000. What is the percentage change?",
      Img: "",
      Responses: ["20%", "25%", "30%", "10%", "100%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The price of a laptop dropped from $1,250 to $1,000. What was the percentage decrease?",
      Img: "",
      Responses: ["20%", "25%", "30%", "22.5%", "18%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A pair of shoes cost $120 after a 25% discount. What was the original price?",
      Img: "",
      Responses: ["$160", "$150", "$130", "$145", "$140"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "Find 40% of 30% of 1,000.",
      Img: "",
      Responses: ["120", "150", "90", "70", "700"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "Find 200% of 50% of 10% of 100.",
      Img: "",
      Responses: ["10", "50", "15", "20", "100"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "Find 10% of 20% of 30% of 500.",
      Img: "",
      Responses: ["3", "20", "10", "50", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A store bought a product for $60 and sold it for $75. What is the percentage profit?",
      Img: "",
      Responses: ["25%", "30%", "60%", "80%", "95%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 75% of 4/5?",
      Img: "",
      Responses: ["3/5", "2/5", "3/2", "2/5", "1/3"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "What is 7/25 expressed as a percentage?",
      Img: "",
      Responses: ["28%", "25%", "7%", "33%", "48%"],
      Correct: [0],
      Verse: "",
      List: "",
    },
  ];

  // Shuffle the array and take only 25 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 25);

  dispatch(setExams(selectedExams));
};
