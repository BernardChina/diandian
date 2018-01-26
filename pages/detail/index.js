// pages/Detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoModel: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    baseModel: {
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    },
    propertyModel: {
      shareNum: '',
      commentNum: '10',
      loveNum: 5
    },
    relativeVideosModel: [{
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: '',
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: '',
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: '',
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: '',
    }],
    commentsModel: [{
      avatar: "http://tool.58pic.com/tubiaobao//Public/app/00/00/02/552cc7082b007_32.png",
      name: "科比",
      time: "2018-01-15 8:21",
      des: "打不得不错，很赞"
    }, {
      avatar: "http://tool.58pic.com/tubiaobao//Public/app/00/00/02/552cc7082b007_32.png",
      name: "詹姆斯",
      time: "2018-01-15 8:21",
      des: "科比，你老了，打不动了"
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  shareTap: function () {
    wx.showToast({
      title: '请点击右上角进行分享',
      icon: 'none',
      duration: 2000
    })
  },
  messageTap: function () {
    wx.navigateTo({
      url: '../comment/comment'
    })
  },
  heartTap: function () {
    console.log(this.data.propertyModel.loveNum++);
    wx.showToast({
      title: '点赞成功',
      icon: 'sucess',
      duration: 2000
    })
    this.setData({ 'propertyModel.loveNum': this.data.propertyModel.loveNum++ })
  }

})