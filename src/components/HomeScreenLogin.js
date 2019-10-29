import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// import { buildUp } from "../utils/animations";

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
    history.push("/Fetch");
  }

  const StyledDiv = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    padding: 8px;
  `;
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

    boxShadow: "0 8px 8px -2px #00ceff",

    border: "2px solid #00CEFF"
  };

  return (
    <>
      <StyledDiv>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl
              input
              type="email"
              style={inputStyle}
              autoFocus
              required
              placeholder="Please Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              input
              style={inputStyle}
              placeholder="Please Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="password"
              required
            />
          </FormGroup>
          <StyledDiv>
            <Button
              style={LoginButtonStyle}
              disabled={!validateForm()}
              type="submit"
              onClick={() => {
                handleDirectToPath();
              }}
            >
              Login
            </Button>
          </StyledDiv>
        </form>
      </StyledDiv>
    </>
  );
}
