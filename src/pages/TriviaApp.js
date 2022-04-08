import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrivia, setToggledAnswers } from "../store/trivia/slice";
import { selectToggledAnswers, selectTrivia } from "../store/trivia/selectors";

function TriviaApp() {
  const dispatch = useDispatch();
  const trivia = useSelector(selectTrivia);
  const toggledAnswers = useSelector(selectToggledAnswers);
  useEffect(() => {
    dispatch(getTrivia());
  }, []);
  return (
    <div>
      {trivia.map((item) => (
        <ul>
          <div key={item.id}>
            <li>{item.question}</li>
            {Boolean(toggledAnswers.includes(item.id)) && item.answer}
            <button
              onClick={() => dispatch(setToggledAnswers(item.id))}
              className='btn m-3'
            >
              Show Answer
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default TriviaApp;
