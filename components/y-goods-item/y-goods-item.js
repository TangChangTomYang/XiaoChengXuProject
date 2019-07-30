// components/y-goods-item/y-goods-item.js
Component({
  /**
   * Component properties
   */
  properties: {
    gIndex:String,
    item:{
      type:Object,
      value:{},
      observer:function(newVal, oldVal){

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
    goodsItemClick(e){
      console.log(e)
      var detail = e.detail
      var options = {}
      this.triggerEvent("goodsItemClick",detail, options)
    }
  }
})
