/**
 * @description 日期组件测试
 * @data 2017/7/13
 */
import utils from '../utils'
import apage from '@/components/KsDater/v1.0.0/src/util/apage.js'


describe('KsDater组件',()=>{

    console.log(apage.one_page_date(2017,7).length)
    console.log(apage.month_last_day(2017,7).dater)

})
