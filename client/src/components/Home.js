import { Link } from "react-router-dom";
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

    const src = gif.data.images.original.url;
    setLoading(false);
    setImgURL(src);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Mood
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
            Weird?
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

      {loading ? (
        <p>Loading...</p>
      ) : imgURL ? (
        <img src={imgURL} alt="Who knows?" />
      ) : (
        <></>
      )}
      <div className="link">
        <img
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/9/0/hatk_honey-pot_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603793161.jpeg"
          alt="Honeybottle"
        />
        <Link to="/history">See all gifs!</Link>
      </div>
    </div>
  );
};
