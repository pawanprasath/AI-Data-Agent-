import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import ResponseTable from '../components/ResponseTable';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>AI Data Agent</h1>
      <ChatBox onResponse={setResult} />
      {result && <p>{result.explanation}</p>}
      <ResponseTable data={result?.data} />
    </div>
  );
}