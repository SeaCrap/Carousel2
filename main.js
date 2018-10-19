初始化()
let timer = setInterval(() => {
   makeLeave(getImage(n))
        .one('transitionend',(e) =>{ 
            makeEnter($(e.currentTarget)) 
        })
    makeCurrent(getImage(n + 1))
    n += 1
},3000)

//visibilitychange 页面可见性改变事件
document.addEventListener('visibilitychange',function(){
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer = setInterval(() =>{
      makeLeave(getImage(n))
        .one('transitionend',(e) => {
            makeEnter($(e.currentTarget)) 
        })
      makeCurrent(getImage(n + 1))
      n += 1
    },3000)
  }
})















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
  return $node.removeClass('enter leave').addClass('current')
}
//leave 状态
function makeLeave($node){
  return $node.removeClass('current enter').addClass('leave')
}
//enter 状态
function makeEnter($node){
  return $node.removeClass('current enter').addClass('enter')
}

//getImage
function getImage(n){
  return $(`.images > img:nth-child(${x(n)}`)
}
