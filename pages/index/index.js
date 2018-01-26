//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad: function (option) {
    console.log('onLoad')
    console.log(option);
    var that = this
    
  },
  onReady: function () {
    console.log('onReady')
    this.setData({
      motto:'hello world'
    })
  },
  onShow: function () {
    console.log('onShow')
  },
  onPageScroll: function () {
    // Do something when page scroll
  },

  goToDetail:function(event) {
    console.log("togodeatl")
    wx.navigateTo({
      url: '../detail/index'
    })
  }
})
