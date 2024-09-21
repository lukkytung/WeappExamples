// pages/lunar-picker/lunar-picker.js
const lunar = require('../../utils/lunar.js');

Page({
  data: {
    years: [],
    months: [],
    days: [],
    pickerData: [
      [],
      [],
      []
    ],
    pickerValue: [0, 0, 0],
    selectedDate: '',
    selectedYear: 1900,
    selectedMonth: 1,
    selectedDay: 1,
    leapMonthIndex: -1, // 当前年份中闰月所在的索引，-1为当年无闰月
  },

  onLoad() {
    // 初始化年份列表（带天干地支），例如1900到2100
    const years = lunar.getLunarYears(1900, 2100);
    this.setData({
      years
    });

    // 初始化默认选择为当前年份
    const currentYear = new Date().getFullYear();

    const yearIndex = years.findIndex(y => {
      return y.slice(0, 5).includes(`${currentYear}`)
    });

    // 获取对应年份的月份
    const months = lunar.getLunarMonths(currentYear);
    this.setData({
      pickerData: [years, months, []],
      pickerValue: [yearIndex, 0, 0],
    });

    // 获取对应月份的天数
    const days = lunar.getLunarDays(currentYear, 1);
    this.setData({
      selectedYear: currentYear,
      selectedMonth: 1,
      selectedDay: 1,
      pickerData: [years, months, days],
      selectedDate: `${years[yearIndex]} ${months[0]} ${days[0]}`,
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
      selectedMonth
    } = this.data;

    if (column === 0) {
      // 年份改变，更新月份和天数
      const selectedYear = parseInt(years[value].slice(0, 5));
      const newMonths = lunar.getLunarMonths(selectedYear);
      const newDays = lunar.getLunarDays(selectedYear, 1);
      pickerData[1] = newMonths;
      pickerData[2] = newDays;
      pickerValue = [value, 0, 0];
      // 闰月所在的索引
      const leapMonthIndex = pickerData[1].findIndex(m => {
        return m.includes("闰")
      });
      this.setData({
        selectedYear,
        pickerData,
        leapMonthIndex,
        pickerValue,
        selectedDate: `${years[value]} ${newMonths[0]} ${newDays[0]}`,
      });
      lunar.convertSolar(selectedYear, 1, 1)
    } else if (column === 1) {
      // 月份改变，更新天数
      const selectedYear = parseInt(years[pickerValue[0]].slice(0, 5));
      const selectedMonth = pickerData[1][value];

      var daysInMonth = [];
      var monthValue = 1;
      if (selectedMonth.includes("闰")) {
        monthValue = value == 0 ? -1 : -value;
      } else {
        monthValue = this.data.leapMonthIndex < 0 || value < this.data.leapMonthIndex ? value + 1 : value
      }
      daysInMonth = lunar.getLunarDays(selectedYear, monthValue);
      pickerData[2] = daysInMonth;
      pickerValue = [pickerValue[0], value, 0];
      this.setData({
        selectedYear,
        selectedMonth: monthValue,
        pickerData,
        pickerValue,
        selectedDate: `${years[pickerValue[0]]} ${selectedMonth} ${daysInMonth[0]}`,
      });
      lunar.convertSolar(selectedYear, monthValue, 1)
    } else {
      // 滚动日期

      lunar.convertSolar(selectedYear, selectedMonth, value + 1)
      this.setData({
        selectedDay: value + 1,
        selectedDate: `${years[pickerValue[0]]}  ${pickerData[1][selectedMonth]} ${pickerData[2][value]}`,
      })
    }
  },

  onPickerChange(e) {
    const {
      value
    } = e.detail;
    const {
      years,
      pickerData
    } = this.data;
    const selectedYear = years[value[0]];
    const selectedMonth = pickerData[1][value[1]];
    const selectedDay = pickerData[2][value[2]];
    this.setData({
      selectedDate: `${selectedYear} ${selectedMonth} ${selectedDay}`,
    });
  },
});