import React, { useState } from "react";
import ReactDOM from "react-dom";

// const Form = () => {
//   // update state from user input
//   const [formState, setFormState] = useState({ player1: "", player2: "" });

//   setFormState({
//       ...formState,
//       [name]: value,
//   })

// //   const handleChange = (event) => {
// //       const { name, value } = event.target;
// //   };

//   // submit form
//   const handleFormSubmit = () => {
//       console.log(formState);
//   }

//   // clear form
//   setFormState({
//       player1: '',
//       player2: '',
//   });
//   return (
//       // form to enter and compare 2 players ppr fantasy points projected
//       <form onSubmit={handleFormSubmit}>
//         <label for="Player 1">Player 1</label>
//         <input type="text"></input>
//         <label for="Player 2">Player 2</label>
//         <input type="text"></input>
//         <input type="submit" value="Submit"></input>
//       </form>
//   )
// };

// export default Form;

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter name of player 1:
        <input
          type="text"
          name="player 1"
          value={inputs.player1 || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter name of player 2:
        <input
          type="text"
          name="player 2"
          value={inputs.player2 || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById("root"));

export default Form;
