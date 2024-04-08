
export const generatePassword = (fullName, dob) => {
  // Extract initials from full name
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  // Extract year from date of birth
  const year = dob.split("-")[0];

  // Generate password based on initials and year
  let password = initials.toUpperCase() + year;

  // Ensure the password is at least 8 characters
  const minLength = 8;
  while (password.length < minLength) {
    const additionalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomCharacter = additionalCharacters.charAt(Math.floor(Math.random() * additionalCharacters.length));
    password += randomCharacter;
  }

  return password;
};
