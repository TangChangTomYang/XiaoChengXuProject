// components/y-recommends/y-recommends.js
Component({
  /**
   * Component properties
   */
  properties: {
      list:{
        type:Array,
        value:[],
        observer:function(newval, oldval){

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
    recommendsDidClick(e){   
      // console.log(e) 
      var detail = e.currentTarget.dataset // 传递给外面的数据
      var options = {}  // 事件触发的选项
      this.triggerEvent('recommendsDidClick', detail, options)
    }
  }
})
