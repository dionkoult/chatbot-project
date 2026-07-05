import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import SpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const time = dayjs().valueOf();
  const timeFormatted = dayjs(time).format('HH:mm');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setInputText('');

    if(isLoading === true || inputText === '') {
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        time: timeFormatted,
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: <img
          className = "loading-spinner"
          src = {SpinnerImage}>
        </img>,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        time: timeFormatted,
        id: crypto.randomUUID()
      }
    ]);

    setIsLoading(false);
  }

  function keyActions(event) {
    if (event.key === "Enter") {
      sendMessage();
    }

    if (event.key === "Escape") {
      setInputText('');
    }
  }

  function clearMessages() {
    localStorage.clear();
    setChatMessages([]);
  }

  return (
    <div className = "chat-input-container">
      <input 
        placeholder = "Send a message"
        size = "30"
        onChange = {saveInputText}
        value = {inputText}
        onKeyDown = {keyActions}
        className = "chat-input"
      />
      <button
        onClick = {sendMessage}
        className = "send-button"
      >Send</button>
      {chatMessages.length > 0 && <button 
        onClick = {clearMessages}
        className = "clear-button">
          Clear
        </button>}
    </div>
  );
}