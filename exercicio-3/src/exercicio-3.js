const dayjs = require('dayjs');

function myDate(dateOfBirth) {
  const todayDate = new Date();
  const idade = dayjs(todayDate).diff(dateOfBirth, 'year');
  const birthDay = dayjs(dateOfBirth).add(idade + 1, 'year');
  const daysToBirthDay = dayjs(todayDate).diff(birthDay, 'day');

  console.log(`
  Você tem ${idade} anos, completa ${idade + 1} anos em ${Math.abs(
    daysToBirthDay,
  )} dias, no dia ${birthDay.format('DD/MM/YYYY')}.`);
}

myDate('1991-07-24');
