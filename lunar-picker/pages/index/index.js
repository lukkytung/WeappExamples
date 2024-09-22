// pages/lunar-picker/lunar-picker.js
const lunar = require('../../utils/lunar.js');

Page({
  data: {
    years: [],
    pickerData: [
      [],
      [],
      []
    ],
    pickerValue: [0, 0, 0],
    selectedDate: '',
    selectedYear: 1900,
    selectedMonth: 1, // 阳历月份（数字）
    selectedDay: 1, // 阳历日期（数字）
    leapMonthIndex: -1, // 当前年份中闰月所在的索引，-1为当年无闰月
    selectedSolarDate: '',
  },

  onLoad() {
    // 初始化年份列表（带天干地支），例如1800到2100
    const years = lunar.getLunarYears(1800, 2100);
    this.setData({
      years
    });

    // 初始化默认选择为当前年份
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    // 将当前阳历日期转为阴历
    const lunarMonth = lunar.convertLunar(currentYear, currentMonth, currentDay).getMonthInChinese()
    const lunarDay = lunar.convertLunar(currentYear, currentMonth, currentDay).getDayInChinese()

    const yearIndex = years.findIndex(y => {
      return y.slice(0, 5).includes(`${currentYear}`)
    });

    // 获取对应年份的月份
    const months = lunar.getLunarMonths(currentYear);
    const monthIndex = months.findIndex(m => {
      return m.replace('闰', '').replace('月', '').includes(`${lunarMonth}`)
    });

    // 获取对应月份的天数
    const days = lunar.getLunarDays(currentYear, 1);
    const dayIndex = days.findIndex(d => {
      return d.includes(`${lunarDay}`)
    });
    const d = lunar.currentLunar();

    this.setData({
      selectedYear: currentYear,
      selectedMonth: d.getMonth(),
      selectedDay: d.getDay(),
      years,
      pickerData: [years, months, days],
      pickerValue: [yearIndex, monthIndex, dayIndex],
      selectedDate: `${years[yearIndex]} ${months[monthIndex]} ${days[dayIndex]}`,
    });
  },

  onColumnChange(e) {
    const {
      column,
      value
    } = e.detail;
    let {
      pickerValue,
      pickerData,
      years,
      selectedYear,
      selectedMonth,
      selectedDay,

    } = this.data;

    if (column === 0) {
      // 年份改变，更新月份和天数
      const selectedYear = parseInt(years[value].slice(0, 5));
      const newMonths = lunar.getLunarMonths(selectedYear);
      // 获取当前选中的月份索引
      pickerData[1] = newMonths;
      const newMonthsIdx = pickerValue[1] >= newMonths.length ? newMonths.length - 1 : pickerValue[1];
      // 选中的月份（阴历数字，闰年为负数）
      var monthNum = 1;
      if (pickerData[1][newMonthsIdx].includes("闰")) {
        monthNum = newMonthsIdx == 0 ? -1 : -newMonthsIdx;
      } else {
        monthNum = this.data.leapMonthIndex < 0 || newMonthsIdx < this.data.leapMonthIndex ? newMonthsIdx + 1 : newMonthsIdx
      }

      const newDays = lunar.getLunarDays(selectedYear, monthNum);
      pickerData[2] = newDays;

      const newDayIdx = pickerValue[2] >= newDays.length ? newDays.length - 1 : pickerValue[2];
      pickerValue = [value, newMonthsIdx, newDayIdx];
      // 闰月所在的索引
      const leapMonthIndex = pickerData[1].findIndex(m => {
        return m.includes("闰")
      });
      this.setData({
        selectedYear,
        selectedMonth: monthNum,
        selectedDay: newDayIdx + 1,
        pickerData,
        leapMonthIndex,
        pickerValue,
        selectedDate: `${years[value]} ${newMonths[newMonthsIdx]} ${newDays[newDayIdx]}`,
      });
    } else if (column === 1) {
      // 月份改变，更新天数
      const selectedYear = parseInt(years[pickerValue[0]].slice(0, 5));
      // 选中的月份中文（阴历）
      const selectedMonthCN = pickerData[1][value];

      var daysInMonth = [];
      // 选中的月份（阴历数字，闰年为负数）
      var monthNum = 1;
      if (selectedMonthCN.includes("闰")) {
        monthNum = value == 0 ? -1 : -value;
      } else {
        monthNum = this.data.leapMonthIndex < 0 || value < this.data.leapMonthIndex ? value + 1 : value
      }
      daysInMonth = lunar.getLunarDays(selectedYear, monthNum);

      const newDayIdx = pickerValue[2] >= daysInMonth.length ? daysInMonth.length - 1 : pickerValue[2];

      pickerData[2] = daysInMonth;
      pickerValue = [pickerValue[0], value, newDayIdx];

      this.setData({
        selectedYear,
        selectedMonth: monthNum,
        selectedDay: newDayIdx + 1,
        days: daysInMonth,
        pickerData,
        pickerValue,
        selectedDate: `${years[pickerValue[0]]} ${selectedMonthCN} ${daysInMonth[newDayIdx]}`,
      });
    } else {
      // 滚动日期
      pickerValue[2] = value
      this.setData({
        selectedDay: value + 1,
        pickerValue,
        selectedDate: `${years[pickerValue[0]]} ${pickerData[1][pickerValue[1]]} ${pickerData[2][value]}`,
      })
    }
    console.log(`阴历数字：${this.data.selectedYear} ${this.data.selectedMonth} ${this.data.selectedDay}`);
    const solar = lunar.convertSolar(this.data.selectedYear, this.data.selectedMonth, this.data.selectedDay)

    console.log(`阳历：${solar.getYear()}-${solar.getMonth()}-${solar.getDay()}`);
  },

  onPickerChange(e) {
    const {
      value
    } = e.detail;
    const {
      years,
      selectedYear,
      selectedMonth,
      selectedDay,
      pickerData
    } = this.data;
    const selectedYearStr = years[value[0]];
    const selectedMonthStr = pickerData[1][value[1]];
    const selectedDayStr = pickerData[2][value[2]];
    this.setData({
      selectedDate: `${selectedYearStr} ${selectedMonthStr} ${selectedDayStr}`,
    });

    console.log(`【确定】阴历数字：${selectedYear} ${selectedMonth} ${selectedDay}`);
    const solar = lunar.convertSolar(selectedYear, selectedMonth, selectedDay)
    this.setData({
      selectedSolarDate: solar.toString()
    })
    console.log(`【确定】阳历：${solar.getYear()}-${solar.getMonth()}-${solar.getDay()}`);
  },
});