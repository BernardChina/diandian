//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    videosModel: [{
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://pic.qiantucdn.com/58pic/video/27/79/47/27794721_11.mp4',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://pic.qiantucdn.com/58pic/video/27/79/47/27794721_11.mp4',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://pic.qiantucdn.com/58pic/video/27/79/47/27794721_11.mp4',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://pic.qiantucdn.com/58pic/video/27/79/47/27794721_11.mp4',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }],
    animationData: {}
  },
  onLoad: function (option) {
    console.log('onLoad')

  },
  onReady: function () {
    console.log('onReady')
  },
  onShow: function () {
    console.log('onShow')
  },
  onPageScroll: function () {
    // Do something when page scroll
  },

  goToDetail: function (event) {
    console.log("togodeatl")
    wx.navigateTo({
      url: '../detail/index'
    })
  },
  videoTap: function () {

  }

})
