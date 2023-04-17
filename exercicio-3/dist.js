"use strict";

var dayjs = require('dayjs');
function myDate(dateOfBirth) {
  var todayDate = new Date();
  var idade = dayjs(todayDate).diff(dateOfBirth, 'year');
  var birthDay = dayjs(dateOfBirth).add(idade + 1, 'year');
  var daysToBirthDay = dayjs(todayDate).diff(birthDay, 'day');
  console.log("\n  Voc\xEA tem ".concat(idade, " anos, completa ").concat(idade + 1, " anos em ").concat(Math.abs(daysToBirthDay), " dias, no dia ").concat(birthDay.format('DD/MM/YYYY'), "."));
}
myDate('1991-07-24');
