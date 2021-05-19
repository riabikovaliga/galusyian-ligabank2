import { CURRENCIES, DURATION_UNITS } from "./const";

export const disablePageScrolling = () => {
  document.body.classList.add("no-scrolling");
};

export const enablePageScrolling = () => {
  document.body.classList.remove("no-scrolling");
};

export const addSpacesAfterThreeCharacters = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};

export const convertPercentToString = (num) => {
  return num ? `${num.toFixed(2).toString().replace(".", ",")}%` : "";
};

export const deleteLine = (value, strings) => {
  let startLine = -1;
  for (let i = 0; i < strings.length; i++) {
    if (value.indexOf(strings[i]) !== -1) {
      startLine = value.indexOf(strings[i]);
    }
  }
  return startLine !== -1
    ? value.substring(0, startLine).split(" ").join("")
    : value.split(" ").join("");
};

export const onFocusInput = (evt, strings) => {
  return addSpacesAfterThreeCharacters(deleteLine(evt.target.value, strings));
};

export const onBlurInput = (value, strings, line) => {
  deleteLine(value, strings);
  return addSpacesAfterThreeCharacters(value) + line;
};

export const getSumInitialFee = (price, rate) => {
  return (Number(deleteLine(price, CURRENCIES)) / 100) * rate;
};

export const getDurationUnit = (time) => {
  const lastDigit = String(time)[String(time).length - 1];
  const exclusions = [11, 12, 13, 14];
  const isExclusions = exclusions.includes(time);
  if (lastDigit === "1" && !isExclusions) {
    return DURATION_UNITS[0];
  }
  if (Number(lastDigit) >= 2 && Number(lastDigit) <= 4 && !isExclusions) {
    return DURATION_UNITS[1];
  }
  return DURATION_UNITS[2];
};
