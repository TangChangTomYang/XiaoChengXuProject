// components/y-swiper/y-swiper.js
Component({
  /**
   * Component properties
   */
  properties: {

    list:{
      type:Array,
      value:[],   // 定义属性时, 设定的默认值, 当外面有赋值时会覆盖
      observer:function(newval, oldVal){
          console.log(newval, oldVal)
      }
    },
    
    bannerHeight:{
      type:String,
      value:"320",
      observer:function(newVal, oldval){
        console.log("bannerHeith" + newVal + oldval)
      }
    }

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {


    /**
     * 当swiper 滚动时就会调用
     */
    swiperDidChange(e){
      //console.log(e) 
      if (e.detail.source == "autoplay"){
        //console.log("自动 滚动 当前页: " + e.detail.current)
      }
      else{
        //console.log("用户 滑动 当前页: " + e.detail.current)
      }  
    },
    /**
     *  轮播图点击了
     */
    swiperItemDidTap(e){
      // console.log(e)
      var detail = e.currentTarget.dataset // 传递给外面的数据
      var options = {}  // 事件触发的选项
      this.triggerEvent('swiperItemDidClick', detail, options)
    } 

    
  }
})
 