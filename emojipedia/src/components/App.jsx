import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {

  function createEntry(entry) {
    return (
      <Entry 
      key={entry.id} 
      emoji={entry.emoji} 
      caption={entry.name} 
      meaning={entry.meaning} />
    )
  }

  return (
    <div>
      <h1>
        <span>My Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
