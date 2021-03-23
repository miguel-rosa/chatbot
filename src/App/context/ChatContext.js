
import { createContext, useReducer } from "react";

export const ChatContext = createContext();

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
];

export const ChatStorage = (props) =>{
  const initialState = DEFAULT_MESSAGES;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  const [messages, setMessages] = useReducer(reducer, initialState);
    
  return(
    <ChatContext.Provider value={{ messages, setMessages }}>
        {props.children}
    </ChatContext.Provider>
  )
};