//index.js
const app = getApp()
 const db = wx.cloud.database();
 const books = db.collection('books');

Page({
    data: {
        imgUrls: [
            'http://img1.imgtn.bdimg.com/it/u=3473906206,1182437144&fm=214&gp=0.jpg',
            'http://att.bbs.duowan.com/forum/201310/14/134854ry1fj9bi9z5xioro.jpg',
            'http://img3.imgtn.bdimg.com/it/u=1794592768,1324587547&fm=214&gp=0.jpg',
            'http://img0.imgtn.bdimg.com/it/u=1839931862,2426578804&fm=26&gp=0.jpg',
            'http://img5.hao123.com/data/desktop/ce944b3e096c31faba5adbf327f5b2a5_1366_768'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        circular: true,
        inputShowed: false,
        inputVal: ""
    },

    onLoad: function() {
        var that = this;
        books.where({
            _openid:'oZCk-5QYRVCAoJyvnsbg4XHfrA3o',
            hot:true
        }).get({
            success(list){
                that.setData({
                    list: list.data
                })
            }
        }),
        setInterval(function(){
            // console.log('123')
        },5000)
    }, showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        console.log(e)
        books.where({
            _openid: 'oZCk-5QYRVCAoJyvnsbg4XHfrA3o',
            title: e.detail.value
        }).get({
            success(list) {
                that.setData({
                    list: list.data
                })
            }
        })
        this.setData({
            inputVal: e.detail.value
        });
    }


})