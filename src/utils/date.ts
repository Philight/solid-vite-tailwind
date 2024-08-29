export const daysBetween = (startDate: Date, endDate: Date): number => {
  // The number of milliseconds in all UTC days (no DST)
  const oneDay: number = 1000 * 60 * 60 * 24;

  // Convert the date objects to UTC dates
  const start: number = Date.UTC(
    endDate.getUTCFullYear(),
    endDate.getUTCMonth(),
    endDate.getUTCDate(),
  );
  const end: number = Date.UTC(
    startDate.getUTCFullYear(),
    startDate.getUTCMonth(),
    startDate.getUTCDate(),
  );

  // Calculate the difference in milliseconds and divide by the number of milliseconds in a day
  return Math.floor((start - end) / oneDay);
};

export const getDayNameFromToday = (date: Date): string => {
  const now = new Date();

  const diff = daysBetween(now, date);

  switch (diff) {
    case 0:
      return "Dnes ";
    case 1:
      return "Zitra ";
    case 2:
      return "Pozítří ";
    default:
      return "";
  }
};

export const formatDate = (date: Date): string => {
  const DATE_DELIMITER = ".";
  const { day, month } = {
    day: date.getDate().toString(),
    month: (date.getMonth() + 1).toString(),
  };
  return `${getDayNameFromToday(date)}${day}${DATE_DELIMITER} ${month}${DATE_DELIMITER}`;
};

export const addDateTime = (date: Date, options?: any): Date => {
  const { years, months, days, hours, minutes, seconds } = options ?? {};
  const d = new Date(date);

  if (years) d.setFullYear(d.getFullYear() + years);
  if (months) d.setMonth(d.getMonth() + months);
  if (days) d.setDate(d.getDate() + days);
  if (hours) d.setHours(d.getHours() + hours);
  if (minutes) d.setMinutes(d.getMinutes() + minutes);
  if (seconds) d.setSeconds(d.getSeconds() + seconds);

  return d;
};
