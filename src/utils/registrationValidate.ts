const MIN_PASSWORD_LENGTH = 7;

const validateEmail = (email: string): string => {
  const regexpToValidateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexpToValidateEmail.test(email.toLowerCase())
    ? ""
    : "Введите корректный email (например, username@mailbox.com).";
};

const validatePassword = (password: string): string => {
  return password.length > MIN_PASSWORD_LENGTH && /\d/.test(password)
    ? ""
    : "Пароль должен содержать минимум 8 символов и включать число.";
};

const validateUsername = (username: string): string => {
  return username ? "" : "Введите имя пользователя.";
};

const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string => {
  return password === confirmPassword ? "" : "Пароли не совпадают.";
};

export {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
};
