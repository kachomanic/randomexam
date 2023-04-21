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
    var ele = document.getElementsByName(currentPos);
    let res = false;
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked === true) {
        res = true;
      }
    }
    if (res === false) {
      setWarning(true);
      return;
    }

    if (parseInt(selectedResp) !== parseInt(exams[currentPos].Correct)) {
      setErrors(errors + 1);
    }

    if (currentPos < exams.length - 1) {
      setCurrentPos(currentPos + 1);
    } else {
      setCurrentPos(-1);
    }

    for (var j = 0; j < ele.length; j++) ele[j].checked = false;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   if (seconds === 0) {
  //     setMessage("Time limit exceeded!");
  //   }
  // }, [seconds]);

  return (
    <div className="App w-8/12 h-auto mx-auto">
      <p className="text-green-700 font-bold">
        Remaining minutes: {Math.trunc(seconds / 60)}
      </p>
      {currentPos >= 0 ? (
        exams.length && (
          <div className="w-full">
            <p className="bg-blue-300 text-left pl-3">
              Question <span className="font-bold">{currentPos + 1}</span> of{" "}
              <span className="font-bold">{exams.length}</span>
            </p>
            <div className="p-3 mb-6">
              <p className="text-left text-lg">{exams[currentPos].Question}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
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
                        className="w-full block bg-gray-300 my-2 rounded-md p-2"
                        onClick={() => setWarning(false)}
                      >
                        <input
                          type="radio"
                          name={currentPos}
                          value={resp}
                          className="mt-2 mx-2 scale-125"
                          onClick={() => setSelectedResp(index)}
                        ></input>
                        {" " + resp}
                      </label>
                    </div>
                  </Fragment>
                ))}
              </div>
              {exams[currentPos].Img !== "" && (
                <div className="p-3 align-middle my-auto">
                  <img
                    src={exams[currentPos].Img}
                    alt="explain"
                    className="my-auto align-middle"
                  ></img>
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="text-center h-80">
          <p className="text-3xl mb-6">
            Note: {Math.trunc(100 - (errors * 100) / 30)}
          </p>
          <p>
            {exams.length - errors} correct answers out of {exams.length}
          </p>
          <p>Correct answers: {exams.length - errors}</p>
        </div>
      )}
      {currentPos >= 0 && (
        <button
          type="button"
          className="bg-blue-400 p-2 w-40 mb-5 my-3"
          onClick={() => nextPosition()}
        >
          <span className="text-white font-bold text-xl">Next Question</span>
        </button>
      )}
    </div>
  );
}

export default App;
