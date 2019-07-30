// pages/home/y-tabCtr/y-tabCtr.js
Component({
  /**
   * Component properties
   */
  properties: {
    tabCtrs:{
      type:Array,
      value:[],
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
    tabCtrDidClick(e){
      var detail = e.currentTarget.dataset;
      var options = {}
      this.triggerEvent("tabCtrDidClick", detail, options)
    }
  }
})
