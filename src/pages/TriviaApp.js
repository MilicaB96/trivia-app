import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  setToggledAnswers,
  getClues,
} from "../store/trivia/slice";
import {
  selectToggledAnswers,
  selectCategories,
  selectClues,
} from "../store/trivia/selectors";

function TriviaApp() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(0);
  const clues = useSelector(selectClues);
  const toggledAnswers = useSelector(selectToggledAnswers);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector(selectCategories);
  useEffect(() => {
    if (category) {
      dispatch(getClues(category));
    }
  }, [category]);
  return (
    <div>
      <select name='categories' onChange={(e) => setCategory(e.target.value)}>
        <option value={null}></option>
        {categories.map((categorie) => (
          <option value={categorie.id}>{categorie.title}</option>
        ))}
      </select>
      {clues.map((item) => (
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
