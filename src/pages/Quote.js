import { useState, useEffect } from 'react';
import '../styles/Quote.css';

const API_URL = 'http://api.quotable.io/random';
export default function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(API_URL);
      const randomQuote = await response.json();
      setQuote(randomQuote.content);
    };
    setTimeout(() => fetchQuote(), 60000);
  });
  return (
    <h4 id="quote">{ JSON.stringify(quote) }</h4>
  );
}
