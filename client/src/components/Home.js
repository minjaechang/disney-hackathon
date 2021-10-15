import { useState } from "react";

export const Home = () => {
  const [text, setText] = useState("");
  const [weirdness, setWeirdness] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const requestBody = {
      url: `https://api.giphy.com/v1/gifs/translate?api_key=YSu0JniiEIwGNO6ay2esAXbO3eRvrZwt&s=${text}-disney&weirdness=${weirdness}`,
      text,
      weirdness,
    };

    const response = await fetch("http://localhost:5000/disneymood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const gif = await response.json();
    console.log(gif);
    const src = gif.data.images.original.url;

    setImgURL(src);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              name="text"
              type="text"
              placeholder="Enter your Disney mood?"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="weirdness"
              type="number"
              placeholder="How weird are you feeling today?"
              onChange={(event) => setWeirdness(event.target.value)}
              value={weirdness}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Disney and gifs!</p>
      <img src={imgURL} alt="Who knows?" />
    </div>
  );
};