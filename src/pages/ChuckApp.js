import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../store/chuck/slice";
import { selectJoke } from "../store/chuck/selectors";
function ChuckApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomJoke());
  }, []);
  const joke = useSelector(selectJoke);
  return (
    <div className='containter p-3'>
      <p>{joke}</p>
    </div>
  );
}

export default ChuckApp;
