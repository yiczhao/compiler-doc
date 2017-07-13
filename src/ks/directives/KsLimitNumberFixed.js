// VERSION: '0.2.0'
export default {
        params: ['limit','min','max'],
        twoWay: true,
        bind () {
            
            var limit = this.params.limit || this.params.max || 100000
            var min = this.params.min || 0
            
            if(this.el.addEventListener){
                this.el.addEventListener('input', e=>{
                    this.handler.call(this,limit,min)
                })
            }else if(this.el.attachEvent){
                this.el.attachEvent('onpropertychange',event=> {
                    if(event.propertyName!='value') return
                    this.handler.call(this,limit,min)
                })
            }else{
                this.el.addEventListener('keyup', ()=>{
                    this.handler.call(this,limit,min)
                })
            }


        },
        handler(limit,min) {

            //debugger
            // var reg = new RegExp('^[0-9]+(\\.[0-9]{0,'+this.arg+'})?$')

            var tempVal = this.el.value
            
            if(tempVal.length==1 && tempVal=="-" && min!=0) return 
               
            if(+tempVal<-1){
                console.log(tempVal,Math.abs(tempVal))
                tempVal = '-'+this.getPureVal(tempVal.slice(1),Math.abs(min))

            }else{
                tempVal = this.getPureVal(tempVal,limit)
            }

            this.el.value = tempVal
            this.set(tempVal)
            
        },
        getPureVal(tempVal,limit){
            var ints,fixed
            if(tempVal=='' || isNaN(parseInt(tempVal))) {
                tempVal = ''
            }else{
                ints = this.getInts(tempVal,limit)
                fixed = this.getFixed(tempVal,this.arg)
                tempVal = ints+fixed
            }
            return tempVal
        },

        /**
         * 获取整数部分
         * INF 无穷大
         */
        getInts (tempVal,limit){
            var ints = parseInt(tempVal, 10)
            if(limit!='INF' && ints > limit){
                ints = (''+ints).substr(0,(''+limit).length)
            }
            if(limit!='INF' && ints > limit){
                ints = (''+ints).substr(0,(''+limit).length-1)
            }


            return ints
        },

        // 获取小数部分
        getFixed (tempVal,limit){
            //debugger
            var fixed = '',tempVal = tempVal.toString(),
                fixedVal = tempVal.split('.')[1]
            // console.log('tempVal',tempVal)
            if(+limit && ~tempVal.indexOf('.')){
                if(fixedVal.length!=1){
                    fixedVal.split('').map(t=>{
                     fixed += isNaN(parseInt(t)) 
                                    ? ''
                                    : parseInt(t)
                    })
                }else{
                    fixed = fixedVal
                    fixed = isNaN(parseInt(fixed)) 
                                    ? ''
                                    : parseInt(fixed)
                }
                
               
                fixed = '.'+ ((''+fixed).substr(0,limit))
            }
            // console.log('fixed',fixed)
            return fixed
        }
    }