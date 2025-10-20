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
      getRandomNumber.remaining = Array.from(Array(25).keys()).sort(
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
        "A rectangular garden is 8 meters long and 5.5 meters wide. What is the area of the garden?",
      Img: "",
      Responses: ["35 m²", "44 m²", "45 m²", "52 m²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A square-shaped room has a side length of 6 meters. What is the perimeter of the room?",
      Img: "",
      Responses: ["28 meters", "22 meters", "24 meters", "26 meters"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A triangular park has a base of 10 meters and a height of 7 meters. What is the area of the park?",
      Img: "",
      Responses: ["25 m²", "30 m²", "35 m²", "70 m²"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A trapezoid-shaped field has bases of 12 feet and 8 feet, with a height of 5 feet. What is the area of the field?",
      Img: "",
      Responses: ["40 ft²", "50 ft²", "60 ft²", "70 ft²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A parallelogram has a base of 15 meters and a height of 4 meters. What is the area of the parallelogram?",
      Img: "",
      Responses: ["45 m²", "50 m²", "55 m²", "60 m²"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A rectangular pool has a length that is twice its width. If the perimeter of the pool is 72 meters, what is the area of the pool?",
      Img: "",
      Responses: ["144 m²", "180 m²", "216 m²", "288 m²"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A triangular plot of land has sides measuring 9 meters, 12 meters, and 15 meters. What is the perimeter of the plot?",
      Img: "",
      Responses: ["30 meters", "33 meters", "36 meters", "39 meters"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A trapezoid has bases of 14 meters and 6 meters, with a height of 9 meters. What is the area of the trapezoid?",
      Img: "",
      Responses: ["80 m²", "90 m²", "100 m²", "110 m²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A square and a rectangle have the same perimeter of 40 meters. If the square's side length is 10 meters, what is the area of the rectangle if its length is 14 meters?",
      Img: "",
      Responses: ["196 m²", "24 m²", "84 m²", "100 m²"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The area of a parallelogram is 108 m², and its height is 12 meters. What is the length of the base?",
      Img: "",
      Responses: ["7 meters", "8 meters", "9 meters", "10 meters"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the perimeter of a rectangle with a length of 10 meters and a width of half the length?",
      Img: "",
      Responses: ["30 meters", "32 meters", "36 meters", "40 meters"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Find the area of a parallelogram with a base of 10 meters and a height of 5 meters.",
      Img: "",
      Responses: ["40 m²", "45 m²", "50 m²", "55 m²"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the area of a trapezoid with bases of 20 inches and 1 foot, and a height of 0.5 feet?",
      Img: "",
      Responses: ["36 in²", "72 in²", "96 in²", "49 in²"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Find the side of a square that has the same perimeter of a parallelogram with sides of 8 meters and 6 meters.",
      Img: "",
      Responses: ["11 meters", "9 meters", "7 meters", "8 meters"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the perimeter of a rectangle with a length double the width using only whole numbers?",
      Img: "",
      Responses: ["36 meters", "42 meters", "26 meters", "46 meters"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Find the area of a trapezoid with bases of 16 meters and 1000 centimeters, and a height of 7 meters.",
      Img: "",
      Responses: ["86 m²", "91 m²", "96 m²", "102 m²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question: "Find the area of a square with a side length of 13 meters.",
      Img: "",
      Responses: ["121 m²", "169 m²", "182 m²", "196 m²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Find the perimeter of a parallelogram with sides of 12 meters and 10 meters.",
      Img: "",
      Responses: ["44 meters", "42 meters", "48 meters", "52 meters"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the area of a rectangle with a length of 20 meters and a width of 14 meters?",
      Img: "",
      Responses: ["240 m²", "260 m²", "280 m²", "300 m²"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Find the area of a triangle with a base of 17 meters and a height of 8 meters.",
      Img: "",
      Responses: ["58 m²", "68 m²", "72 m²", "136 m²"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the perimeter of a square with an area of 256 square meters?",
      Img: "",
      Responses: ["56 meters", "60 meters", "64 meters", "72 meters"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the area of a rectangle with length 12 units and width 5 units?",
      Img: "",
      Responses: [
        "60 square units",
        "34 square units",
        "17 square units",
        "85 square units",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A circle has a circumference of 12.56 units. What is its radius? (Use π=3.14)",
      Img: "",
      Responses: ["1 unit", "2 units", "3 units", "4 units"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The area of a triangle is 24 square units, and its height is 6 units. What is its base length?",
      Img: "",
      Responses: ["4 units", "8 units", "12 units", "16 units"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A regular pentagon has a perimeter of 35 feet. What is the length of one side in inches?",
      Img: "",
      Responses: ["7 in", "84 in", "35 in", "48 in"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A circle has an area of 78.5 square units. What is its radius? (Use π=3.14)",
      Img: "",
      Responses: ["3 units", "5 units", "7 units", "4 units"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A local park is designing a circular fountain. If the radius of the fountain is 15 feet, and the cost of decorative stone border is $28 per foot around the circumference, what is the total cost for the border?",
      Img: "",
      Responses: ["$1,319.47", "$1,256.64", "$2,637.60", "$2,231.50"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Sarah is designing a triangular garden bed. If the area of the garden is 84 square feet and the base is 14 feet, what is the height of the triangle?",
      Img: "",
      Responses: ["12 feet", "6 feet", "24 feet", "8 feet"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A rectangular classroom needs new flooring. The area of the room is 180 square feet, and the length is 15 feet. How wide is the room?",
      Img: "",
      Responses: ["13 feet", "12 feet", "11 feet", "10 feet"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The local community center has a hexagonal playground. If each side of the playground is 25 feet long, what is the perimeter of the playground?",
      Img: "",
      Responses: ["125 feet", "150 feet", "100 feet", "75 feet"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A pizza shop makes a large circular pizza with a diameter of 16 inches. What is the approximate area of the pizza?",
      Img: "",
      Responses: [
        "200.96 sq in",
        "154.29 sq in",
        "50.27 sq in",
        "100.53 sq in",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A local park is quadrilateral, similar to a rectangle, measuring 50 feet in length in one side and 60 in the opposite side and 30 feet and 18 inches in opossites width. The city is planning to build a fence around the park to keep it secure in all areas except in 10 feet that there is a wall. What is the total length of fencing needed to go around the park? ",
      Img: "",
      Responses: ["170 ft", "148 ft", "158 ft", "200 ft 6 in"],
      Correct: [1],
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
