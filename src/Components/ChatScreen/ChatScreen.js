import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import chat from "../../Assets/chat-ai.jpeg";
import { API_BASE_URL, PROMT_URL } from "../../Services";
import "../ChatScreen/ChatScreen.css";

function ChatScreen() {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [userMessages, setUserMessages] = useState([]);

  const location = useLocation();
  const item = location.state && location.state.category;

  const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, 25);

      return () => clearTimeout(timer);
    }, [currentIndex, text]);

    return <div>{displayText}</div>;
  };
  // const handleClick = () => {
  //   setLoader(true);
  //   axios
  //     .get(`${API_BASE_URL}/${RESPONSE_URL}=${inputValue}`)
  //     .then((res) => {
  //       const newMessage = { input: inputValue, response: res.data };
  //       setUserMessages([...userMessages, newMessage]);
  //       setInputValue("");
  //       setLoader(false);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //       setLoader(false);
  //     });
  // };

  const handleClick = () => {
    setLoader(true);
    const payload = {
      app_id: item?.content_id,
      appDetails: {
        version: "1.0.0",
        addition_field: "addition_field",
      },
      messages: [
        {
          role: "user",
          content: inputValue,
        },
      ],
    };
    axios
      .post(`${API_BASE_URL}${PROMT_URL}`, payload)
      .then((res) => {
        const newMessage = {
          input: inputValue,
          response: res?.data?.choices[0].message.content,
        };
        setUserMessages([...userMessages, newMessage]);
        setInputValue("");
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.error("Error sending typing indicator:", err);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="chat-container">
      <div className="imghead">
        <img className="img" src={chat} alt="chat icon" />
        <h1 className="chat-header">MindMate</h1>
      </div>
      <h1 className="category">{item?.categories}</h1>

      <div className="messages-container">
        {userMessages &&
          userMessages.map((message, index) => (
            <div key={index} className="message user-message">
              <div>
                <strong>You:</strong> {message.input}
              </div>
              <div>
                <strong>Mind Mate:</strong>
                {message.response}
              </div>
            </div>
          ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button onClick={handleClick} disabled={loader}>
          {loader ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
