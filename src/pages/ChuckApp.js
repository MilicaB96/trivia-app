import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke, getNewJoke } from "../store/chuck/slice";
import { selectJoke } from "../store/chuck/selectors";
function ChuckApp() {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomJoke());
  }, []);
  const joke = useSelector(selectJoke);
  return (
    <div className='containter p-3'>
      <p>{joke}</p>
      <input
        type='text'
        placeholder='Enter Category...'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button
        className='btn btn-light m-3'
        onClick={() => {
          dispatch(getNewJoke(category));
        }}
      >
        Get Joke
      </button>
    </div>
  );
}

export default ChuckApp;
