import React from "react";
import { func, string } from "prop-types";

const Toggle = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      <span role="img" label aria-label="colorToggleButton">
        🦊🌗
      </span>
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
