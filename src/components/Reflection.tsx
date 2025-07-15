'use client';

import React, { useState } from "react";

const Reflection = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">Reflection</h2>
      <p className="mb-4 text-gray-700">What is one leadership lesson you learned recently, and how will you apply it today?</p>
      <div className="mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-gray-100 rounded p-2 mb-1 text-gray-800">{msg}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Reflection; 