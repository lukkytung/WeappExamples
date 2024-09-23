// utils/lunar.js
const {
  Lunar,
  Solar,
  LunarMonth,
  LunarYear,
  LunarSolarConverter,
  LunarUtil
} = require('./lunar-javascript'); // 引入lunar-JavaScript库

function currentLunar(){
  return Lunar.fromDate(new Date());
}

function getLunarYears(startYear, endYear) {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    const lunar = Lunar.fromYmd(year, 1, 1);
    years.push(` ${year} ` + lunar.getYearInGanZhi());
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
  // console.log(`年份：${year} 月份：${month}`)
  var lunarMonth = LunarMonth.fromYm(year, month);
  const days = [];
  for (let d = 1; d <= lunarMonth.getDayCount(); d++) {
    const lunar = Lunar.fromYmd(year, month, d, );
    days.push(lunar.getDayInChinese());
  }

  return days;
}
/**
 * 转为阳历
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function convertSolar(year, month, day) {
  // 实例化
  var lunar = Lunar.fromYmd(year, month, day);
  // console.log(lunar);

  // 转阳历
  var solar = lunar.getSolar();
  // console.log(solar.toString());
  // console.log(solar.toFullString());
  return solar
}

/**
 * 转为阴历
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function convertLunar(yearNum, monthNum, dayNum) {
  // 实例化
  const dateStr = `${yearNum}-${monthNum}-${dayNum}`;
  let [year, month, day] = dateStr.split('-').map(part => part.padStart(2, '0')); 
  var solar = Solar.fromDate(new Date(`${year}-${month}-${day}`));
  // console.log(solar);

  // 转阴历
  var lunar = solar.getLunar();

  // console.log(lunar.toString());
  // console.log(lunar.toFullString());
  return lunar;
}


module.exports = {
  currentLunar,
  getLunarYears,
  getLunarMonths,
  getLunarDays,
  convertSolar,
  convertLunar,
};