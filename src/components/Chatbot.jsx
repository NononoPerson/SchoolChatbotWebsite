import React, { useState } from "react";
const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! I'm your school chatbot.", from: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: "user" }, { text: "Let me help you with that!", from: "bot" }]);
    setInput("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>School Chatbot</h2>
      <div style={{ minHeight: 200, border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>{msg.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask me anything..."
        style={{ width: "80%", marginRight: 8 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
import React from "react";

export default function Chatbot() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>✅ School Chatbot is Working!</h1>
      <p>This is a placeholder. Add your chatbot UI here.</p>
    </div>
  );
}

