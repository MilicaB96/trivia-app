import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/trivia/slice";
function FilterTrivia() {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        onChange={({ target }) => dispatch(setFilter(target.value))}
      />
    </div>
  );
}

export default FilterTrivia;
