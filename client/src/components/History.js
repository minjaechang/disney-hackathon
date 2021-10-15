import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const response = await fetch("http://localhost:5000/disneyhistory");
      const data = await response.json();
      setHistory(data);
    };
    getHistory();
  }, []);

  return (
    <div>
      <ul>
        {history.length ? (
          history.map(({ text, weirdness, gif }) => (
            <div>
              {console.log("component", history)}
              <p className="mood">Mood: {text}</p>
              <p className="weirdness">Weirdness: {weirdness}</p>
              <img src={gif} alt="something disney related" className="gif" />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};
