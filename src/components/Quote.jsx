import { useEffect, useState } from "react";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        
        const res = await fetch("https://dummyjson.com/quotes/random");
        console.log(res)
        const data = await res.json();
        setQuote(data.quote);
        
      } catch (err) {
        console.error("Error fetching quote:", err);
      }
    }
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      {quote ? `"${quote}"` : "Loading quote..."}
    </div>
  );
}

export default Quote;
