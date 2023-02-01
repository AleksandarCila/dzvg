type Day = {
  day: string;
  title: string;
};

type Month = {
  name: string;
  desc: string;
  days: Day[];
};
export type KalendarZdravlja = Month[];
