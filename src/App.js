import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { generateLuckyNumbers } from "./utils/luckyNumberUtils.js"; // Import the lucky numbers function
import UserInputs from "./components/UserInputs.js"; // Import the new UserInputs component
import "./App.css"; // Ensure you're importing your customized CSS
import zodiacFortunes from "./assets/zodiacfortunes.js";
import companyLogo from "./assets/images/companyLogo.svg";

function App() {
  // State to manage user input and generated lucky numbers
  const [alphabet, setAlphabet] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [homeCleaning, setHomeCleaning] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [showLoremIpsum, setShowLoremIpsum] = useState(false);
  const [stage, setStage] = useState(1);
  const [zodiacAnimal, setZodiacAnimal] = useState("");
  const [loremIpsumText, setLoremIpsumText] = useState("");
  // Reference to the lucky numbers container
  const luckyNumbersContainerRef = useRef(null);

  const zodiacImages = {
    rat: require("./assets/images/zodiacpictures/rat.png"),
    ox: require("./assets/images/zodiacpictures/ox.png"),
    tiger: require("./assets/images/zodiacpictures/tiger.png"),
    rabbit: require("./assets/images/zodiacpictures/rabbit.png"),
    dragon: require("./assets/images/zodiacpictures/dragon.png"),
    snake: require("./assets/images/zodiacpictures/snake.png"),
    horse: require("./assets/images/zodiacpictures/horse.png"),
    goat: require("./assets/images/zodiacpictures/goat.png"),
    monkey: require("./assets/images/zodiacpictures/monkey.png"),
    rooster: require("./assets/images/zodiacpictures/rooster.png"),
    dog: require("./assets/images/zodiacpictures/dog.png"),
    pig: require("./assets/images/zodiacpictures/pig.png"),
  };

  // Function to handle generating lucky numbers
  const handleGenerateLuckyNumbers = () => {
    if (stage === 2) {
      alert(
        `Congratulations ${alphabet.toUpperCase()}. ${
          lastName.charAt(0).toUpperCase() + lastName.slice(1)
        }! You found the hidden fortune cookie!🥠 Use Promocode < Happy2025 > to get 15% off one regular home cleaning session at book.nimbushomes.com! Session must be completed by 31 Mar 2025.
        
If you wish to retrieve the lucky numbers for a different user profile, you can do so after closing this alert!`
      );
      window.location.reload();
      return;
    }

    // Validate alphabet
    if (!alphabet) {
      alert("Please select the first alphabet of your name!");
      return;
    }

    // Validate lastName
    if (!lastName.trim()) {
      alert("Last name must be at least 1 character long.");
      return;
    }
    if (lastName.length > 40) {
      alert("Last name cannot exceed 40 characters.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      alert("Last name can only contain alphabets and spaces.");
      return;
    }

    // Validate birthYear
    if (!birthYear) {
      alert("Please input your birth year.");
      return;
    }

    if (!zodiacAnimal) {
      alert("Please select your Zodiac Animal");
      return;
    }

    // Validate homeCleaning
    if (!homeCleaning) {
      alert("Please input how regularly you clean your home.");
      return;
    }

    // Pass inputs to the function to generate lucky numbers
    const numbers = generateLuckyNumbers(
      alphabet,
      lastName,
      birthYear,
      homeCleaning,
      zodiacAnimal
    );
    setLuckyNumbers(numbers);
    setShowLoremIpsum(true); // Show Lorem Ipsum text after generating numbers
    setStage(2);
    setLoremIpsumText(zodiacFortunes[zodiacAnimal.toLowerCase()]);

    // Calculate the position of the lucky numbers container and scroll
    setTimeout(() => {
      if (luckyNumbersContainerRef.current) {
        const elementPosition =
          luckyNumbersContainerRef.current.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Optional: smooth scrolling
        });
      }
    }, 500); // Added a delay to allow time for rendering
  };

  return (
    <div className="app-container">
      <h1 className="chinese-new-year-text">
        Nimbus Homes Lucky Numbers Generator 2025
      </h1>
      <div className="introduction-text-container">
        <p className="introduction-text">
          Wishing you a wonderful start to Year of the Wood Snake! <br />
          To kick off the year with some fun and excitement, we've created a
          special lucky number generator to inspire your TOTO lucky draw picks.
          <br />
          <br />
          The numbers are uniquely generated and take into account your first
          name, last name, birth year, zodiac animal, and home cleaning
          regularity.
          <br />
          <b>(Did you know that a clean home invites wealth and prosperity?)</b>
          <br />
          <br />
          Go ahead and get your lucky numbers for 2025 now! <br />
          <b>HUAT AH!</b>
          <br />
        </p>
      </div>

      {/* User input component */}
      <UserInputs
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        lastName={lastName}
        setLastName={setLastName}
        birthYear={birthYear}
        setBirthYear={setBirthYear}
        homeCleaning={homeCleaning}
        setHomeCleaning={setHomeCleaning}
        zodiacAnimal={zodiacAnimal}
        setZodiacAnimal={setZodiacAnimal}
      />

      <Button onClick={handleGenerateLuckyNumbers} id="luckyButton">
        Get Your Lucky Numbers!
      </Button>

      {/* Show Lorem Ipsum Text after generating numbers */}
      {showLoremIpsum && (
        <div className="lorem-ipsum-container">
          {/* zodiac image here */}
          {zodiacAnimal && (
            <img
              src={zodiacImages[zodiacAnimal.toLowerCase()]}
              alt={`${zodiacAnimal} Zodiac`}
              className="zodiac-image"
              style={{ width: "80%", height: "auto", borderRadius: "10px" }}
            />
          )}
          <br /> <br />
          {/* Lucky Numbers Balls displayed horizontally */}
          <div
            style={{
              padding: "2em",
              border: "1px solid grey",
              borderRadius: "15px",
            }}
          >
            <p style={{ fontSize: "1.3em", paddingBottom: "1em" }}>
              <u>
                <b>Your Personal Lucky Numbers</b>
              </u>
            </p>
            <div
              className="lucky-numbers-container"
              id="luckyNumbers"
              ref={luckyNumbersContainerRef} // Reference to enable scrolling
            >
              {luckyNumbers.map((number, index) => (
                <div key={index} className="lucky-ball">
                  <span>{number}</span>
                </div>
              ))}
            </div>
          </div>
          <p>
            <a
              href="https://www.scmp.com/magazines/style/lifestyle/leisure/article/3293097/chinese-horoscopes-year-wood-snake-2025-predictions-health-wealth-work-and-love-plus-wood-snakes"
              target="_blank"
              rel="noreferrer"
            >
              Fortune from South China Morning Post
            </a>
            :
          </p>
          <p>{loremIpsumText}</p>
        </div>
      )}
      <footer className="footer">
        <div className="footer-container">
          <img
            src={companyLogo}
            alt="Nimbus Homes Logo"
            className="footer-logo"
          />
          <div className="footer-info">
            <p>
              <strong>Nimbus Homes</strong> <br />
              Providing top-notch home cleaning services tailored to your needs.
            </p>
            <p>
              <strong>Contact Us:</strong> <br />
              Email: info@nimbushomes.com <br />
              Phone: +65 1234 5678
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
