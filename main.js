初始化()
setInterval(() => {// 这里 setTimeout 改成setInterval
    //$('.images > img:nth-child(n)'),这里是从第一张开始 没有第n个
    //$('.images > img:nth-child(n)') 改成ES6语法 $(`.images > img:nth-child(${n})`)
    //${n}:意思是 n 是几 这里就是几
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current')
    n += 1
},3000)

//定义一个函数 确保 n + 1 也在 1~3 之中
function x(n){
 if(n > 3){
    n = n % 3 // n等于4时，n%3等于1,也就是n等于4时，让n等于1
    if(n === 0){
      n = 3 // 当n等于6，n%3等于0，这时让n等于3
    }// n 一直会等于 1 2 3 
  }
  return n 
}

//初始化
function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
  $(`.images > img:nth-child(${n+1})`).addClass('enter')
  $(`.images > img:nth-child(${n+1}`).addClass('enter')
 
}
