// 这样有个bug，3跟1一起动画的时候，由于我们监听过1每次动画完都会添加一个right类，处理bug的方法很简单，改成临时监听，.on改成，one
setTimeout(function(){
    // 1-2一起做动画
    $('.images > img:nth-child(1)').css({
    transform: 'translateX(-100%)'
    })
    $('.images > img:nth-child(2)').css({
    transform: 'translateX(-100%)'
    })
    // 1播放完回到右边
    $('.images > img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('rigth').css({
            transform: 'none'
        })
    })

},2000)


setTimeout(function(){
    // 2-3一起做动画
    $('.images > img:nth-child(2)').css({
    transform: 'translateX(-200%)'
    })
    $('.images > img:nth-child(3)').css({
    transform: 'translateX(-100%)'
    })
    // 2播放完回到右边
    $('.images > img:nth-child(2)').one('transitionend',function(e){
        $(e.currentTarget).addClass('rigth').css({
            transform: 'none'
        })
    })

},4000)

setTimeout(function(){
    // 3-1一起做动画
    $('.images > img:nth-child(3)').css({
    transform: 'translateX(-200%)'
    })
    $('.images > img:nth-child(1)').css({
    transform: 'translateX(-100%)'
    })
    // 3播放完回到右边
    $('.images > img:nth-child(3)').one('transitionend',function(e){
        $(e.currentTarget).addClass('rigth').css({
            transform: 'none'
        })
    })

},6000)
