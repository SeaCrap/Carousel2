初始化()
setInterval(() => {
   makeLeave(getImage(n))//这里返回值是 undefined 后边接 .one 会报错
        .one('transitionend',(e) => {//transitionend 上个动画结束后)
          //e.currentTarget 当前元素
          // let 当前元素 = e.currentTarget
          //makeEnter($(当前元素))
            makeEnter($(e.currentTarget) 
        })
    makeCurrent(getImage(n + 1))
    n += 1
},3000)

















/*********下边是封装的函数**********/


//确保 n 范围一直在 1~3
function x(n){
 if(n > 3){
    n = n % 3 
    if(n === 0){
      n = 3 
    }
  }
  return n 
}

//初始化
function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter') 
}

//current 状态
function makeCurrent($node){
  $node.removeClass('enter leave').addClass('current')
}
//leave 状态
function makeLeave($node){
  $node.removeClass('current enter').addClass('leave')
    return $node // 这时 makeLeave 返回值不是 undefined 了
}
//enter 状态
function makeEnter($node){
  $node.removeClass('current enter').addClass('enter')
}

//getImage
function getImage(n){
  return $(`.images > img:nth-child(${x(n)}`)
}
