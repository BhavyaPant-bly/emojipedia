import React, { useState } from "react";
import "./styles.css";

var typesofemojis = {
  "😃": "Smileys & People",
  "🐻": "Animals & Nature",
  "🍔": "Food & Drink",
  "⚽": "Activity",
  "🌇": "Travel & Places",
  "💡": "Objects",
  "🔣": "Symbols",
  "🎌": "Flags"
};
var dictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face"
};

var emojisweknow = Object.keys(dictionary);
export default function App() {
  var [description, tellemoji] = useState("");

  function meaning(event) {
    var emoji = event.target.value;
    if (dictionary[emoji]) tellemoji((description = dictionary[emoji]));
    else tellemoji((description = "emoji not in database"));
  }
  function emojimeaning(item) {
    tellemoji((description = dictionary[item]));
  }
  return (
    <div className="App">
      <h1>Enter emoji:</h1>
      <input onChange={meaning} />
      <h1>{description}</h1>
      <h1>Emojis We know:</h1>
      {emojisweknow.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem" }}
            key={item}
            onMouseOver={() => emojimeaning(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
