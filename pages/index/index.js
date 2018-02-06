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
      isPlaying: false,
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
      isPlaying: false,
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
      isPlaying: false,
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
      isPlaying: false,
      shareNum: '',
      commentNum: '10',
      loveNum: 5,
      title: "詹姆斯加盟湖人",
      des: "谈了婚姻和家庭，中国有句话，“家和万事兴”，家庭是社会最基本的结构单元，家庭的和谐是社会和谐的基础，和谐了才能谈到发展，否则家中整天处于内耗的状态，哪里还有什么事业和更加有品质的生活呢？希望所有的朋友们都能正视自己的婚姻、家庭，有智慧有理性的去经营，相信每位朋友都会风生水起交好运的！",
      tag: "亲子",
      upTime: "2018-01-25"
    }],
    commentsModel: [{
      avatar: "https://sfault-image.b0.upaiyun.com/396/549/3965493827-5633475731dab_articlex",
      name: "科比",
      time: "2018-01-15 8:21",
      des: "打不得不错，很赞"
    }, {
      avatar: "https://sfault-image.b0.upaiyun.com/396/549/3965493827-5633475731dab_articlex",
      name: "詹姆斯",
      time: "2018-01-15 8:21",
      des: "科比，你老了，打不动了"
    }, {
      avatar: "https://sfault-image.b0.upaiyun.com/396/549/3965493827-5633475731dab_articlex",
      name: "加内特",
      time: "2018-01-15 8:21",
      des: "我已经退役了"
    }, {
      avatar: "https://sfault-image.b0.upaiyun.com/396/549/3965493827-5633475731dab_articlex",
      name: "加内特1",
      time: "2018-01-15 8:21",
      des: "我已经退役了"
    }, {
      avatar: "https://sfault-image.b0.upaiyun.com/396/549/3965493827-5633475731dab_articlex",
      name: "加内特2",
      time: "2018-01-15 8:21",
      des: "我已经退役了"
    }],
    hiddenComment: true,
    commentHeight: 0,
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

  },
  playVieo: function (e) {
    var index = e.currentTarget.id;
    for (var i = 0; i < this.data.videosModel.length; ++i) {
      if (this.data.videosModel[i].isPlaying == true) {
        var that = this
        var array = that.data.videosModel
        array[i].isPlaying = false
        that.setData({
          'videosModel': array
        })
      }
    }

    var that = this
    var array = that.data.videosModel
    array[index].isPlaying = true
    that.setData({
      'videosModel': array
    })
    console.log('myVideo_' + index)
    var videoContext = wx.createVideoContext('myVideo_' + index)
    videoContext.play()
  },
  showComment: function (e) {
    wx.hideTabBar({
      aniamtion: true
    })
    console.log(e.detail.y);
    var res = wx.getSystemInfoSync()
    console.log(res.screenHeight)
    console.log(res.windowHeight)
    this.setData({
      "hiddenComment": false,
      "commentHeight": res.windowHeight - 200
    })
    wx.pageScrollTo({
      scrollTop: e.detail.y - 225,
      duration: 300
    })
  },
  commemtTap: function () {
    wx.showTabBar({
      aniamtion: true
    })
    this.setData({
      "hiddenComment": true
    })

  },
  commentTouchMove: function () {
    console.log("touche move!")
  },
  commentSubmitTap: function () {
    console.log('sss');
  }

})
