import React from "react";
import styled from "styled-components";

export default function Welcome({ currentUser }) {
  if (!currentUser) {
    return null;
  }

  return (
    <Container>
      <h1>
        Welcome, <span>{currentUser.username}!</span>
        <div>Select Person to Chat</div>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #03989e;
  }
`;
