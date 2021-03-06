import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import FlexDiv from "../components/FlexDiv";
// import { buildUp } from "../utils/animations";

const inputStyle = {
  fontFamily: "futura",
  fontSize: "17px",
  color: "white",
  background: "#2E2E2EE6",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px",
  textAlign: "center",
  minWidth: "200px",
  boxShadow: "0 8px 8px -2px #00ceff",

  border: "2px solid #00CEFF"
};

const LoginButtonStyle = {
  fontFamily: "futura",
  color: "white",
  background: "#2E2E2EE6",
  padding: "8px",
  margin: "5px",
  borderRadius: "10px",
  textAlign: "center",

  maxWidth: "60px",
  boxShadow: "0 8px 8px -2px #00ceff",

  border: "2px solid #00CEFF"
};

export default function HomescreenPasswordInput(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleDirectToPath() {
    history.push("/News");
  }

  return (
    <FlexDiv>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          style={inputStyle}
          autoFocus
          required
          placeholder="Please Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Please Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password"
          required
        />
        <button
          style={LoginButtonStyle}
          disabled={!validateForm()}
          type="submit"
          onClick={() => {
            handleDirectToPath();
          }}
        >
          Login
        </button>
      </form>
    </FlexDiv>
  );
}
