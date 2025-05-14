import React, { useState } from 'react';
import api from '../services/api';

export default function ChatBox({ onResponse }) {
  const [question, setQuestion] = useState('');

  const askQuestion = async () => {
    const res = await api.ask(question);
    onResponse(res.data);
    setQuestion('');
  };

  return (
    <div>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a business question..."
      />
      <button onClick={askQuestion}>Ask</button>
    </div>
  );
}
