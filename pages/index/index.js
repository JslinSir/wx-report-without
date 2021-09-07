
import { CreatePage } from '../../vendors/sensors/utils'
 

CreatePage({
  data: {
  
  },
  

  handlePageReport(){
    console.log('页面上报事件')
  },


  handleCart(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },


  handleWxReport(){
    wx._$report({name:'jslin'})
  },
  
})
