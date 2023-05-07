// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"a",
      path:"/static/ikun.jpg"
  },
  getUserName:function(){
    var that = this;
      console.log("name");
      wx.getUserInfo({
        success: function(res){
          console.log(res.userInfo.nickName);
          that.setData({name: res.userInfo.nickName,
          path: res.userInfo.avatarUrl})
          //调用成功触发
        },
        fail: function(res){
          console.log("fail",res)
          //调用失败后触发
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  click:function(e){
    console.log(e);
    var name = e.currentTarget.dataset.name;
    console.log(name);
    // 跳转
    wx.navigateTo({
      url: '/pages/personalInformation/personalInfermation?name='+ name,
    })
  }
})