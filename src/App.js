import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { generateLuckyNumbers } from "./utils/luckyNumberUtils.js";
import UserInputs from "./components/UserInputs.js";
import "./App.css";
import zodiacFortunes from "./assets/zodiacfortunes.js";
import companyLogo from "./assets/images/companyLogo.png";
import { FaEnvelope, FaWhatsapp, FaGlobe } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

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

    if (
      !alphabet ||
      !lastName ||
      !birthYear ||
      !zodiacAnimal ||
      !homeCleaning
    ) {
      alert("Please complete all fields.");
      return;
    }

    const numbers = generateLuckyNumbers(
      alphabet,
      lastName,
      birthYear,
      homeCleaning,
      zodiacAnimal
    );
    setLuckyNumbers(numbers);
    setShowLoremIpsum(true);
    setStage(2);
    setLoremIpsumText(zodiacFortunes[zodiacAnimal.toLowerCase()]);

    setTimeout(() => {
      if (luckyNumbersContainerRef.current) {
        const elementPosition =
          luckyNumbersContainerRef.current.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  };

  // const shareUrl = "https://www.nimbushomes.com"; // Your website or the lucky number page

  return (
    <div className="app-container">
      <h1 className="chinese-new-year-text">
        Nimbus Homes Lucky Numbers Generator 2025
      </h1>
      {/* User input section */}
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

      {showLoremIpsum && (
        <div className="lorem-ipsum-container pre-line">
          {/* Zodiac Image */}
          {zodiacAnimal && (
            <img
              src={zodiacImages[zodiacAnimal.toLowerCase()]}
              alt={`${zodiacAnimal} Zodiac`}
              className="zodiac-image"
              style={{ width: "60%", height: "auto", borderRadius: "10px" }}
              ref={luckyNumbersContainerRef}
            />
          )}
          <div className="lucky-numbers-container">
            {luckyNumbers.map((number, index) => (
              <div key={index} className="lucky-ball">
                <span>{number}</span>
              </div>
            ))}
          </div>
          <p>{loremIpsumText}</p>
          <br />
          <br />
          <p>
            <strong>
              Share your results and get your friends to try it out:
            </strong>
            <br />
            Hint: If their lucky numbers win the TOTO draw, ask them to give you
            a cut 😉
          </p>

          <div className="social-share-icons">
            <EmailShareButton
              subject={`Lucky TOTO number generator from Nimbus Homes`}
              body={`I got my Zodiac fortune from Nimbus Homes, here it is: ${loremIpsumText}. Get yours done and generate your lucky numbers too so we can buy TOTO together. Here's the website:`}
              url={`${window.location.href}`}
            >
              <EmailIcon size={42} round={true} />
            </EmailShareButton>

            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={42} round={true} />
            </FacebookShareButton>

            <TelegramShareButton
              title={`I got my Zodiac fortune from Nimbus Homes, here it is: ${loremIpsumText}. Get yours done and generate your lucky numbers too so we can buy TOTO together.`}
              url={window.location.href}
            >
              <TelegramIcon size={42} round={true} />
            </TelegramShareButton>

            <WhatsappShareButton
              title={`I got my Zodiac fortune from Nimbus Homes, here it is: ${loremIpsumText}. Get yours done and generate your lucky numbers too so we can buy TOTO together.`}
              url={window.location.href}
            >
              <WhatsappIcon size={42} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <img
            src={companyLogo}
            alt="Nimbus Homes Logo"
            className="footer-logo"
          />
          <div className="footer-info">
            <p>
              <strong>Looking to clean your home?</strong>
              <br />
              Book a cleaning session today!
              <div className="footer-links">
                <a href="mailto:hello@nimbushomes.com" className="footer-link">
                  <FaEnvelope size={"2em"} />
                </a>
                <a
                  href="https://wa.me/6587878241"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={"2em"} />
                </a>
                <a
                  href="https://book.nimbushomes.com"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe size={"2em"} />
                </a>
              </div>
            </p>
            <a href="https://www.nimbushomes.com" style={{ color: "white" }}>
              {" "}
              www.nimbushomes.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
