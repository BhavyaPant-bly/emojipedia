import React, { useState } from "react";
import "./styles.css";

var dictionary = {
  "😃": "Smileys & People",
  "🐻": "Animals & Nature",
  "🍔": "Food & Drink",
  "⚽": "Activity",
  "🌇": "Travel & Places",
  "💡": "Objects",
  "🔣": "Symbols",
};
var smileysndpeople = {
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
 var TravelndPlaces={
"🚐":"Minibus",
"🚑":"Ambulance",
"🚒":"Fire Engine",
"🚓":"Police Car",
"🚕":"Taxi",
"🚗":"Automobile",
"🎆":"Fireworks",
"🎇":"Sparkler",
"🛰️":"Satellite",
"🚀":"Rocket",
"🛸":"Flying Saucer",
 }
var AnimalndNature = {
"🙈": "See No Evil Monkey",
"🙉":"Hear No Evil Monkey",
"🙊":"Speak No Evil Monkey",
"🌹":"Rose",
"🌺":"Hibiscus",
"💐":"Bouquet",
"⚡":"High Voltage",
"🌠":"Shooting Star",
"🔥":"Fire",
"💧":"Droplet",
"🌊":"Water Wave",
"🎄":"Christmas Tree",
"✨":"Sparkles",
"🎋":"Tanabata Tree",
"🎍":"Pine Decoration",
}

var foodnddrink = {
"🍔":"Hamburger",
"🍟":"French Fries",
"🍕":"Pizza",
"🌭":"Hot Dog",
"🥪":"Sandwich",
"🍩":"Doughnut",
"🍪":"Cookie",
"🎂":"Birthday Cake",
"🍰":"Shortcake",
"🧁":"Cupcake",
"🥧":"Pie",
"🍾":"Bottle with Popping Cork",
"🍺":"Beer Mug",
"🍻":"Clinking Beer Mugs",
"🥂":"Clinking Glasses",
}

var Activity={
"⚽":"Soccer Ball",
"⚾":"Baseball",
"🥎":"Softball",
"🏀":"Basketball",
"🏐":"Volleyball",
"🏈":"American Football",
"🏉":"Rugby Football",
"🎾":"Tennis",
"🥏":"Flying Disc",
"🎳":"Bowling",
"🏏":"Cricket Game",
"🎸":"Guitar",
"🎹":"Musical Keyboard",
"🎺":"Trumpet",
"🎻":"Violin",
"🥁":"Drum",
}

var Objects={
"🧧":"Red Envelope",
"🎀":"Ribbon",
"🎁":"Wrapped Gift",
"🤿":"Diving Mask",
"🪀":"Yo - Yo",
"🪁":"Kite",
}
var Symbols={
"💘":" Heart with Arrow",
"💝":"Heart with Ribbon",
"💖":"Sparkling Heart",
"💗":"Growing Heart",
"💓":"Beating Heart",
"💞":"Revolving Hearts",
"💕":"Two Hearts",
"❣️":"Heart Exclamation",
"💔":"Broken Heart",
"❤️️":"Red Heart",
"🧡":"Orange Heart",
"💛":"Yellow Heart",
"💚":"Green Heart",
"💙":"Blue Heart",
"💜":"Purple Heart",
"🤎":"Brown Heart",
"🖤":"Black Heart",
"🤍":"White Heart",
"💯":"Hundred Points",
}
var emojisweknow = Object.keys(dictionary);
var smiley = Object.keys(smileysndpeople);
var animal = Object.keys(AnimalndNature);
var travel = Object.keys(TravelndPlaces);
var food = Object.keys(foodnddrink);
var sports = Object.keys(Activity);
var objects = Object.keys(Objects);
var symbols = Object.keys(Symbols);
var typesofemoji = {
  "😃": smiley,
  "🐻": animal,
  "🍔": food,
  "⚽": sports,
  "🌇": travel,
  "💡": objects,
  "🔣": symbols,
}


export default function App() {
  var [description, tellemoji] = useState("");

  var [listing,listofemojis]=useState("");


  var [type, printtype] = useState("");

  function meaning(event) {
    var emoji = event.target.value;
    if (smileysndpeople[emoji]) 
     {tellemoji(description = smileysndpeople[emoji])}
    else if (AnimalndNature[emoji]) 
     {tellemoji(description = AnimalndNature[emoji])}
    else if (TravelndPlaces[emoji]) 
    { tellemoji(description = TravelndPlaces[emoji]) }
    else if (foodnddrink[emoji]) 
    { tellemoji(description = foodnddrink[emoji]) }
    else if (Activity[emoji]) 
    { tellemoji(description = Activity[emoji]) }
    else if (Objects[emoji]) 
    { tellemoji(description = Objects[emoji]) }
    else if (Symbols[emoji]) 
    { tellemoji(description = Symbols[emoji]) }
   
    
    else 
      tellemoji((description = "emoji not in database"));
  }
  function emojimeaning(item) {
  if (dictionary[item])
    tellemoji((description = dictionary[item]));
  else if (smileysndpeople[item])
    tellemoji((description = smileysndpeople[item]));
  else if (AnimalndNature[item])
    tellemoji((description = AnimalndNature[item]));
  else if (TravelndPlaces[item])
    tellemoji((description = TravelndPlaces[item]));
  else if (foodnddrink[item])
    tellemoji((description = foodnddrink[item]));
  else if (Activity[item]) 
    tellemoji(description = Activity[item]);
  else if (Objects[item])
    tellemoji(description = Objects[item]);
  else if (Symbols[item])
    tellemoji(description = Symbols[item]);
  }
  function listemojis(item)  {
    printtype(type=dictionary[item])
    listofemojis(listing=typesofemoji[item].map(
      value=>{return (<span key={value}>{value}</span>);}
      ))
  }
  
  return (
    <div className="App">
      <h1>EMOJIPEDIA</h1>
      <div className="Search">
      <span></span>
      <input onChange={meaning} />
    </div>
      <h1>{description}</h1>
      <h1>Emojis We know:</h1>
      {emojisweknow.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem" }}
            key={item}
            onMouseOver={() => emojimeaning(item)}
            onClick={()=> listemojis(item)}
          >
            {item}
          </span>
        );
      })}
      <h1>{type}</h1>
      <h1>{listing}
          </h1>
    </div>
  );
}

