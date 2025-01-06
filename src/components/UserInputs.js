// src/components/UserInputs.js

import React from "react";
import { Form } from "react-bootstrap";

function UserInputs({
  alphabet,
  setAlphabet,
  lastName,
  setLastName,
  birthYear,
  setBirthYear,
  homeCleaning,
  setHomeCleaning,
  zodiacAnimal,
  setZodiacAnimal,
}) {
  return (
    <>
      <Form.Group controlId="formFirstAlphabet" class="formQuestion">
        <Form.Label>What is the first alphabet of your first name?</Form.Label>
        <br />
        <Form.Control
          as="select"
          value={alphabet}
          onChange={(e) => setAlphabet(e.target.value)}
        >
          <option value="">Select a letter</option>
          {[...Array(26)].map((_, i) => (
            <option key={i} value={String.fromCharCode(65 + i)}>
              {String.fromCharCode(65 + i)}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formLastName" class="formQuestion">
        <Form.Label>What is your last name?</Form.Label>
        <br />
        <Form.Control
          type="text"
          placeholder="Last name here"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBirthYear" class="formQuestion">
        <Form.Label>What is your birth year?</Form.Label>
        <br />
        <Form.Control
          as="select"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        >
          <option value="">Select a year</option>
          {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="zodiacAnimal" className="formQuestion">
        <Form.Label>What is your Zodiac Animal?</Form.Label>
        <br />
        <Form.Control
          as="select"
          value={zodiacAnimal}
          onChange={(e) => setZodiacAnimal(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Rat">Rat</option>
          <option value="Ox">Ox</option>
          <option value="Tiger">Tiger</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Dragon">Dragon</option>
          <option value="Snake">Snake</option>
          <option value="Horse">Horse</option>
          <option value="Goat">Goat</option>
          <option value="Monkey">Monkey</option>
          <option value="Rooster">Rooster</option>
          <option value="Dog">Dog</option>
          <option value="Pig">Pig</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formCleaningFrequency" class="formQuestion">
        <Form.Label>How regularly do you clean your home?</Form.Label>
        <br />
        <Form.Control
          as="select"
          value={homeCleaning}
          onChange={(e) => setHomeCleaning(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="everyday">Every day</option>
          <option value="every-other-day">Every other day</option>
          <option value="once-a-week">Once a week</option>
          <option value="once-every-2-weeks">Once every 2 weeks</option>
          <option value="once-a-month">Once a month</option>
          <option value="no-regular-cleaning">
            No regular cleaning, only adhoc deep/spring cleaning once in a while
          </option>
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default UserInputs;
