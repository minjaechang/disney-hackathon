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
    <div className="history">
      <ul>
        {history.length ? (
          history.map(({ text, weirdness, gif }) => (
            <li>
              {console.log("component", history)}
              <p className="mood">Mood: {text}</p>
              <p className="weirdness">Weirdness: {weirdness}</p>
              <img src={gif} alt="something disney related" className="gif" />
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <div className="link">
        <img
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/9/0/hatk_honey-pot_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603793161.jpeg"
          alt="Honeybottle"
        />
        <Link to="/">Get a gif</Link>
      </div>
    </div>
  );
};
