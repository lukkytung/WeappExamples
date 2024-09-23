// components/custom-picker/index.js
const lunar = require('../../utils/lunar');
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    startYear: {
      type: Number,
      value: 1800,
    },
    endYear: {
      type: Number,
      value: 2100,
    },
    isSolar: {
      type: Boolean,
      value: true,
      observer: function (newVal, oldVal) {
        if (newVal) {
          this.configSolarPicker()
        } else {
          this.configLunarPicker()
        }
      }
    },
    solarPickerValue: {
      type: String,
      value: "",
    },
    lunarPickerValue: {
      type: [],
      value: [0, 0, 0],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    years: [],
    pickerData: [
      [],
      [],
      []
    ],
    lunarPickerValue: [0, 0, 0],
    selectedDate: '',
    yearNum: 2024,
    monthNum: 1, // 阳历月份（数字）
    dayNum: 1, // 阳历日期（数字）
    leapMonthIndex: -1, // 当前年份中闰月所在的索引，-1为当年无闰月
    dateSolar: '',
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      if (this.properties.isSolar) {
        this.configSolarPicker()
      } else {
        this.configLunarPicker()
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    configSolarPicker() {
      const date = new Date()
      const dateLunar = lunar.convertLunar(date.getFullYear(), date.getMonth() + 1, date.getDate())

      this.triggerEvent("change", {
        dateLunar: `${date.getFullYear()} ${dateLunar.getYearInGanZhi()} ${dateLunar.getMonthInChinese()}月 ${dateLunar.getDayInChinese()}`,
        dateSolar: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      })
    },
    configLunarPicker() {
      // 初始化年份列表（带天干地支），例如1800到2100
      const years = lunar.getLunarYears(this.properties.startYear, this.properties.endYear);
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
      const solar = lunar.convertSolar(currentYear, d.getMonth(), d.getDay())
      const selectedDate = `${years[yearIndex]} ${months[monthIndex]} ${days[dayIndex]}`;
      const dateSolar = solar.toString();
      this.setData({
        yearNum: currentYear,
        monthNum: d.getMonth(),
        dayNum: d.getDay(),
        years,
        selectedDate,
        pickerData: [years, months, days],
        lunarPickerValue: [yearIndex, monthIndex, dayIndex],
        dateSolar,
      });
      this.triggerEvent("change", {
        dateLunar: selectedDate,
        dateSolar: dateSolar,
      })
    },
    onColumnChange(e) {
      const {
        column,
        value
      } = e.detail;
      let {
        lunarPickerValue,
        pickerData,
        years,
      } = this.data;

      if (column === 0) {
        // 年份改变，更新月份和天数
        const yearNum = parseInt(years[value].slice(0, 5));
        const newMonths = lunar.getLunarMonths(yearNum);
        // 获取当前选中的月份索引
        pickerData[1] = newMonths;
        const newMonthsIdx = lunarPickerValue[1] >= newMonths.length ? newMonths.length - 1 : lunarPickerValue[1];
        // 选中的月份（阴历数字，闰年为负数）
        var monthNum = 1;
        if (pickerData[1][newMonthsIdx].includes("闰")) {
          monthNum = newMonthsIdx == 0 ? -1 : -newMonthsIdx;
        } else {
          monthNum = this.data.leapMonthIndex < 0 || newMonthsIdx < this.data.leapMonthIndex ? newMonthsIdx + 1 : newMonthsIdx
        }

        const newDays = lunar.getLunarDays(yearNum, monthNum);
        pickerData[2] = newDays;

        const newDayIdx = lunarPickerValue[2] >= newDays.length ? newDays.length - 1 : lunarPickerValue[2];
        lunarPickerValue = [value, newMonthsIdx, newDayIdx];
        // 闰月所在的索引
        const leapMonthIndex = pickerData[1].findIndex(m => {
          return m.includes("闰")
        });
        this.setData({
          yearNum,
          monthNum,
          dayNum: newDayIdx + 1,
          pickerData,
          leapMonthIndex,
          lunarPickerValue,
          // selectedDate: `${years[value]} ${newMonths[newMonthsIdx]} ${newDays[newDayIdx]}`,
        });
      } else if (column === 1) {
        // 月份改变，更新天数
        const yearNum = parseInt(years[lunarPickerValue[0]].slice(0, 5));
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
        daysInMonth = lunar.getLunarDays(yearNum, monthNum);

        const newDayIdx = lunarPickerValue[2] >= daysInMonth.length ? daysInMonth.length - 1 : lunarPickerValue[2];

        pickerData[2] = daysInMonth;
        lunarPickerValue = [lunarPickerValue[0], value, newDayIdx];

        this.setData({
          yearNum,
          monthNum,
          dayNum: newDayIdx + 1,
          days: daysInMonth,
          pickerData,
          lunarPickerValue,
        });
      } else {
        // 滚动日期
        lunarPickerValue[2] = value
        this.setData({
          dayNum: value + 1,
          lunarPickerValue,
        })
      }
    },

    onPickerChange(e) {
      if (this.properties.isSolar) {
        this.solarPickerChange(e);
      } else {
        this.lunarPickerChanger(e);
      }
    },
    solarPickerChange(e) {
      const date = new Date(e.detail.value)
      const dateLunar = lunar.convertLunar(date.getFullYear(), date.getMonth() + 1, date.getDate())

      this.triggerEvent("change", {
        dateLunar: `${date.getFullYear()} ${dateLunar.getYearInGanZhi()} ${dateLunar.getMonthInChinese()}月 ${dateLunar.getDayInChinese()}`,
        dateSolar: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      })
    },
    lunarPickerChanger(e) {
      const {
        value
      } = e.detail;
      const {
        years,
        yearNum,
        monthNum,
        dayNum,
        pickerData
      } = this.data;
      const selectedYearStr = years[value[0]];
      const selectedMonthStr = pickerData[1][value[1]];
      const selectedDayStr = pickerData[2][value[2]];
      const selectedDate = `${selectedYearStr} ${selectedMonthStr} ${selectedDayStr}`;
      this.setData({
        selectedDate
      });

      // console.log(`【确定】阴历数字：${yearNum} ${monthNum} ${dayNum}`);
      const solar = lunar.convertSolar(yearNum, monthNum, dayNum)
      const dateSolar = solar.toString();
      this.setData({
        dateSolar
      })
      // console.log(`【确定】公历：${solar.getYear()}-${solar.getMonth()}-${solar.getDay()}`);
      this.triggerEvent("change", {
        dateLunar: selectedDate,
        dateSolar: dateSolar,
      })
    }
  }
})