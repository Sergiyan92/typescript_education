/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day): boolean {
  return day === Day.Sunday || day === Day.Saturday;
}

const today: Day = Day.Saturday;
const isTodayWeekend: boolean = isWeekend(today);
console.log(isTodayWeekend); // Виведе true, оскільки субота - це вихідний день
