const MAX_TEXT_LENGTH = 140;
const MAX_AGE = 17;
const MIN_AGE = 0;

const validateTextLength = (text: string): string => {
  return text.length < MAX_TEXT_LENGTH
    ? ""
    : "Превышено максимальное количество символов - 140 шт.";
};

const validateAge = (age: string): string => {
    const ageNumber = Number(age);
  return ageNumber >= MIN_AGE && ageNumber <= MAX_AGE ? "" : "Введен некорректный возраст";
};

export { MAX_AGE };

export { validateTextLength, validateAge };
