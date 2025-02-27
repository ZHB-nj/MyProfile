import React, { useState } from "react";
import styled from "styled-components";
import OpenAI from "openai";

// 配置 OpenAI API
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // 如果使用 Vite
  dangerouslyAllowBrowser: true, 
});



// 样式
const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const ChatWindow = styled.div`
  max-height: 200px;
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background: #f9fafb;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #1e40af;
  }
`;

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { user: "You", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);
  
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        max_tokens: 50,
      });
  
      if (response && response.choices) {
        const botReply = response.choices[0].message.content;
        setMessages((prev) => [...prev, { user: "Chatbot", text: botReply }]);
      } else {
        setMessages((prev) => [...prev, { user: "Chatbot", text: "No response from AI" }]);
      }
    } catch (error) {
      console.error("OpenAI API Error:", error);
      setMessages((prev) => [...prev, { user: "Chatbot", text: "API Error, check console!" }]);
    }
  
    setLoading(false);
  };
  

  return (
    <ChatbotWrapper>
      <h2>Chatbot</h2>
      <ChatWindow>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </ChatWindow>
      <div>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <Button onClick={handleSend} disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </Button>
      </div>
    </ChatbotWrapper>
  );
}


export default Chatbot;
