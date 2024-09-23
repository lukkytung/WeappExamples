// pages/lunar-picker/lunar-picker.js
const lunar = require('../../utils/lunar.js');

Page({
  data: {
    dateLunar: "",
    dateSolar: "",
    checked: true,
  },
  onLoad(options) {

  },
  onPickerChange(e) {
    // console.log(e)
    const {
      dateLunar,
      dateSolar
    } = e.detail
    this.setData({
      dateLunar,
      dateSolar
    })
  },
  onSwitchChange(e) {
    const checked = e.detail.value
    this.setData({
      checked
    })
  }
});