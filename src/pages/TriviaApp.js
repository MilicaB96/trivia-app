import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  setToggledAnswers,
  getClues,
  setCurrentPage,
} from "../store/trivia/slice";
import {
  selectToggledAnswers,
  selectCategories,
  selectPage,
  selectLastPage,
  selectFilterTrivia,
} from "../store/trivia/selectors";
import FilterTrivia from "../components/FilterTrivia";

function TriviaApp() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(0);
  const page = useSelector(selectPage);
  const lastPage = useSelector(selectLastPage);
  const filterClues = useSelector(selectFilterTrivia);
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
      <FilterTrivia />
      <br />
      <select name='categories' onChange={(e) => setCategory(e.target.value)}>
        <option value={null}></option>
        {categories.map((categorie) => (
          <option value={categorie.id}>{categorie.title}</option>
        ))}
      </select>
      {filterClues.map((item) => (
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
      <div className='m-3'>
        <button
          disabled={page === 1}
          onClick={() => dispatch(setCurrentPage("prev"))}
          type='button'
        >
          &#5176;
        </button>
        <button
          disabled={lastPage}
          onClick={() => dispatch(setCurrentPage("next"))}
          type='button'
        >
          &#5171;
        </button>
      </div>
    </div>
  );
}

export default TriviaApp;
