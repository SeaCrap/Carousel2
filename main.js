$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')

let n = 1
setInterval(() => {// 这里 setTimeout 改成setInterval
  if(n > 3){
    n = n % 3 // n等于4时，n%3等于1,也就是n等于4时，让n等于1
    if(n === 0){
      n = 3 // 当n等于6，n%3等于0，这时让n等于3
    }// n 一直会等于 1 2 3 
  }
  console.log(n)
    //$('.images > img:nth-child(n)'),这里是从第一张开始 没有第n个
    //$('.images > img:nth-child(n)') 改成ES6语法 $(`.images > img:nth-child(${n})`)
    //${n}:意思是 n 是几 这里就是几
    $(`.images > img:nth-child(${n})`).removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${n + 1})`).removeClass('enter').addClass('current')
    n += 1
},n * 3000)

