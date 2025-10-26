import React, { Fragment, useEffect, useState } from "react";
import { fetchAllExams, fetchOrderArray } from "./store/slices/exams";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const { list: exams } = useSelector((state) => state.exams);
  const { orderArray: order } = useSelector((state) => state.exams);
  const dispatch = useDispatch();
  const [currentPos, setCurrentPos] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [errors, setErrors] = useState(0);
  //const [message, setMessage] = useState("");
  const [selectedResp, setSelectedResp] = useState();
  const [warning, setWarning] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // Track answers for each question
  const [questionStatus, setQuestionStatus] = useState({}); // Track status: 'correct', 'incorrect', 'unanswered'
  const [isReviewMode, setIsReviewMode] = useState(false); // Track if reviewing incorrect answers
  let actualPosition = parseInt(
    JSON.parse(localStorage.getItem("actualPosition"))
  );
  if (actualPosition === null) {
    localStorage.setItem("actualPosition", JSON.stringify(0));
    actualPosition = 0;
  }

  // useEffect(() => {
  //   setCurrentPos(actualPosition);
  // }, [actualPosition]);

  useEffect(() => {
    if (!exams.length) {
      dispatch(fetchAllExams());
    }
  }, [exams.length, dispatch]);

  useEffect(() => {
    if (!order.length) {
      dispatch(fetchOrderArray());
    }
  }, [order.length, order, dispatch]);

  const nextPosition = () => {
    setWarning(false);

    // Check if an answer is selected
    if (selectedResp === undefined) {
      setWarning(true);
      return;
    }

    // Save the user's answer
    const newUserAnswers = { ...userAnswers };
    newUserAnswers[currentPos] = selectedResp;
    setUserAnswers(newUserAnswers);

    // Determine if answer is correct (only if this is the first time answering)
    if (questionStatus[currentPos] === undefined) {
      const isCorrect = exams[currentPos].Correct.includes(
        parseInt(selectedResp)
      );
      const newQuestionStatus = { ...questionStatus };
      newQuestionStatus[currentPos] = isCorrect ? "correct" : "incorrect";
      setQuestionStatus(newQuestionStatus);

      if (!isCorrect) {
        setErrors(errors + 1);
      }
    }

    // Clear radio buttons before moving
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });
    setSelectedResp(undefined);

    // Move to next question or end exam
    if (currentPos < exams.length - 1) {
      setCurrentPos(currentPos + 1);
    } else {
      setCurrentPos(-1);
    }
  };

  const jumpToQuestion = (questionIndex, fromResults = false) => {
    // First, save current answer if one is selected
    if (selectedResp !== undefined && currentPos >= 0) {
      const newUserAnswers = { ...userAnswers };
      newUserAnswers[currentPos] = selectedResp;
      setUserAnswers(newUserAnswers);
    }

    setWarning(false);

    // Clear all radio selections first
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    // Set the selected response if user has already answered this question
    if (userAnswers[questionIndex] !== undefined) {
      setSelectedResp(userAnswers[questionIndex]);
    } else {
      setSelectedResp(undefined);
    }

    // Set review mode if jumping from results
    if (fromResults) {
      setIsReviewMode(true);
    }

    // Set current position after state updates
    setCurrentPos(questionIndex);
  };

  const returnToResults = () => {
    setIsReviewMode(false);
    setCurrentPos(-1);
    setSelectedResp(undefined);
    // Clear all radio selections
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });
  };

  const previousQuestion = () => {
    if (currentPos > 0) {
      jumpToQuestion(currentPos - 1);
    }
  };

  // Effect to restore radio button selection when currentPos changes
  useEffect(() => {
    if (currentPos >= 0 && userAnswers[currentPos] !== undefined) {
      // Use a longer timeout to ensure DOM is fully updated
      const timeoutId = setTimeout(() => {
        var ele = document.getElementsByName(currentPos);
        if (ele[userAnswers[currentPos]]) {
          ele[userAnswers[currentPos]].checked = true;
          setSelectedResp(userAnswers[currentPos]);
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    } else if (currentPos >= 0) {
      // Make sure selectedResp is cleared for unanswered questions
      setSelectedResp(undefined);
    }
  }, [currentPos, userAnswers]);

  useEffect(() => {
    // Only run the timer if the exam is still active (currentPos >= 0)
    if (currentPos >= 0) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentPos]);

  return (
    <div className="App w-full sm:w-8/12 h-auto mx-auto">
      <p className="text-green-700 font-bold">
        Test time: {Math.trunc(seconds / 60)} minutes
      </p>

      {currentPos >= 0 ? (
        exams.length && (
          <div className="w-full">
            <p className="bg-blue-300 text-left pl-3">
              Question <span className="font-bold">{currentPos + 1}</span> of{" "}
              <span className="font-bold">{exams.length}</span>
            </p>
            <div className="p-3 mb-6">
              <p
                className="text-left text-lg"
                dangerouslySetInnerHTML={{ __html: exams[currentPos].Question }}
              ></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {exams[currentPos].Img !== "" && (
                <div className="align-middle my-auto">
                  <img
                    src={exams[currentPos].Img}
                    alt="explain"
                    className="my-auto align-middle"
                  ></img>
                </div>
              )}
              <div
                className={`p-3 text-left ${
                  warning === true
                    ? "border-solid border-2 border-red-500"
                    : "border-none"
                }`}
              >
                {exams[currentPos].Responses.map((resp, index) => (
                  <Fragment key={index}>
                    <div className="my-2 bg-red-200 rounded-md">
                      <label
                        className="w-full block bg-gray-200 my-2 rounded-md p-2"
                        onClick={() => setWarning(false)}
                      >
                        <input
                          type="radio"
                          name={currentPos}
                          value={resp}
                          className="mt-2 mx-2 scale-125"
                          onClick={() => setSelectedResp(index)}
                        ></input>
                        <span dangerouslySetInnerHTML={{ __html: resp }}></span>
                      </label>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            {currentPos % 3 === 0 &&
              currentPos !== 0 &&
              exams[currentPos].Verse !== "" &&
              currentPos !== 15 && (
                <div className="bg-green-400 p-2 w-full mb-5 my-3 mx-auto rounded-lg">
                  <p
                    className="text-left text-lg"
                    dangerouslySetInnerHTML={{
                      __html: exams[currentPos].Verse,
                    }}
                  ></p>
                </div>
              )}
            {currentPos % 5 === 0 &&
              exams[currentPos].List !== "" &&
              currentPos !== 0 && (
                <div className="bg-red-400 p-2 w-80 mb-5 my-3 mx-auto rounded-lg">
                  <a
                    href={exams[currentPos].List}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-bold text-xl"
                  >
                    Lista completa de videos para 10mo grado
                  </a>
                </div>
              )}
          </div>
        )
      ) : (
        <div className="text-center h-80 bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
          <p className="text-3xl mb-6">
            Score: {Math.trunc(100 - (errors * 100) / exams.length)}%
          </p>
          <p className="text-xl mb-4">
            {exams.length - errors} correct answers out of {exams.length}
          </p>
          <p className="text-lg mb-4">
            Total time: {Math.trunc(seconds / 60)} minutes and {seconds % 60}{" "}
            seconds
          </p>
        </div>
      )}
      {currentPos >= 0 && (
        <Fragment>
          {isReviewMode ? (
            // Show Return to Results button when in review mode
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-800 p-2 w-60 mb-5 my-3 rounded-lg"
                onClick={returnToResults}
              >
                <span className="text-white font-bold text-xl">
                  Return to Results
                </span>
              </button>
            </div>
          ) : (
            // Show Previous/Next buttons during exam
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className={`p-2 w-60 mb-5 my-3 rounded-lg ${
                  currentPos > 0
                    ? "bg-gray-400 hover:bg-gray-500 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                onClick={previousQuestion}
                disabled={currentPos === 0}
              >
                <span className="font-bold text-xl">Previous Question</span>
              </button>
              <button
                type="button"
                className="bg-blue-400 hover:bg-blue-500 p-2 w-60 mb-5 my-3 rounded-lg"
                onClick={() => nextPosition()}
              >
                <span className="text-white font-bold text-xl">
                  Next Question
                </span>
              </button>
            </div>
          )}
        </Fragment>
      )}

      {/* Question Navigation Grid */}
      {exams.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          {/* First row - 12 questions */}
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 mb-2">
            {exams.slice(0, 12).map((_, index) => {
              let buttonClass = "w-10 h-10 rounded border-2 font-bold text-sm ";
              const isIncorrect = questionStatus[index] === "incorrect";
              const isClickable =
                (currentPos === -1 || isReviewMode) && isIncorrect;
              const showResults = currentPos === -1 || isReviewMode;

              // Determine button color based on status
              if (currentPos === index && isReviewMode) {
                buttonClass += "bg-blue-500 text-white border-blue-600"; // Current question being reviewed
              } else if (showResults) {
                // Show results when exam is finished or in review mode
                if (questionStatus[index] === "correct") {
                  buttonClass += "bg-green-500 text-white border-green-600"; // Correct answer
                } else if (isIncorrect) {
                  buttonClass +=
                    "bg-red-500 text-white border-red-600 hover:bg-red-600 hover:border-red-700 cursor-pointer transition-all duration-200 hover:scale-110"; // Incorrect answer - clickable
                } else {
                  buttonClass +=
                    "bg-gray-200 text-gray-800 border-gray-300 cursor-default"; // Unanswered
                }
              } else if (currentPos === index) {
                buttonClass += "bg-blue-500 text-white border-blue-600"; // Current question during exam
              } else {
                // During exam, show all questions as neutral and non-interactive
                buttonClass +=
                  "bg-gray-200 text-gray-800 border-gray-300 cursor-default"; // Neutral and non-clickable
              }

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={
                    isClickable ? () => jumpToQuestion(index, true) : undefined
                  }
                  disabled={!isClickable} // Only enable incorrect answers after exam completion
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Second row - 13 questions */}
          {exams.length > 12 && (
            <div
              className="grid grid-cols-6 sm:grid-cols-13 gap-2 mb-4"
              style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}
            >
              {exams.slice(12, 25).map((_, idx) => {
                const index = idx + 12; // Adjust index for second row
                let buttonClass =
                  "w-10 h-10 rounded border-2 font-bold text-sm ";
                const isIncorrect = questionStatus[index] === "incorrect";
                const isClickable =
                  (currentPos === -1 || isReviewMode) && isIncorrect;
                const showResults = currentPos === -1 || isReviewMode;

                // Determine button color based on status
                if (currentPos === index && isReviewMode) {
                  buttonClass += "bg-blue-500 text-white border-blue-600"; // Current question being reviewed
                } else if (showResults) {
                  // Show results when exam is finished or in review mode
                  if (questionStatus[index] === "correct") {
                    buttonClass += "bg-green-500 text-white border-green-600"; // Correct answer
                  } else if (isIncorrect) {
                    buttonClass +=
                      "bg-red-500 text-white border-red-600 hover:bg-red-600 hover:border-red-700 cursor-pointer transition-all duration-200 hover:scale-110"; // Incorrect answer - clickable
                  } else {
                    buttonClass +=
                      "bg-gray-200 text-gray-800 border-gray-300 cursor-default"; // Unanswered
                  }
                } else if (currentPos === index) {
                  buttonClass += "bg-blue-500 text-white border-blue-600"; // Current question during exam
                } else {
                  // During exam, show all questions as neutral and non-interactive
                  buttonClass +=
                    "bg-gray-200 text-gray-800 border-gray-300 cursor-default"; // Neutral and non-clickable
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={
                      isClickable
                        ? () => jumpToQuestion(index, true)
                        : undefined
                    }
                    disabled={!isClickable} // Only enable incorrect answers after exam completion
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          )}

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Current</span>
            </div>
            {currentPos === -1 || isReviewMode ? (
              // Show results legend when exam is finished or in review mode
              <>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Correct</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Incorrect (Click to review)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-200 border border-gray-300 rounded"></div>
                  <span>Unanswered</span>
                </div>
              </>
            ) : (
              // During exam, show only neutral legend
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-200 border border-gray-300 rounded"></div>
                <span>Questions</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Information Panel */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <strong>Progress:</strong> {Object.keys(userAnswers).length} of{" "}
            {exams.length} questions answered
          </div>
          <div>
            <strong>Current Question:</strong>{" "}
            {currentPos >= 0 ? currentPos + 1 : "Exam Complete"}
          </div>
          <div>
            <strong>Time Elapsed:</strong> {Math.trunc(seconds / 60)}:
            {(seconds % 60).toString().padStart(2, "0")}
          </div>
        </div>
        {currentPos >= 0 && <div className="mt-2 text-center"></div>}
      </div>
    </div>
  );
}

export default App;
