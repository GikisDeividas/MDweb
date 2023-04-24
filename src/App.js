import React, { useState, useEffect } from 'react';
import './App.css';
import ImageDisplay from './components/imagedisplay';
import Buttons from './components/buttons';
import AccuracyMessage from './components/accuracymessage';
import './results-container.css';
import ImageCounter from './components/ImageCounter';

function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuesses, setUserGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const [showAccuracy, setShowAccuracy] = useState(false);

  useEffect(() => {
    const humanImages = [...Array(5)].map((_, i) => ({
      src: `${process.env.PUBLIC_URL}/human-made/${i + 1}.jpg`,
      answer: "Human made",
    }));
    const aiImages = [...Array(5)].map((_, i) => ({
      src: `${process.env.PUBLIC_URL}/ai-made/${i + 6}.png`,
      answer: "AI made",
    }));

    const allImages = [...humanImages, ...aiImages];
    allImages.sort(() => Math.random() - 0.5);

    setImages(allImages);
  }, []);

  const handleButtonClick = (guess) => {
    setUserGuesses([...userGuesses, guess]);

    if (guess === images[currentIndex].answer) {
      setScore(score + 1);
    }

    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowAccuracy(true);
    }
  };

  return (
    <div className="App">
      {!showAccuracy && (
        <>
          <ImageDisplay imageUrl={images[currentIndex]?.src} />
          <ImageCounter current={currentIndex + 1} total={images.length} />
          <Buttons
            onHumanButtonClick={() => handleButtonClick("Human made")}
            onAIButtonClick={() => handleButtonClick("AI made")}
          />
        </>
      )}
      {showAccuracy && (
        <div className="results-container">
          <AccuracyMessage accuracy={(score / images.length) * 100} />
          <a
            href="https://discord.com/invite/NBKVbvPpr9"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              console.log("Discord invitation link clicked");
            }}
          >
       We have over 880 images for you to guess! You can see high scores and compete with other players in our observational contest on Discord. The player with the highest accuracy will win a prize of $500 USD. Join us to help with our data research!
          </a>
          <a
            href="https://discord.com/invite/NBKVbvPpr9"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              console.log("Discord logo clicked");
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/discord-logo.png`}
              alt="Discord logo"
              style={{ width: '100px', marginTop: '10px' }}
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
