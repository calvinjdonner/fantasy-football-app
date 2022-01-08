import React, { useState } from "react";

const Form = () => {
  // update state from user input
  const [formState, setFormState] = useState({ player1: "", player2: "" });

  setFormState({
      ...formState,
      [name]: value,
  })
  
  const handleChange = (event) => {
      const { name, value } = event.target;
  };




  // submit form
  const handleFormSubmit = () => {
      console.log(formState);
  }

  // clear form
  setFormState({
      player1: '',
      player2: '',
  });
  return (
      // form to enter and compare 2 players ppr fantasy points projected
      <form onSubmit={handleFormSubmit}>
        <label for="Player 1">Player 1</label>
        <input type="text"></input>
        <label for="Player 2">Player 2</label>
        <input type="text"></input>
        <input type="submit" value="Submit"></input>
      </form>
  )
};


export default Form;
