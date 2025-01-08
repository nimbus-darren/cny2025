export const generateLuckyNumbers = (
  alphabet,
  lastName,
  birthYear,
  homeCleaning,
  zodiacAnimal
) => {
  const numbers = [];
  const firstAlphaAscii = alphabet.charCodeAt(0);
  const firstDigitOfAscii = Math.floor(firstAlphaAscii / 10);
  const secondDigitOfAscii = firstAlphaAscii % 10;
  const lengthOfLastName = lastName.replace(/\s+/g, "").length;
  const birthYearString = birthYear.toString();
  const firstBirthYearNumber = Number(birthYearString[0]);
  const secondBirthYearNumber = Number(birthYearString[1]);
  const thirdBirthYearNumber = Number(birthYearString[2]);
  const fourthBirthYearNumber = Number(birthYearString[3]);

  let homeCleaningNumber = 0;
  console.log(lengthOfLastName);
  // Determine homeCleaningNumber using a switch case
  switch (homeCleaning) {
    case "everyday":
      homeCleaningNumber = 1;
      break;
    case "every-other-day":
      homeCleaningNumber = 2;
      break;
    case "once-a-week":
      homeCleaningNumber = 3;
      break;
    case "once-every-2-weeks":
      homeCleaningNumber = 4;
      break;
    case "once-a-month":
      homeCleaningNumber = 5;
      break;
    case "no-regular-cleaning":
      homeCleaningNumber = 6;
      break;
    default:
      homeCleaningNumber = 0; // Default value for other cases
  }

  let zodiacNumber = 0;

  switch (zodiacAnimal.toLowerCase()) {
    case "rat":
      zodiacNumber = 1;
      break;
    case "ox":
      zodiacNumber = 2;
      break;
    case "tiger":
      zodiacNumber = 3;
      break;
    case "rabbit":
      zodiacNumber = 4;
      break;
    case "dragon":
      zodiacNumber = 5;
      break;
    case "snake":
      zodiacNumber = 6;
      break;
    case "horse":
      zodiacNumber = 7;
      break;
    case "goat":
      zodiacNumber = 8;
      break;
    case "monkey":
      zodiacNumber = 9;
      break;
    case "rooster":
      zodiacNumber = 10;
      break;
    case "dog":
      zodiacNumber = 11;
      break;
    case "pig":
      zodiacNumber = 12;
      break;
    default:
      zodiacNumber = 0; // Default value for other cases
  }
  console.log(zodiacNumber);
  // First lucky number
  let firstLuckyNumber = alphabet.charCodeAt(0); // Get ASCII value of the first character
  if (firstLuckyNumber < 0 || firstLuckyNumber > 49) {
    firstLuckyNumber = Math.round(firstLuckyNumber / 2);
  }
  numbers.push(firstLuckyNumber);

  // Second lucky number
  let secondLuckyNumber =
    lengthOfLastName + Number(firstDigitOfAscii) + Number(secondDigitOfAscii);
  if (secondLuckyNumber < 0 || secondLuckyNumber > 49) {
    secondLuckyNumber = 10;
  }
  numbers.push(secondLuckyNumber);

  // Third lucky number
  let thirdLuckyNumber =
    firstBirthYearNumber +
    secondBirthYearNumber +
    thirdBirthYearNumber +
    fourthBirthYearNumber +
    15;
  if (thirdLuckyNumber < 0 || thirdLuckyNumber > 49) {
    thirdLuckyNumber = 20;
  }
  numbers.push(thirdLuckyNumber);

  // Fourth lucky number
  let fourthLuckyNumber =
    Math.round((lengthOfLastName * homeCleaningNumber) / 5) + 1;
  if (fourthLuckyNumber < 0 || fourthLuckyNumber > 49) {
    fourthLuckyNumber = 11;
  }
  numbers.push(fourthLuckyNumber);

  // Fifth lucky number
  let fifthLuckyNumber = Math.round(
    (homeCleaningNumber * firstDigitOfAscii) / 3
  );
  if (fifthLuckyNumber < 0 || fifthLuckyNumber > 49) {
    fifthLuckyNumber = 27;
  }
  numbers.push(fifthLuckyNumber);

  // Sixth lucky number
  let sixthLuckyNumber =
    49 - lengthOfLastName - fourthBirthYearNumber - 2 * zodiacNumber;
  if (sixthLuckyNumber < 0 || sixthLuckyNumber > 49) {
    sixthLuckyNumber = 30;
  }
  numbers.push(sixthLuckyNumber);

  // Seventh lucky number
  let seventhLuckyNumber = Math.round(25 + fourthBirthYearNumber / 2);
  if (seventhLuckyNumber < 0 || seventhLuckyNumber > 49) {
    seventhLuckyNumber = 40;
  }
  numbers.push(seventhLuckyNumber);

  // Handle duplicates
  let i = 1; // Counter for replacing duplicates
  const seen = new Set();

  numbers.forEach((num, index) => {
    while (seen.has(num)) {
      num = i; // Replace duplicate with counter value
      i++;
    }
    numbers[index] = num; // Update the number
    seen.add(num); // Mark as seen
  });

  return numbers;
};
