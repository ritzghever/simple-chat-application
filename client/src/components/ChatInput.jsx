import React, { useState } from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";

export default function ChatInput({ handleSendMessage }) {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMessage(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="Type a message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="submit">
          <IoSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  grid-template-columns: 10% 95%;
  padding: 0 0.5rem;
  .input-container {
    padding: 0.5rem 0.5rem;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #ffffff34;
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      color: white;
      border: none;
      padding: 0 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #ffffff34;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      height: 90%;
      padding: 0.3rem 2rem;
      border-radius: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #03989e;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
