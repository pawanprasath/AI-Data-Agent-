import React from 'react';

export default function ResponseTable({ data }) {
  if (!data || data.length === 0) return null;
  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((h) => <td key={h}>{row[h]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
