export const generatePassword = (fullName, dob) => {
  // Extract initials from full name
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  // Extract year from date of birth
  const year = dob.split("-")[0];
  let randomYear = Math.floor(Math.random() * (new Date().getFullYear() - 1950)) + 1950; // Generate a random year between 1950 and current year

  // Generate password based on initials and random year
  let password = initials.toUpperCase() + randomYear;

  // Ensure the password is at least 8 characters
  const minLength = 8;
  while (password.length < minLength) {
    const additionalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomCharacter = additionalCharacters.charAt(Math.floor(Math.random() * additionalCharacters.length));
    password += randomCharacter;
  }

  return password;
};

