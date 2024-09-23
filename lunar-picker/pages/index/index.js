// pages/lunar-picker/lunar-picker.js
const lunar = require('../../utils/lunar.js');

Page({
  data: {
    dateLunar: "",
    dateSolar: ""
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
  }
});