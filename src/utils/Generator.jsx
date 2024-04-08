export const generatePassword = (fullName, dob) => {
  // Extract initials from full name
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  // Extract year from date of birth
  const year = dob.split("-")[0];

  // Generate password based on initials and year
  const password = initials.toUpperCase() + year;

  return password;
};
