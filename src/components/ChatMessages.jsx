import { useAutoScroll } from "../custom hooks/useAutoScroll";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  if (chatMessages.length === 0) {
    return (
      <div className = "welcome-message-container">
        <div className = "welcome-message">
          Welcome to the chatbot project!<br></br>Send a message using the textbox below.
        </div>
      </div>
    );
  }

  return (
    <div className = "chat-messages-container" ref = {chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            time = {chatMessage.time}
            key = {chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;