import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { redirectTo } from "@reach/router";

export default function HomescreenPasswordInput(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const StyledDiv = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    padding: 60px;
  `;
  const divStyle = {
    color: "white",
    background: "#2E2E2E",
    padding: "8px",
    margin: "2px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "200px",
    boxShadow: "0 -8px 8px -2px #00ceff",

    border: "2px solid #00CEFF"
  };

  const LoginButtonStyle = {
    color: "white",
    background: "#2E2E2E",
    padding: "8px",
    margin: "5px",
    borderRadius: "10px",
    textAlign: "center",

    boxShadow: "0 -8px 8px -2px #00ceff",

    border: "2px solid #00CEFF"
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            style={divStyle}
            autoFocus
            placeholder="Please Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            style={divStyle}
            placeholder="Please Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <StyledDiv>
          <Button
            style={LoginButtonStyle}
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
          >
            Login
          </Button>
        </StyledDiv>
      </form>
    </StyledDiv>
  );
}
