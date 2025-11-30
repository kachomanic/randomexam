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
    // 1
    {
      Question:
        "A bag contains 5 red, 4 blue, and 3 green marbles. Two marbles are drawn without replacement. What is the probability that both are blue?",
      Img: "",
      Responses: ["4/12 × 4/12", "4/12 × 3/12", "4/12 × 3/11", "3/12 × 4/12"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 2
    {
      Question:
        "A standard deck of 52 cards is used. What is the probability of drawing a heart, replacing it, then drawing a face card?",
      Img: "",
      Responses: [
        "1/4 × 3/52",
        "13/52 × 12/52",
        "1/13 × 1/13",
        "12/52 × 12/52",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 3
    {
      Question:
        "A class has 30 students. 18 play basketball. Of those, 12 also run track. What is the probability that a randomly chosen student plays BOTH sports?",
      Img: "",
      Responses: ["12%", "2/5", "18/30", "6/30", "3/30"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 4
    {
      Question:
        "A spinner has A, B, C, D in equal parts. You spin it three times. What is the probability that you never land on A?",
      Img: "",
      Responses: ["1 − (1/4 × 1/4 × 1/4)", "3/4", "(3/4)³", "1/3", "35%"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 5
    {
      Question:
        "A box contains 8 green and 12 black markers. A marker is selected at random. What is the probability that it is black or green?",
      Img: "",
      Responses: ["8/20", "12/20", "20/20", "0", "0.90"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 6
    {
      Question:
        "A cafe serves 5 types of drinks and 3 types of pastries. You randomly choose one drink AND one pastry. What is the probability that you choose lemonade and a croissant if each category is equally likely?",
      Img: "",
      Responses: ["1/5 × 1/3", "1/8", "1/15", "3/5 × 3/15", "1/12"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 7
    {
      Question:
        "A die is rolled twice. What is the probability that the sum is at least 10?",
      Img: "",
      Responses: ["2/36", "1/6", "6/18", "3/36", "25/36"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 8
    {
      Question:
        "A card is drawn from a shuffled deck. What is the probability that it is a red queen?",
      Img: "",
      Responses: ["1/52", "4/52", "2/52", "2/26"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 9
    {
      Question:
        "A company has 60 employees. 25 work in sales, and 15 of those are women. What is the probability that a randomly selected employee is a woman in sales?",
      Img: "",
      Responses: ["15/25", "25/60", "15/60", "40/60", "12/25"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 10
    {
      Question:
        "A bag contains 9 chips numbered 1–9. Two chips are drawn without replacement. What is the probability that both numbers are odd?",
      Img: "",
      Responses: ["5/9 × 5/9", "4/9 × 4/8", "5/9 × 4/8", "4/9 × 5/9"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 11
    {
      Question:
        "A school has 200 students. 120 take art, 80 take music, and 30 take both. What is the probability that a randomly picked student takes art OR music?",
      Img: "",
      Responses: ["120 + 80", "(120 + 80 − 30) / 200", "200/200", "30/200"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 12
    {
      Question:
        "What is the probability of getting exactly one tail when flipping a coin twice?",
      Img: "",
      Responses: ["1/4", "1/2", "1/3", "1"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 13
    {
      Question:
        "Picking a number from 1 to 12. What is the probability of selecting a multiple of 3?",
      Img: "",
      Responses: ["1/4", "1/6", "1/3", "1/2", "155"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 14
    {
      Question:
        "A bakery displays 20 pastries: 6 croissants, 4 muffins, 5 danishes, and 5 scones. If a customer picks one pastry at random, what is the probability they select a croissant?",
      Img: "",
      Responses: ["1/6", "3/10", "2/5", "1/4", "1/5"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 15
    {
      Question:
        "A teacher placed 12 different colored markers in a box: 3 red, 3 blue, 2 green, 2 purple, and 2 orange. If a student randomly picks one, what is the probability they choose a green marker?",
      Img: "",
      Responses: ["1/8", "1/4", "1/6", "1/3", "1/12"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 16
    {
      Question:
        "The cafe offers 8 types of smoothies. Three of them contain strawberries. If a customer randomly chooses a smoothie, what is the probability they will select one with strawberries?",
      Img: "",
      Responses: ["1/4", "5/8", "2/3", "1/2", "3/8"],
      Correct: [4],
      Verse: "",
      List: "",
    },
    // 17
    {
      Question:
        "A box contains 25 charging cables: 10 USB-C, 5 Lightning, and 10 micro-USB. A technician grabs one at random. What is the probability the cable selected is micro-USB?",
      Img: "",
      Responses: ["2/5", "1/2", "1/4", "3/10", "1/5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 18
    {
      Question:
        "A game board spinner is divided into 5 equal sections: Park, School, Library, Mall, and Home. What is the probability that a single spin lands on “Library”?",
      Img: "",
      Responses: ["1/5", "2/5", "1/4", "3/5", "1/3"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 19
    {
      Question:
        "A drawer contains 18 office supplies: 7 pens, 6 pencils, and 5 highlighters. If someone reaches in and picks one item at random, what is the probability they pick a highlighter?",
      Img: "",
      Responses: ["1/6", "2/9", "5/18", "7/18", "1/3"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 20
    {
      Question:
        "A basket holds 40 apples: 12 green and 28 red. If someone reaches in without looking, what is the probability the apple is red?",
      Img: "",
      Responses: ["3/10", "2/5", "7/10", "3/5", "4/5"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 21
    {
      Question:
        "A veterinary clinic has 30 animals: 10 dogs, 12 cats, and 8 rabbits. If one file is chosen at random, what is the probability it belongs to a cat?",
      Img: "",
      Responses: ["1/3", "3/10", "2/5", "4/15", "1/2"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 22
    {
      Question:
        "A teacher writes 15 students' names on slips for a raffle. Four students are absent. If one name is drawn at random, what is the probability the selected student is absent?",
      Img: "",
      Responses: ["2/15", "1/3", "1/6", "4/15", "1/5"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 23
    {
      Question:
        "A standard deck of 52 cards is used. What is the probability of drawing a card that is a heart or a queen?",
      Img: "",
      Responses: ["4/52", "13/52", "16/52", "17/52", "12/17"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 24
    {
      Question:
        "When rolling a fair six-sided die, what is the probability of getting an even number greater than 4?",
      Img: "",
      Responses: ["1/6", "2/6", "3/6", "4/6", "1/5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 25
    {
      Question:
        "A spinner numbered 1–8 is spun. What is the probability of landing on a number that is prime or less than 5?",
      Img: "",
      Responses: ["3/8", "4/8", "5/8", "6/8", "3/10"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 26
    {
      Question:
        "A fruit basket contains 4 apples, 5 bananas, and 3 oranges. What is the probability of selecting an apple or an orange?",
      Img: "",
      Responses: ["4/12", "7/12", "3/12", "5/12", "5/6"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 27
    {
      Question:
        "Two fair coins are flipped. What is the probability of getting at least one heads AND matching outcomes (HH or TT)?",
      Img: "",
      Responses: ["1/4", "2/4", "3/4", "1/2", "2/5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 28
    {
      Question:
        "The probability of rain on Saturday is 30% and on Sunday it is 40%. Assuming independence, what is the probability it rains on both days?",
      Img: "",
      Responses: ["0.07", "0.12", "0.30", "0.70", "0.50"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 29
    {
      Question:
        "A box contains numbers 1–20. What is the probability of drawing a number that is both a multiple of 3 and even?",
      Img: "",
      Responses: ["2/20", "3/20", "5/20", "6/20", "8/20"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 30
    {
      Question:
        "In a class, 12 students play soccer, 8 play basketball, and 4 play both. If there are 20 students total, what is the probability a randomly chosen student plays soccer or basketball?",
      Img: "",
      Responses: ["12/20", "16/20", "8/20", "4/20", "12/40"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 31
    {
      Question:
        "A bowl contains 10 chocolates and 6 gummies. What is the probability of selecting either a chocolate or a gummy?",
      Img: "",
      Responses: ["10/16", "6/16", "1", "0", "0.5"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 32
    {
      Question:
        "A traffic light is green 50% of the time and red 30% of the time. What is the probability the light is green or red?",
      Img: "",
      Responses: ["0.30", "0.50", "0.70", "0.80", "0.25"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 33
    {
      Question:
        "A student follows 200 accounts on social media: 80 are meme pages, 60 are sports pages, and the rest are news pages. If one account is selected at random, what is the probability it is a meme page or a sports page?",
      Img: "",
      Responses: ["60/200", "140/200", "80/200", "120/200"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 34
    {
      Question:
        "On a social media platform, 40% of users like gaming videos and 30% like cooking videos. If 10% like both, what is the probability that a randomly selected user likes gaming or cooking?",
      Img: "",
      Responses: ["0.40", "0.30", "0.60", "0.10", "0.50"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 35
    {
      Question:
        "If P(A) = 0.2 and P(B) = 0.5, what is P(A or B) for mutually exclusive events?",
      Img: "",
      Responses: ["0.1", "0.6", "0.7", "0.3", "0.5"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 36
    {
      Question:
        "For two events A and B, if P(A and B) = 0, what can be said about A and B?",
      Img: "",
      Responses: [
        "They are independent",
        "They are complementary",
        "They are dependent",
        "They are mutually exclusive",
        "No answer is correct",
      ],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 37
    {
      Question:
        "If P(A) = 0.6 and P(B) = 0.4, what is P(A or B) for independent events?",
      Img: "",
      Responses: ["0.2", "1.0", "0.76", "0.24", "0.46"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 38
    {
      Question:
        "What is the probability of event A occurring given that event B has occurred, if A and B are independent?",
      Img: "",
      Responses: ["P(B)", "P(A)", "P(A) × P(B)", "P(A) + P(B)", "P(A) − P(B)"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 39
    {
      Question:
        "If events A and B are independent, what is the probability of either A or B occurring?",
      Img: "",
      Responses: [
        "P(A) + P(B)",
        "P(A) − P(B)",
        "P(A) + P(B) − P(A) × P(B)",
        "P(A) × P(B)",
        "P(A) × P(B)",
      ],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 40
    {
      Question:
        "For two mutually exclusive events A and B, what is P(A and B)?",
      Img: "",
      Responses: ["P(A) + P(B)", "P(A) − P(B)", "P(A) × P(B)", "0", "1"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 41
    {
      Question:
        "If P(A) = 0.5 and P(B) = 0.3, what is P(A and B) for independent events?",
      Img: "",
      Responses: ["0.3", "0.2", "0.8", "0.15", "0.32"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 42
    {
      Question:
        "What is the probability of two independent events, A and B, both occurring?",
      Img: "",
      Responses: [
        "P(A) + P(B)",
        "P(A) × P(B)",
        "P(A) − P(B)",
        "P(A) / P(B)",
        "1 − P(A)",
      ],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 43
    {
      Question:
        "A coin is flipped and a die is rolled. What is the probability of getting heads and a 4?",
      Img: "",
      Responses: ["1/6", "1/3", "1/12", "1/2", "1/5"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 44
    {
      Question:
        "In a class, 60% of students like math and 50% like science. If 30% like both, what is the probability a student likes either math or science?",
      Img: "",
      Responses: ["0.8", "0.9", "0.7", "0.6", "0.5"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 45
    {
      Question:
        "If a stock has a 0.6 probability of falling, what is the probability it will not fall?",
      Img: "",
      Responses: ["0.3", "0.5", "0.6", "0.4", "0.2"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 46
    {
      Question:
        "A stock has a 25% chance of increasing. What is the probability it will decrease or stay the same?",
      Img: "",
      Responses: ["50%", "25%", "60%", "75%", "10%"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 47
    {
      Question:
        "If a stock has a 0.2 probability of rising, what is the probability it will not rise? (Give your answer in percent.)",
      Img: "",
      Responses: ["60%", "80%", "25%", "50%", "90%"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 48
    {
      Question:
        "A company has a 30% chance of increasing its stock value this quarter. What is the probability it will not increase?",
      Img: "",
      Responses: ["60%", "50%", "30%", "70%", "85%"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 49
    {
      Question:
        "In a soccer tournament, the probability of team C winning was 0.65 and team D winning is 0.55. What is the probability that both teams will win their matches, assuming independence?",
      Img: "",
      Responses: ["0.1200", "0.3575", "0.5500", "0.6500", "0.2525"],
      Correct: [1],
      Verse: "",
      List: "",
    },
    // 50
    {
      Question:
        "The probability of a YouTube video being liked is 0.45 and the probability of it being shared is 0.25. What is the probability of both events occurring independently?",
      Img: "",
      Responses: ["0.1125", "0.70", "0.45", "0.25", "0.50"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 51
    {
      Question:
        "In a tennis match, the probability of player A winning is 0.7 and player B winning is 0.5. What is the probability that both players will win their matches, assuming independence?",
      Img: "",
      Responses: ["0.85", "0.70", "0.35", "0.50", "0.25"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 52
    {
      Question:
        "The probability of a Facebook post being shared is 0.2 and the probability of it being commented on is 0.3. What is the probability of both events occurring independently?",
      Img: "",
      Responses: ["0.06", "0.20", "0.50", "0.30", "0.01"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 53
    {
      Question:
        "In a football match, the probability of team A scoring is 0.8 and team B scoring is 0.6. What is the probability that both teams score, assuming independence?",
      Img: "",
      Responses: ["0.48", "0.68", "0.14", "0.80", "0.50"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 54
    {
      Question:
        "The probability of a tweet being retweeted is 0.25 and the probability of it being liked is 0.35. What is the probability that a tweet is both retweeted and liked, assuming independence?",
      Img: "",
      Responses: ["0.0875", "0.6000", "0.3500", "0.2500", "0.5000"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 55
    {
      Question:
        "A business has a 0.3 probability of launching a successful product and a 0.4 probability of increasing its market share. What is the probability of both events occurring independently?",
      Img: "",
      Responses: ["0.50", "0.10", "0.12", "0.70", "0.25"],
      Correct: [2],
      Verse: "",
      List: "",
    },
    // 56
    {
      Question:
        "In a basketball game, the probability of team X winning is 0.55 and team Y winning is 0.65. Assuming independence, what is the probability that both teams will win their respective games?",
      Img: "",
      Responses: ["0.6500", "0.5500", "0.1200", "0.3575", "0.2550"],
      Correct: [3],
      Verse: "",
      List: "",
    },
    // 57
    {
      Question:
        "A social media platform has a 0.4 probability of a post going viral and a 0.5 probability of a user liking a post. What is the probability that a post goes viral and is liked by a user?",
      Img: "",
      Responses: ["0.20", "0.90", "0.70", "0.45", "0.75"],
      Correct: [0],
      Verse: "",
      List: "",
    },
    // 58
    {
      Question:
        "In a stock market, the probability of stock A increasing is 0.6 and stock B increasing is 0.7. What is the probability that both stocks will increase if they are independent?",
      Img: "",
      Responses: ["0.84", "0.67", "0.13", "0.42", "0.28"],
      Correct: [3],
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
