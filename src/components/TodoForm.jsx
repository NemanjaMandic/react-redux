import React from "react";

export default ({ currentTodo, changeCurrent }) => {
  const handleInputChange = e => {
    const val = e.target.value;
    changeCurrent(val);
  };
  return (
    <form>
      <input type="text" onChange={handleInputChange} value={currentTodo} />
    </form>
  );
};
