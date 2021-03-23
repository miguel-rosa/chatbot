import { ChatStorage } from "./context/ChatContext";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <ChatStorage>
      <Chatbot/>
    </ChatStorage>
  );
}

export default App;
