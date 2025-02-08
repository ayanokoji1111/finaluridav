import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState("keyboard");
  const [phonetic, setPhonetic] = useState("/ˈkiːbɔːrd/");
  const [audio, setAudio] = useState(null);
  const [meaning, setMeaning] = useState([]);
  const [error, setError] = useState("");

  const fetchWordData = async (query) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
      const data = await response.json();

      if (response.ok) {
        setWord(data[0].word);
        setPhonetic(data[0].phonetics[0]?.text || "N/A");
        const pronunciation = data[0].phonetics.find((p) => p.audio);
        setAudio(pronunciation ? pronunciation.audio : null);
        setMeaning(data[0].meanings[0].definitions.map((def) => def.definition));
        setError("");
      } else {
        setError("Word not found. Try another!");
        setWord("");
        setPhonetic("");
        setMeaning([]);
        setAudio(null);
      }
    } catch (error) {
      setError("Error fetching data. Try again later!");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      fetchWordData(search);
    }
  };

  const playAudio = () => {
    if (audio) {
      new Audio(audio).play();
    }
  };

  return (
    <div className="container">
      {/* Removed ToggleTheme from here! */}

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">🔍</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {!error && word && (
        <>
          <div className="word-container">
            <div>
              <h1 className="word">{word}</h1>
              <p className="phonetic">{phonetic}</p>
            </div>
            {audio && (
              <button className="play-button" onClick={playAudio}>🔊</button>
            )}
          </div>

          <div className="meaning-section">
            <h2 className="meaning-title">Meaning</h2>
            <ul className="meaning-list">
              {meaning.map((def, index) => (
                <li key={index}>{def}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Dictionary;
