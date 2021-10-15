import { useEffect, useState } from "react";

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
              <p>{text}</p>
              <p>{weirdness}</p>
              <img src={gif} alt="something disney related" />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};
