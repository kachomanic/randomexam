import { createSlice } from "@reduxjs/toolkit";
import question17 from "../../../assets/imgs/ques17linear.jpg";
import question20 from "../../../assets/imgs/ques20linear.jpg";
import question22 from "../../../assets/imgs/ques22linear.jpg";

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
      getRandomNumber.remaining = Array.from(Array(20).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 20; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "The greatest common factor (GCF) of two numbers, a and b, is 4. The least common multiple (LCM) of a and b is 48. Which of the following ordered pairs correctly gives a and b?",
      Img: "",
      Responses: ["(4, 12)", "(6, 32)", "(8, 24)", "(12, 16)", "(8, 12)"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The greatest common factor (GCF) of two numbers, m and n, is 5. The least common multiple (LCM) of m and n is 60. Which of the following ordered pairs correctly gives m and n?",
      Img: "",
      Responses: ["(5, 60)", "(10, 30)", "(5, 12)", "(15, 20)", "(10, 25)"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A small clothing brand runs two types of ads: photo ads and video ads. A photo ad gets 5 likes and 2 shares and a video ad gets 3 likes and 6 shares. In one day, the brand\u2019s posts received 99 total likes and 78 total shares. How many photo ads and video ads did they post?",
      Img: "",
      Responses: [
        "15 photo ads and 8 video ads",
        "12 photo ads and 12 video ads",
        "10 photo ads and 9 video ads",
        "16 photo ads and 11 video ads",
        "8 photo ads and 18 video ads",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A YouTuber sells hoodies and caps. A hoodie sells for $35, and a cap sells for $15. Last week, they sold 16 items in total and made $420 in revenue. How many hoodies and caps were sold?",
      Img: "",
      Responses: [
        "8 hoodies and 8 caps",
        "12 hoodies and 4 caps",
        "10 hoodies and 6 caps",
        "8 hoodies and 5 caps",
        "9 hoodies and 7 caps",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A social-media manager does two types of collaborations: A \u201cshout-out\u201d brings 12 new followers. A \u201cstory tag\u201d brings 8 new followers. In one week, the manager gained 104 new followers from a total of 12 collaborations. How many shout-outs and story tags were used?",
      Img: "",
      Responses: [
        "3 shout-outs and 9 story tags",
        "2 shout-outs and 10 story tags",
        "5 shout-outs and 7 story tags",
        "8 shout-outs and 4 story tags",
        "7 shout-outs and 5 story tags",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "An online store ships two types of influencer kits: Basic kits use 2 small boxes and 1 large box. Premium kits use 1 small box and 3 large boxes. One week, the store used 35 small boxes and 50 large boxes. How many basic kits and premium kits were shipped?",
      Img: "",
      Responses: [
        "15 basic kits and 12 premium kits",
        "10 basic kits and 13 premium kits",
        "12 basic kits and 9 premium kits",
        "11 basic kits and 13 premium kits",
        "8 basic kits and 14 premium kits",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "If you have the equations y=2x+3 and 3x+y=9, what is the next step after substituting the value of y from the first equation in the second equation?",
      Img: "",
      Responses: [
        "Solve for x",
        "Solve for y",
        "Check the solution",
        "Graph the solution",
        "No Solution",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A theater charges $15 for an adult ticket and $10 for a child\u2019s ticket. If a total of $300 was collected from selling 20 tickets, how many of each type of ticket were sold?",
      Img: "",
      Responses: [
        "10 adult and 10 child",
        "15 adult and 5 child",
        "18 adult and 2 child",
        "16 adult and 4 child",
        "20 adult and 0 child",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the solution for the system if the two equations are: 3x + 4y = 21 and 2x + 4y = 3?",
      Img: "",
      Responses: ["x=3, y=7", "x=8, y=6", "x=5, y=2", "x=3, y=3", "x=6, y=7"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A bookstore sells children books for $15 and Christian books for $10. If they sold a total of 40 books for $500, how many of each type did they sell?",
      Img: "",
      Responses: [
        "17 children's books and 23 Christian books",
        "20 children's books and 20 Christian books",
        "18 children's books and 22 Christian books",
        "18 children's books and 20 Christian books",
        "19 children's books and 21 Christian books",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A school library has art books and science books. The total number of books is 42. If there are 2 times as many art books as science books, how many of each type are there?",
      Img: "",
      Responses: [
        "20 art books and 22 science books",
        "24 art books and 18 science books",
        "26 art books and 16 science books",
        "28 art books and 14 science books",
        "23 art books and 19 science books",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the potential disadvantage of using substitution to solve a system of equations?",
      Img: "",
      Responses: [
        "It only works for linear equations",
        "It is always more accurate",
        "It can be cumbersome (difficult) with complex equations",
        "It requires graphing making correct scaling",
        "There is not any disadvantage is better to use only substitution",
      ],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "At a charity event, tickets for adults are $25 and for children are $15. If they sold a total of 100 tickets and made $1,800, how many adult and child tickets were sold?",
      Img: "",
      Responses: [
        "40 adult tickets and 60 child tickets",
        "35 adult tickets and 65 child tickets",
        "28 adult tickets and 72 child tickets",
        "23 adult tickets and 77 child tickets",
        "30 adult tickets and 70 child tickets",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Choose the Best answer for the following question: Why is substitution a valid method for solving systems of linear equations?",
      Img: "",
      Responses: [
        "It always gives an approximate solution",
        "It reduces the system to a single equation",
        "It eliminates the need for graphing",
        "It only works for equations with one variable",
        "The reality is that it is NOT a valid method",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the solution for the system if the two equations are: 2x + 3y = 19 and 4x - 3y = 5?",
      Img: "",
      Responses: ["(2, 5/12)", "(1/2, 4)", "(4, 11/3)", "(5, 2/3)", "(3, 1/8)"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the solution for the system if the two equations are: y = x + 7 and 2x + y = 25?",
      Img: "",
      Responses: ["(8, 15)", "(6, 13)", "(7, 14)", "(9, 17)", "(3, 12)"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Which are the two equations that have the presented solutions and interceptions?",
      Img: question17,
      Responses: [
        "x + y = 25 and -x + y = 25",
        "2x - y = 14 and x + y = 8",
        "y = 8x - 14 and 2x + y = -8",
        "y = x + 8 and 2x + y = 14",
        "-2x - y = 25 and 8x + y = 14",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A store sells pencils for $2 and pens for $3. If a customer buys 12 items and spends $30, how many pens did they buy?",
      Img: "",
      Responses: ["4 pens", "5 pens", "8 pens", "9 pens", "6 pens"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the solution for the system if the two equations are: 3x + 4y = 24 and x = 2y?",
      Img: "",
      Responses: [
        "x = 4 and y = 3",
        "x = 4 and y = 5/2",
        "x = 4.8 and y = 2.1",
        "x = 4.8 and y = 2.4",
        "x = 4.9 and y = 3",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following graph presents two equations and the interceptions. Which of the following statements is the best match for the graph?",
      Img: question20,
      Responses: [
        "The first line represents the revenue (in millions) from a small tech startup based on the number of new users x, and the second line represents the revenue of a competitor based on the same number of users. The intersection shows when both companies earn the same revenue.",
        "The first equation models the temperature in Celsius, and the second models the number of ice creams sold; the intersection gives the day of maximum sales.",
        "The first equation is the cost of producing pencils, and the second is the profit from selling pens; the intersection indicates the break-even point.",
        "The first line shows the speed of a car in mph, and the second shows the price of gas; the intersection is the time when the car reaches maximum fuel efficiency.",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Which of the following real-world scenarios is best represented by the solution of the system of linear equations?",
      Img: "",
      Responses: [
        "The first equation represents the number of cars produced in January, and the second equation represents the number of buses produced in March; the intersection shows the factory closing time.",
        "The first equation represents the monthly cost of producing cupcakes, and the second represents the number of cupcakes sold per week; the intersection shows maximum profits.",
        "The first equation shows the height of a tree in meters, and the second equation shows the speed of a falling rock; the intersection gives the day of the year.",
        "The first equation represents the number of social media followers (in thousands) a company gains each month, and the second equation represents the number of followers a competitor loses each month. The intersection shows when both companies have the same number of followers.",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Which of the following is the equation of a line perpendicular to the function presented in the graph?",
      Img: question22,
      Responses: [
        "y = 2x + 8",
        "y - 2 = -2x + 2",
        "y = 1/2x - 1",
        "y = -1/2x + 4",
        "y + 8 = 4x",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
  ];

  // Shuffle the array and take only 30 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 20);

  dispatch(setExams(selectedExams));
};
