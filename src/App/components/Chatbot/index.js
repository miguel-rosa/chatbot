import { useState, useContext } from "react";
import * as S from "./styles.js";

import { ChatContext } from "../../context/ChatContext"
import Header from "../Header";
import Message from "../Message";

const DEFAULT_MESSAGES = [
  {
    sender:"bot",
    message:"Hello, be welcome!",
    options: [
      {
        text: "Option 1"
      },
      {
        text: "Option 2"
      }
    ]
  },
  {
    sender:"user",
    message:"Hello, thanks!"
  }
]

const DEFAULT_USER = {
  name: "Miguel Rosa",
  photo: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80"
};

const Chatbot = () => {
  const { messages, setMessages } = useContext(ChatContext);
  // const [messages, setMessage] = useState(DEFAULT_MESSAGES)
  const [user, setUser] = useState(DEFAULT_USER);
  return (
    <S.Chatbot>
      <Header user={user}/>
      <S.Chat> 
        {
          messages.length && messages.map( item => (
            <Message item={item}/>
          ))
        }
      </S.Chat>
    </S.Chatbot>
  );
}

export default Chatbot;
