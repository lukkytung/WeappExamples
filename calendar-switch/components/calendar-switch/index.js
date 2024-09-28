// components/calendar-switch/index.js
Component({  
  properties: {  
    // 这里可以定义一些外部传入的属性  
  },  
  data: {  
    current: 'solar', // 当前选中的类型  
    sliderPosition: 0, // 滑块位置百分比  
  },  
  methods: {  
    toggleSwitch: function(e) {  
      const type = e.currentTarget.dataset.type;  
      const isSolar = type === 'solar';  
      const newPosition = isSolar ? 0 : 100;  
  
      this.setData({  
        current: type,  
        sliderPosition: newPosition,  
      });  
  
      // 如果需要，可以在这里添加动画效果或者延迟  
      // 例如使用 wx.createAnimation 创建动画  
    }  
  }  
});