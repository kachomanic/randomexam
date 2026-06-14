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

  const orderArray = [];

  for (let i = 0; i < 40; i++) {
    orderArray.push(parseInt(getRandomNumber(), 10));
  }

  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    // 1
    {
      Question: "Inequalities: Solve 3x > 6",
      Img: "",
      Responses: ["x > 2", "x < 2", "x > 4", "x > 6"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 2
    {
      Question:
        "A movie theater charges $8 per ticket. If Jake has $40, how many tickets can he buy?",
      Img: "",
      Responses: ["4", "6", "7", "5"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 3
    {
      Question: "Solve the inequality: 3x + 5 > 11.",
      Img: "",
      Responses: ["x < 2", "x < 3", "x > 2", "x > 3"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 4
    {
      Question:
        "Tina wants to buy lunch every day for a week. If she can spend no more than $35 for the week and each lunch costs $5, how many lunches can she buy?",
      Img: "",
      Responses: ["5", "6", "8", "7"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 5
    {
      Question: "What is the solution to 16x + 7 < 55?",
      Img: "",
      Responses: ["x < 3", "x = 3", "x > 3", "x ≤ 3"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 6
    {
      Question:
        "Emily wants to buy books that cost $12 each. She has a budget of $60. How many books can she buy?",
      Img: "",
      Responses: ["4", "6", "7", "5"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 7
    {
      Question: "Solve for x: 15x - 9 ≤ 36.",
      Img: "",
      Responses: ["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 8
    {
      Question:
        "Sarah is buying snacks for a party. Each snack costs $3. If she wants to spend no more than $24, how many snacks can she buy?",
      Img: "",
      Responses: ["6", "7", "9", "8"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 9
    {
      Question: "If 11x - 8 ≤ 33, what is x?",
      Img: "",
      Responses: [
        "x < 3.727",
        "x ≤ 3.727",
        "x ≥ 3.727",
        "x > 3.727",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 10
    {
      Question:
        "Lisa is organizing a party and has a budget of $50 for decorations. If each decoration costs $10, how many decorations can she buy?",
      Img: "",
      Responses: ["4", "6", "7", "5"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 11
    {
      Question: "Solve the inequality: 8x + 4 ≥ 28.",
      Img: "",
      Responses: ["x ≤ 3", "x < 3", "x > 4", "x ≥ 3"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 12
    {
      Question: "What is the solution to 9x - 6 < 21?",
      Img: "",
      Responses: ["x ≤ 3", "x < 3", "x = 3", "x > 3"],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 13
    {
      Question:
        "James is baking and needs between 40 and 60 grams of sugar. If he uses a spoon that holds 5 grams, what is the number of spoons he needs to use at least?",
      Img: "",
      Responses: ["13", "12", "8", "10"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 14
    {
      Question: "Solve for x: 5x - 3 ≥ 2x + 9.",
      Img: "",
      Responses: ["x < 4", "x > 4", "x ≤ 4", "x ≥ 4"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 15
    {
      Question:
        "Mark has saved $200 for a weekend trip. If he plans to spend $50 per day, how many days can he afford to travel?",
      Img: "",
      Responses: ["2", "3", "5", "4"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 16
    {
      Question: "If 4x + 7 < 19, what is the value of x?",
      Img: "",
      Responses: ["x < 3", "x = 3", "x ≤ 3", "x > 3"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 17
    {
      Question:
        "If Tom has $80, how many concert tickets can he buy if each ticket costs $20?",
      Img: "",
      Responses: ["3", "5", "6", "4"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 18
    {
      Question: "What is the solution to the inequality: 2x - 4 ≤ 8?",
      Img: "",
      Responses: ["x ≤ 6", "x > 6", "x < 6", "x ≥ 6"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 19
    {
      Question:
        "Maria is grocery shopping and wants to spend no more than $30 on fruits. If each fruit costs $3, how many fruits can she buy?",
      Img: "",
      Responses: ["8", "9", "11", "10"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 20
    {
      Question:
        "James wants to attend fitness classes that cost $15 each. If he has $75 to spend, how many classes can he attend?",
      Img: "",
      Responses: ["4", "6", "5", "7"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 21
    {
      Question:
        "At a book fair, each book costs $12. If Alex wants to spend no more than $60, how many books can he buy?",
      Img: "",
      Responses: ["4", "6", "7", "5"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 22
    {
      Question:
        "David has $80 and wants to buy stamps costing $2 each. However, he wants to leave with at least $10. How many stamps can David buy?",
      Img: "",
      Responses: ["39", "36", "35", "37"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 23
    {
      Question:
        "A car rental agency charges a $50 fee plus $0.25 per mile driven. If Mara wants to spend no more than $100, how many miles can she drive?",
      Img: "",
      Responses: ["280", "200", "250", "300"],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 24
    {
      Question:
        "Tom must have at least $200 in his account by next month. He currently requires $150 more. If he saves $25 each week, how many weeks will it take?",
      Img: "",
      Responses: ["6", "7", "5", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 25
    {
      Question:
        "Mary wants to purchase books costing $15 each. She plans to spend no more than $100. What is the maximum number of books she can buy?",
      Img: "",
      Responses: ["6", "5", "8", "7"],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 26
    {
      Question:
        "A store sells tickets to a concert for $15. John wants to spend less than $100 on tickets. What is the maximum number of tickets he can buy?",
      Img: "",
      Responses: ["8", "6", "7", "5"],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 27
    {
      Question:
        "A company requires at least 50 units of a product, but no more than 100 units. If each unit costs $3, what is the least amount it will cost?",
      Img: "",
      Responses: ["$600", "$450", "$300", "$150"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 28
    {
      Question:
        "Sarah has $30 and wants to buy novels that each cost $6. How many novels can she buy if she wants at least $6 left over?",
      Img: "",
      Responses: ["6", "5", "4", "3"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 29
    {
      Question:
        "If John has less than twice as many apples as Peter, and Peter has at least 2 apples, what are the maximum apples John can have?",
      Img: "",
      Responses: ["6 apples", "5 apples", "3 apples", "4 apples"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 30
    {
      Question:
        "A machine can produce up to 50 items per hour, but it needs at least 3 hours to reach optimal speed. What is the minimum number of items it can produce at optimal speed in 4 hours?",
      Img: "",
      Responses: ["200 items", "100 items", "150 items", "50 items"],
      Correct: [3],
      Verse: "",
      List: "",
    },

    // 31
    {
      Question:
        "A store sells notebooks for $3 each. If Hannah has at least twice as much money as Sam, and Sam has $20, how many notebooks at most can Hannah buy?",
      Img: "",
      Responses: [
        "13 notebooks",
        "10 notebooks",
        "5 notebooks",
        "6 notebooks",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 32
    {
      Question:
        "A gym membership costs between $50 and $100 per month, exclusive. Which inequality represents the possible cost, c?",
      Img: "",
      Responses: ["c > 100", "50 ≤ c ≤ 100", "50 < c < 100", "c < 50"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 33
    {
      Question:
        "Maria needs more than 10 liters of paint but less than 20 liters for her project. What double inequality represents this situation?",
      Img: "",
      Responses: [
        "10 < L < 20",
        "10 ≤ L ≤ 20",
        "L ≥ 20",
        "20 < L ≤ 10",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },

    // 34
    {
      Question:
        "A new smartphone costs more than $300 and no more than $450 in some stores. What is the inequality representing its possible price, p?",
      Img: "",
      Responses: [
        "300 < p < 450",
        "p ≤ 300",
        "300 < p ≤ 450",
        "p ≥ 450",
      ],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 35
    {
      Question:
        "A number line shows a point at 2 and another at 6, with a shaded region between them. What is the inequality for the numbers in the shaded region?",
      Img: "",
      Responses: ["x ≥ 6", "x ≤ 2", "2 ≤ x ≤ 6", "2 < x < 6"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 36
    {
      Question:
        "Peter is saving money for a new laptop that costs $1,000. He already has $250 saved and plans to save the same amount each week. He wants to reach at least $1,000. Which inequality represents the number of weeks (w) he needs to save if he saves $75 per week?",
      Img: "",
      Responses: [
        "250 + 75w ≤ 1000",
        "250 + 75w ≥ 1000",
        "250 + 75w = 1000",
        "75w ≥ 1000",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 37
    {
      Question:
        "A driver must travel 195 miles in no more than 3 hours to arrive on time. Let s represent the average speed. Which inequality correctly represents this situation?",
      Img: "",
      Responses: ["3s ≥ 195", "3s ≤ 195", "s ≥ 65", "s ≤ 65"],
      Correct: [2],
      Verse: "",
      List: "",
    },

    // 38
    {
      Question:
        "A student must study at least 15 hours over a week to prepare for an exam. They have already studied 4 hours and plan to study the same number of hours each day for the next d days. However, they can study no more than 3 hours per day. Which system of inequalities best represents this situation?",
      Img: "",
      Responses: [
        "4 + d ≥ 15 and d ≤ 3",
        "4 + 3d ≥ 15 and d ≤ 3",
        "4 + 3d ≥ 15 and d ≥ 3",
        "4 + xd ≥ 15 and x ≤ 3",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 39
    {
      Question:
        "Shopping Budget (Intermediate): Maria has a $120 budget for buying clothes. She has already spent $35 on a shirt and wants to buy several pairs of socks that cost $8 each. She does not want to exceed her budget. Which inequality represents this situation?",
      Img: "",
      Responses: [
        "35 + 8x ≥ 120",
        "35 + 8x ≤ 120",
        "8x ≤ 120",
        "35 + 8x = 120",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },

    // 40
    {
      Question:
        "Exercise Plan (Intermediate): A fitness app recommends that you run no more than 20 miles per week. You have already run 6 miles and plan to run the same distance each day for the next d days. Each run is 3 miles. Which inequality models this situation?",
      Img: "",
      Responses: [
        "6 + 3d ≥ 20",
        "6 + 3d ≤ 20",
        "3d ≤ 20",
        "6 + 3d + 20",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
  ];

  // Shuffle the array and include all 40 questions.
  const shuffledExams = [...exams].sort(() => Math.random() - 0.5);

  dispatch(setExams(shuffledExams));
};
