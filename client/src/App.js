import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [weirdness, setWeirdness] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.prevenDefault();
    setLoading(true);
    const requestBody = { text, weirdness };

    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=YSu0JniiEIwGNO6ay2esAXbO3eRvrZwt&s=dark&weirdness=10"
    );
    console.log(response);
    const gif = await response.json();
    const src = gif.data.images.original.url;
    setImgURL(src);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="text"
            type="text"
            placeholder="Enter your Disney mood?"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        </label>
        <label>
          <input
            name="weirdness"
            type="number"
            placeholder="How weird are you feeling today?"
            onChange={(event) => setWeirdness(event.target.value)}
            value={weirdness}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Disney and gifs!</p>
      <img src={imgURL} alt="Who knows?" />
    </div>
  );
}

export default App;
