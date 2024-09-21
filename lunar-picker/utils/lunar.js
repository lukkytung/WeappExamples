// utils/lunar.js
const {
  Lunar,
  LunarMonth,
  LunarYear,
  LunarSolarConverter,
  LunarUtil
} = require('./lunar-javascript'); // 引入lunar-JavaScript库

function getLunarYears(startYear, endYear) {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    const lunar = Lunar.fromYmd(year, 1, 1);
    years.push(` ${year}` + lunar.getYearInGanZhi());
    // years.push(` ${year}`);
  }
  return years;
}

function getLunarMonths(year) {
  const lunarYear = LunarYear.fromYear(year);
  // 获取当年月份
  var tempMonths = []
  var months = lunarYear.getMonthsInYear();
  for (var i = 0, j = months.length; i < j; i++) {
    // console.log(lunarYear.getLeapMonth())
    if (lunarYear.getLeapMonth() === i && lunarYear.getLeapMonth() != 0) {
      // 闰月
      let monthStr = months[i].toString().slice(5, 8)
      tempMonths.push(monthStr)
    } else {
      // 非闰月
      let monthStr = months[i].toString().slice(5, 7)
      tempMonths.push(monthStr)
    }
  }
  return tempMonths;
}

function getLunarDays(year, month) {
  console.log(`年份：${year} 月份：${month}`)
  var lunarMonth = LunarMonth.fromYm(year, month);
  const days = [];
  for (let d = 1; d <= lunarMonth.getDayCount(); d++) {
    const lunar = Lunar.fromYmd(year, month, d, );
    days.push(lunar.getDayInChinese());
  }

  return days;
}

module.exports = {
  getLunarYears,
  getLunarMonths,
  getLunarDays,
};