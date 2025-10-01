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
      Question: "1. 3x − 5 = 16",
      Img: "",
      Responses: ["7", "9", "8", "5", "1"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "2. ½x + 4 = 10",
      Img: "",
      Responses: ["12", "15", "10", "11", "1/2"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "3. 2(x − 3) + 4 = 10",
      Img: "",
      Responses: ["6", "8", "7", "5", "1"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "4. (3x / 4) − 2 = 4",
      Img: "",
      Responses: ["8", "9", "4", "2", "3/4"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "5. 5x + 7 = 2x + 16",
      Img: "",
      Responses: ["3", "4", "7", "12", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "6. 4(x + 2) − 3 = 17",
      Img: "",
      Responses: ["3", "4", "7", "15", "-2"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "7. (2/3)x + 5 = 11",
      Img: "",
      Responses: ["9", "11", "4", "-4", "-5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "8. 6x − 2 = 3x + 7",
      Img: "",
      Responses: ["3", "12", "7", "6", "2"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "9. 2(x − 1) + 3 = x + 7",
      Img: "",
      Responses: ["6", "3", "7", "2", "-1"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "10. 14x − 6 = −3",
      Img: "",
      Responses: ["3/14", "2/9", "8", "2", "1/2"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "11. Amir bought 3 notebooks and a pen for $19. The pen cost $4. How much did each notebook cost?",
      Img: "",
      Responses: ["$5", "$8", "$12", "$15", "$20"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "12. Lena paid $25 to enter an amusement park and $3 per ride. She spent a total of $40. How many rides did she go on?",
      Img: "",
      Responses: ["5 rides", "8 rides", "3 rides", "4 rides", "7 rides"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "13. Maria buys 2 books and a magazine. Each book costs the same. The magazine costs $6. If she paid $26, how much is one book?",
      Img: "",
      Responses: ["$10", "$12", "$8", "$9", "$15"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "14. A plumber charges a $50 service fee plus $40 per hour. If the total bill was $210, how many hours did the plumber work?",
      Img: "",
      Responses: ["4 hours", "2 hours", "3 hours", "5 hours", "6 hours"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "15. A number is subtracted from 12 and the result is 5. What is the number?",
      Img: "",
      Responses: ["7", "8", "12", "9", "6"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "16. The perimeter of a rectangle is 56 cm. The length is 3 times the width minus 4 cm. What is the width?",
      Img: "",
      Responses: ["8", "12", "5", "7", "11"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "17. An online store charges $8 per item plus a $5 shipping fee. If the total cost was $37, how many items were ordered?",
      Img: "",
      Responses: ["4", "3", "7", "5", "6"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "18. A number divided by 3, then increased by 2 equals 8. What is the number?",
      Img: "",
      Responses: ["18", "12", "15", "17", "16"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "19. After paying a 10% tax and a $15 delivery fee, the total cost of an online order was $132. What was the original price before tax and delivery?",
      Img: "",
      Responses: ["106.367", "105.38", "104.25", "108.677", "117.259"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "20. 20% of what number is 36?",
      Img: "",
      Responses: ["180", "72", "150", "360", "200"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "21. A student saves $20 per week. After how many weeks will they have saved $300?",
      Img: "",
      Responses: ["15 weeks", "12 weeks", "16 weeks", "18 weeks", "20 weeks"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "22. Sarah is planning a birthday celebration and is comparing prices from two different party supply companies. Party Palace charges a base fee of $150 plus $12 per guest, while Celebration Central charges a base fee of $200 plus $10 per guest. At what number of guests both companies would charge the same amount?",
      Img: "",
      Responses: [
        "150 + 12x = 200 − 10x",
        "150x + 12 = 200x + 10",
        "12x + 150 = 10x + 200",
        "12(150) = 10(200)",
        "1250 = 1250",
      ],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "23. In a physics experiment, students found the relationship was linear, with force increasing by 2 Newtons per kg of mass. The initial force needed was 0.5 Newtons. Which equation and interpretation is correct?",
      Img: "",
      Responses: [
        "F = 2m; 2 is force per kg",
        "F = 2m + 0.5; 2 is the rate, 0.5 is initial force",
        "F = 0.5m + 2; 0.5 is rate, 2 is initial force",
        "F = m + 2.5; 2.5 is total force",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "24. The cost of renting a moving truck is $45 for the first day plus $25 per additional day. Which equation represents the total cost (C) for n days?",
      Img: "",
      Responses: [
        "C = 25n + 45",
        "C = 45n + 25",
        "C = 70n",
        "C = 45 + 25(n − 1)",
        "C = 70n − 25",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "25. A student saves $23 per week with a starting amount of $145. After how many weeks will he have saved $536?",
      Img: "",
      Responses: ["12 weeks", "15 weeks", "16 weeks", "17 weeks", "26 weeks"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "26. Two gyms: Super Fit charges $60 + $25/month. Power House charges $30 + $30/month. What equation represents when both cost the same and what is that amount?",
      Img: "",
      Responses: [
        "30 + 25m = 60m + 30; $200",
        "60 + 25m = 30m + 60; $220",
        "60 + 30m = 25m + 30; $230",
        "60 + 25m = 30m + 30; $210",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "27. Two car rental companies: Speedy Rentals charges $80 + $0.20/mile, AP Drive charges $50 + $0.30/mile. Which is cheaper for 200 miles and by how much?",
      Img: "",
      Responses: [
        "AP cheaper by $10",
        "AP cheaper by $20",
        "AP cheaper by $30",
        "Speedy cheaper by $10",
        "Speedy cheaper by $20",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "28. Peter is saving money for a trip. He already has $120 and plans to save $25 per week. How many weeks to save $395?",
      Img: "",
      Responses: ["11", "12", "13", "10", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question: "29. Solve for the variable: 5(x + 2) = 3(x − 4) + 2x",
      Img: "",
      Responses: ["No Solution", "5", "4", "1", "-2"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "30. Sarah has twice as many apples as James. Together, they have 36 apples. How many apples does James have?",
      Img: "",
      Responses: ["12", "11", "13", "15", "8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "31. Linda is 4 years older than Mike. Their ages sum to 28. How old is each?",
      Img: "",
      Responses: [
        "Mike 12, Linda 16",
        "Mike 10, Linda 18",
        "Mike 14, Linda 14",
        "Mike 13, Linda 15",
        "Mike 17, Linda 11",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "32. Last year, Emma was ten times as old as her son. Now, she is only seven times as old. How old is Emma now?",
      Img: "",
      Responses: ["Emma 21", "Emma 23", "Emma 25", "Emma 45", "Emma 51"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "33. In 5 years, Noah will be twice as old as Ava. Currently, Noah is 8 years older than Ava. How old is Noah now?",
      Img: "",
      Responses: ["Noah 11", "Noah 13", "Noah 10", "Noah 14", "Noah 12"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "34. The ratio of a mother’s age to her daughter’s is 5:2. In 10 years, the ratio will be 7:4. How old is mother now?",
      Img: "",
      Responses: ["25", "20", "35", "22", "10"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "35. The ages of Jacob, Peter, and John sum to 48. Peter is 4 years older than Jacob. John is twice Peter. What is Peter + John combined?",
      Img: "",
      Responses: ["39", "30", "22", "35", "41"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "36. A company charges $25/hour + $50 setup. If a client is billed $200, how many consulting hours?",
      Img: "",
      Responses: ["6", "8", "7", "9"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "37. A father is four times as old as his son. In 10 years, he will be twice as old. How old are they now?",
      Img: "",
      Responses: ["Father 20", "18", "22", "25", "30"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "38. A gym charges $40 enrollment + $30/month. If total was $190, how many months paid?",
      Img: "",
      Responses: ["4", "5", "6", "7", "3"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "39. Sarah is three times as old as her sister. In 5 years, the difference will remain. If Sarah is 27 now, how old will her sister be in 5 years?",
      Img: "",
      Responses: ["7", "8", "9", "14", "12"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "40. A taxi charges $4 + $2.50 per mile. If total = $31.5, how many miles?",
      Img: "",
      Responses: ["9", "10", "11", "12", "15"],
      Correct: [2],
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
