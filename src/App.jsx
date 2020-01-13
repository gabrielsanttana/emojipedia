import React from 'react';
import Emoji from "./components/Emoji";
import emojipedia from "./emojipedia";
import './App.css';

function App() {
  function renderEmoji(emoji) {
    return (
      <Emoji
        id={emoji.id}
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    )
  }

  return (
    <>
    <h1>
      <span>Emojipedia</span>
    </h1>

    <dl className="dictionary">
        {emojipedia.map(renderEmoji)}
    </dl>
    </>
  );
}

export default App;
