//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    videosModel: [{
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }, {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
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
    console.log(option);
    var that = this

  },
  onReady: function () {
    console.log('onReady')
    this.setData({
      motto: 'hello world'
    })
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
