export const SLIDER_PAGES = [`first`, `second`, `third`];
export const USER_DATA = { name: "", tel: "", email: "" };
export const ACCOUNT = { login: "", password: "" };
export const SERVICES = {
  contributions: `Вклады`,
  credits: `Кредиты`,
  insurance: `Страхование`,
  "online-services": `Онлайн-сервисы`,
};
export const INTERVAL_CHANGES_SLIDE = 4000;
export const TOUCH_SENSITIVITY = 20;
export const CURRENCIES = [" рублей"];
export const DURATION_UNITS = [" год", " года", " лет"];
export const MATERNAL_CAPITAL = 470000;
export const MAX_RATE_OF_INCOME = 45;
export const TYPES_CREDIT = [
  { value: "mortgage", label: "Ипотечное кредитование" },
  { value: "car", label: "Автомобильное кредитование" },
];

export const MORTGAGE = {
  type: "mortgage",
  price: {
    min: 1200000,
    max: 25000000,
    step: 100000,
    defaultValue: 2000000,
  },
  initialFee: {
    min: 10,
    max: 100,
    step: 5,
  },
  minSize: 500000,
  duration: {
    min: 5,
    max: 30,
    step: 1,
  },
  rateInitialFeeChangingInterestRate: 15,
  interestRate: [9.4, 8.5],
};

export const CAR = {
  type: "car",
  price: {
    min: 500000,
    max: 5000000,
    step: 50000,
    defaultValue: 1000000,
  },
  initialFee: {
    min: 20,
    max: 100,
    step: 5,
    defaultValue: 20,
  },
  minSize: 200000,
  duration: {
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 5,
  },
  priceChangingInterestRate: 2000000,
  interestRate: [16, 15, 8.5, 3.5],
};

export const PARAMETERS_CREDIT = {
  mortgage: MORTGAGE,
  car: CAR,
};
