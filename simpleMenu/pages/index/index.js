//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcome to my resturant',
    background: [{
      className:'demo-text-1',
      img: '../../images/restaurant.jpg'
      }, {
        className:'demo-text-2',
        img: '../../images/restaurant.jpg'
      }, {
        className:'demo-text-3',
        img: '../../images/restaurant.jpg'
      }
    ],
    userInfo:{},
    isLogin: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          isLogin: true
        })
        console.log(res)
      }
    }
  },
  enterMenu: function(e) {
    console.log('navigate{}',e)
    wx.navigateTo({
      url: '../menu/menu'
    })
  },
  enterLogin: function(){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  logout: function() {
    
  }
})
