import { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🥐":
    "Croissant: A French crescent-shaped roll made of sweet flaky yeast dough, usually had for breakfast",
  "🥖": "Baguette Bread",
  "🥨":
    "Pretzel: A crisp biscuit baked in the form of a knot or stick and flavoured with salt.",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🥓": "Bacon: A type of salt-cured pork ",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Does this dish even need a meaning? It's Pizzzaaahh",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🧆": "Falafel",
  "🥗": "Here's to something HEALTHY! A Green Salad",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍛": "Curry Rice",
  "🍢": "Oden",
  "🍤": "Fried Shrimp",
  "🍥":
    "Naruto: A ridged fishcake of processed whitefish with an iconic pink swirl, often served in ramen or oden",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🍮": "Custard",
  "🥧": "Pie",
  "🍩": "Doughnut"
};

var emojisWeHave = Object.keys(emojiDictionary);
function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    var meaning = emojiDictionary[userEmojiInput];

    if (meaning === undefined)
      meaning = "We don't have this currently in our pantry";

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <br />
      <h1
        style={{
          backgroundColor: "pink",
          opacity: "0.8",
          width: "50%",
          margin: "0 auto"
        }}
      >
        Nom Nom! <br />
        Food Emoji Interpreter
      </h1>
      <br />
      <input
        className="text-field"
        onChange={emojiInputHandler}
        placeholder="Enter an emoji here"
      />
      <h2>What's this on the menu!? </h2>
      <p>{meaning} </p>
      <div className="menu-space">
        <h4> Our Menu </h4>
        {
          <span>
            {emojisWeHave.map(function (emoji) {
              return (
                <span
                  onClick={() => emojiClickHandler(emoji)}
                  key={emoji}
                  style={{
                    fontSize: "1.5rem",
                    padding: ".9%",
                    cursor: "pointer"
                  }}
                >
                  {emoji}
                </span>
              );
            })}
          </span>
        }
      </div>
    </div>
  );
}

export default App;
