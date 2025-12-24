import { createSlice } from "@reduxjs/toolkit";
import dataquestion1 from "../../../assets/imgs/dataquestion1.jpg";
import dataquestion2 from "../../../assets/imgs/dataquestion2.jpg";
import dataquestion3 from "../../../assets/imgs/dataquestion3.jpg";
import dataquestion4 from "../../../assets/imgs/dataquestion4.jpg";
import dataquestion5 from "../../../assets/imgs/dataquestion5.jpg";
import dataquestion9 from "../../../assets/imgs/dataquestion9.jpg";
import dataquestion10 from "../../../assets/imgs/dataquestion10.jpg";
import dataquestion11 from "../../../assets/imgs/dataquestion11.jpg";
import dataquestion12 from "../../../assets/imgs/dataquestion12.jpg";
import dataquestion13 from "../../../assets/imgs/dataquestion13.jpg";
import dataquestion14 from "../../../assets/imgs/dataquestion14.jpg";
import dataquestion15 from "../../../assets/imgs/dataquestion15.jpg";
import dataquestion16 from "../../../assets/imgs/dataquestion16.jpg";
import dataquestion17 from "../../../assets/imgs/dataquestion17.jpg";
import dataquestion18 from "../../../assets/imgs/dataquestion18.jpg";
import dataquestion19 from "../../../assets/imgs/dataquestion19.jpg";
import dataquestion23 from "../../../assets/imgs/dataquestion23.jpg";
import dataquestion26 from "../../../assets/imgs/dataquestion26.jpg";
import dataquestion27 from "../../../assets/imgs/dataquestion27.jpg";
import dataquestion28 from "../../../assets/imgs/dataquestion28.jpg";
import dataquestion29 from "../../../assets/imgs/dataquestion29.jpg";
import dataquestion30 from "../../../assets/imgs/dataquestion30.jpg";
import dataquestion31 from "../../../assets/imgs/dataquestion31.jpg";
import dataquestion32 from "../../../assets/imgs/dataquestion32.jpg";
import dataquestion33 from "../../../assets/imgs/dataquestion33.jpg";
import dataquestion34 from "../../../assets/imgs/dataquestion34.jpg";
import dataquestion35 from "../../../assets/imgs/dataquestion35.jpg";
import dataquestion36 from "../../../assets/imgs/dataquestion36.jpg";
import dataquestion37 from "../../../assets/imgs/dataquestion37.jpg";
import dataquestion38 from "../../../assets/imgs/dataquestion38.jpg";
import dataquestion39 from "../../../assets/imgs/dataquestion39.jpg";
import dataquestion40 from "../../../assets/imgs/dataquestion40.jpg";

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
      getRandomNumber.remaining = Array.from(Array(30).keys()).sort(
        () => Math.random() - 0.5
      );
    }
    return getRandomNumber.remaining.pop();
  }
  getRandomNumber.remaining = [];
  let orderArray = [];
  for (let i = 0; i < 30; i++) {
    orderArray.push(parseInt(getRandomNumber()));
  }
  dispatch(setOrderArray(orderArray));
};

export const fetchAllExams = () => (dispatch) => {
  const exams = [
    {
      Question:
        "The following graph represents information on the savings accounts that were opened during the first fivemonths of a year at a branch of a certain bank. How many more people had opened accounts in March than in January?",
      Img: dataquestion1,
      Responses: ["40", "60", "75", "80", "120"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following graph represents information on the percentage of votes received by three political partiesfrom the total votes cast during the three most recently held elections in a certain electoral district. Consider the following statements: <br> (I). Party A has received the greatest number of votes in the Provincial Council Election <br> (II). Party B has succeeded in increasing their percentage of votes from the Provincial Council Election to the Parliamentary Election <br> (III). In Parliamentary Election has the political party A received the highest percentage of votes. <br> (IV). Party C has received a lesser percentage of votes in the Presidential Election than in the Parliamentary Election. <br> Which statements is/are false ?",
      Img: dataquestion2,
      Responses: [
        "I and II Only",
        "I, II and IV Only",
        "IV Only",
        "I and IV Only",
        "III and IV Only",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following pie chart illustrates the information on the types of crops cultivated on a certain plot of land comprising of 720 hectares. Answer the following questions using the pie chart.<br> What is the extent of land on which cinnamon has been cultivated?",
      Img: dataquestion3,
      Responses: [
        "360 hectares",
        "120 hectares",
        "80 hectares",
        "20 hectares",
        "40 hectares",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The pie chart drawn with the information gathered from 40 grade 10 students of a certain school regarding the type of mass media they most prefer is given below. If the angle at the centre of the sector which denotes the children who prefer television is 1620, find the number of children who prefer television?",
      Img: dataquestion4,
      Responses: ["36", "9", "27", "18", "20"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The total frequency is 30. The table shows the results. What is the mean score?",
      Img: dataquestion5,
      Responses: ["2", "4", "5", "6", "8"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The ages of the members of a school cricket team (rounded off to the nearest year) are given below?<br> <strong>15, 14, 15, 14, 14, 19, 17, 18, 17, 16, 18</strong> <br>What is the median of the above set of data?",
      Img: "",
      Responses: ["19", "15", "14", "18", "16"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Data collected by a certain weather station on the highest temperature (in degrees Celsius) recorded during each day of the first two weeks of a certain month is given below.? <br> <strong>26, 28, 28, 29, 27, 28, 29, 30, 31, 28, 30, 31, 32, 29</strong> <br>What is the mean of the given set of data?",
      Img: "",
      Responses: ["27°C", "28°C", "29°C", "26°C", "30°C"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The number of employees who took leave on each of the 15 working days of a certain month is given below: <br> <strong>12, 14, 20, 16, 15, 16, 21, 19, 16, 18, 17, 15, 18, 19, 18</strong> <br>What is the Interquartile Range (IQR) of the given data?",
      Img: "",
      Responses: ["17", "4", "19", "15", "6"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A distance-time graph of the motion of a man who travels from his home to the city on his motorcycle is given below.<br>What is the speed difference of which he travelled from A to B and C to D?",
      Img: dataquestion9,
      Responses: ["50 m/s", "10/6 m/s", "10/3 m/s", "30 m/s", "25 m/s"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Given the pie chart below, the actual gross sales in years 2001, 2002, 2003, 2004 and 2005. Gross sales in 2005 were $94,000. <br> Consider the given statements: <br>(I). Total gross sales for all five years are $376,000<br>(II). Gross sales for year 2001 are $86,840<br>(III). Gross sales for year 2003 are $78,960<br>(IV). Gross sales for year 2004 are $52,640<br> Which statements are true?",
      Img: dataquestion10,
      Responses: [
        "I Only",
        "III Only",
        " I and II Only",
        "II and III Only",
        "I and III Only",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following multiple column graph provides information on the number of students who entered thedifferent level subject streams at a certain school during three successive years. <br> If all the students who joined the class in 2013 sat the examination in 2015, how many students in total faced the examination in 2015 from this school?",
      Img: dataquestion11,
      Responses: ["140", "125", "120", "130", "110"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A survey was conducted on the number of hours per month boys and girls spend playing video games. The results are shown in the bar graph below, What is the fraction of the girls played video games for 20 hours or less from all children?",
      Img: dataquestion12,
      Responses: ["77/160", "19/40", "27/80", "5/16", "49/160"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A bookstore sells three different kinds of books: paperbacks, hardbacks, and audiobooks. They record their sales of each type of book over the course of one year and display the results in the bar chart shown below.<br> What is the ratio of Audiobooks sold to Paperbacks sold in its simplest form?",
      Img: dataquestion13,
      Responses: ["4:1", "1:4", "5:12", "5:3", "3:12"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "70 adults and 70 children were surveyed to find out how many servings of fruit and vegetables they eat per week. The results are shown in the bar graph below. <br> What is the difference between the number of children who eat over 20 servings of fruit and vegetables per week and between 6 to 10 servings of fruit and vegetables per week?",
      Img: dataquestion14,
      Responses: ["20", "21", "22", "24", "7"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The information on the number of customers that came to a certain bank on several days is given below. There are 56 total number of customers come to the bank on 8 days. The bank manager knows that the median number of customers are 68. What is the correct possible value combination ti fill in the frequency table?",
      Img: dataquestion15,
      Responses: ["10 and 8", "6 and 8", "10 and 7", "10 and 12", "9 and 8"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following pie chart illustrates the information on the number of patients who received treatment from the different units of a hospital on a certain day. The total number of patients who received treatment at the hospital on that day was 600. If the number of patients who received treatment while being hospitalized is 130, find the angle at the center of the sector which denotes these patients?",
      Img: dataquestion16,
      Responses: ["86°", "70°", "78°", "65°", "80°"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following pie chart illustrates the number of votes received by four parties at an election. The party which received the greatest number of votes received a total of 9300 votes. <br> What is the number of votes that the party in fourth position received as a percentage of the total number of votes?",
      Img: dataquestion17,
      Responses: ["15%", "13.75%", "16.5%", "25%", "12.5%"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The pie chart given below illustrates the information gathered from the members of a sports club regarding the indoor sport they like the most.<br> The number of members who like chess the most is 8. According to the pie chart, how many members like table tennis the most?",
      Img: dataquestion18,
      Responses: ["6", "30", "24", "28", "20"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The weight of sugar packets are distributing company is given the table. What is the mean value of given data set?",
      Img: dataquestion19,
      Responses: ["1", "2", "3", "4", "5"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The number of athletes who came to a certain sports centre for training each day of a period of 16 days is given below. What is the Interquartile Range (IQR) of the given data? <br> <strong>18, 09, 14, 26, 22, 12, 16, 23, 36, 15, 18, 25, 20, 21, 20, 15</strong> ",
      Img: "",
      Responses: ["15", "7.5", "3.5", "5.5", "12"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The number of matchsticks in 10 boxes of matches is given here. <br> <strong>49, 50, 48, 47, 49, 50, 49, 50, 47, 51</strong> <br> For these boxes of matchsticks, what is the Interquartile Range (IQR)?",
      Img: "",
      Responses: ["2", "5", "3", "1", "4"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The masses of a group of children of the same age who arrived at a clinic on a certain day are given here. <br> <strong>15 kg, 16 kg, 18 kg, 12 kg, 14 kg, 16 kg, 17 kg, 20 kg</strong> <br> According to the given data, what is the mean mass of a child in this group?",
      Img: "",
      Responses: ["13kg", "10kg", "15kg", "16kg", "18kg"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The number of runs scored by each of the 11 batsmen in each of the two teams that played a cricket match against each other is given in the following table. By considering the runs scored by the batsmen in team A, what is what is the Interquartile Range (IQR)?",
      Img: dataquestion23,
      Responses: ["33", "35", "25", "20", "30"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The mean of the masses of 4 children is 34 kg. When another child joined, the mean mass increased to 38kg. What is the mass of the child who joined later?",
      Img: "",
      Responses: ["50kg", "38kg", "52kg", "44kg", "54kg"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A group of 15 pilgrims are in an airplane. The mean mass of their luggage is 29 kg. Each person can carry up to 30 kg of luggage. If this is exceeded, an additional fee is charged. What is the total mass allowed for this group?",
      Img: "",
      Responses: ["435kg", "465kg", "450kg", "460kg", "445kg"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The marks that David and Peter got in the previous term test are as follows. What is the different of the mean mark of these two students?",
      Img: dataquestion26,
      Responses: ["1", "2", "3", "4", "5"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "This pie chart shows how children travel to school on one day. If 135 children cycle to school on that day. How many travel by bus on that day?",
      Img: dataquestion27,
      Responses: ["45", "120", "150", "180", "210"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The graph shows the population of Britain from 1700. In which year was the population twice as much as it was in 1800?",
      Img: dataquestion28,
      Responses: ["1850", "1875", "1865", "1900", "1910"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "420 shoppers are asked about their favorite fruit. How many like oranges?",
      Img: dataquestion29,
      Responses: ["48", "210", "84", "42", "68"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The graph shows how many dollars can be obtained for one pound on different days of a week at a bank. On Friday, how many pounds would be needed to buy 500 dollars?",
      Img: dataquestion30,
      Responses: [
        "400 Dollars",
        "600 Dollars",
        "575 Dollars",
        "675 Dollars",
        "625 Dollars",
      ],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The bar chart shows the heights of a class of pupils. Which statement MUST be true?",
      Img: dataquestion31,
      Responses: [
        "1 child is exactly 165 cm tall",
        "5 children have a height between 120 cm and 129 cm",
        "No children have a height less than 111 cm",
        "7 children have a height more than 140 cm but less than 150 cm",
        "8 children have a height of less than 139 cm",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "This graph converts British Pounds (£) to United States Dollars ($). How many Dollars ($) is £34?",
      Img: dataquestion32,
      Responses: ["$47.50", "$27.20", "$42.50", "$45.00", "$42.20"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The bar chart shows the amount of money Lewis, Jordan and Zoe have in their savings accounts. Which one of these is NOT true?",
      Img: dataquestion33,
      Responses: [
        "Lewis and Jordan have £35 altogether",
        "Lewis has half as much as Jordan",
        "The children have £65 altogether",
        "Zoe has twice as much as Lewis",
        "Jordan has £10 less than Zoe",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "Following pie chart represents the different types of vegetable plants chose by Mrs.Ann for her vegetable garden. Number of tomato plants are equal to the number of brinjal plants. Number of chilli plants in the garden is 15. What is the number of brinjal plants?",
      Img: dataquestion34,
      Responses: ["60", "30", "120", "15", "45"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    {
      Question:
        "What is the possible number on the yellow cages. <br> - A set of six numbers have a median of 6. <br> - All the numbers are even. <br> -The range of the numbers is 8. <br> - The mode of the numbers is 6. <br> - All numbers are arranged according to the ascending order",
      Img: dataquestion35,
      Responses: [
        "2, 6 and 8",
        "2, 6 and 6",
        "2, 2 and 4",
        "6, 2 and 2",
        "2, 6 and 10",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The information on the number of customers that came to a certain bank on several days is given below. <br> What is the mean (Second decimal place) of the above distribution?",
      Img: dataquestion36,
      Responses: ["67.68", "67.67", "69.69", "68.69", "60.69"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A distance-time graph illustrating the motion of David who cycled to his friend’s house and then returned back home after spending some time with his friend is given below. <br> What is the speed difference of which he travelled from A to B and C to D in Kilometers per hour (km/h)? ",
      Img: dataquestion37,
      Responses: ["18 km/h", "12 km/h", "3 km/h", "9 km/h", "6 km/h"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following table has been prepared using the number of days of leave that the staff of a privat organization took during a year. What is the mean number of days of leave taken by a staff member of this organization? (Round off to the whole number)",
      Img: dataquestion38,
      Responses: ["16", "17", "18", "19", "20"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    {
      Question:
        "A table with information on the amount of rice that was sold during a period of 90 days at a cooperative store is given below.<br> If this pattern of sales is expected to continue during the next two months too, estimate the amount of rice that should be stored to be sufficient for the next 60 days?",
      Img: dataquestion39,
      Responses: [
        "16032.25 kg",
        "16090.60 kg",
        "16190.90 kg",
        "16009.08 kg",
        "16096.80 kg",
      ],
      Correct: [4],
      Verse: "",
      List: "",
    },
    {
      Question:
        "The following is a frequency distribution prepared from the Mathematics marks of a group of students in Class A. <br> Frequency curve for this frequency distribution is given below. What is the Interquartile range of the data?",
      Img: dataquestion40,
      Responses: ["25", "22", "24", "26", "29"],
      Correct: [4],
      Verse: "",
      List: "",
    },
  ];

  // Shuffle the array and take only 30 random questions
  const shuffledExams = exams.sort(function () {
    return Math.random() - 0.5;
  });

  const selectedExams = shuffledExams.slice(0, 30);

  dispatch(setExams(selectedExams));
};
