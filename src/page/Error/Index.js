import React,{useEffect} from 'react'

function Index() {
  useEffect(()=>{
    const canvs=document.getElementById("myCanvas");
      const ctx=canvs.getContext("2d")
      //绘制一个红色的矩形
      ctx.fillStyle='red'
      ctx.fillRect(50,50,100,100)
      // 绘制一条蓝色的线
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(500,500)
      ctx.strokeStyle='blue'
      ctx.stroke()
      // 绘制一个绿色的圆形
      ctx.beginPath();
      ctx.arc(200, 200, 50, 0, 2 * Math.PI);
      ctx.fillStyle = 'green';
      ctx.fill();
  },[])
  return (
    <div>
      <canvas id="myCanvas" width="200" height="100"></canvas>
      
    </div>
  )
}

export default Index
// 用 ctx.fillStyle 来设置填充颜色。
// 用 ctx.fillRect(x, y, width, height) 绘制填充矩形。
// 用 ctx.strokeStyle 来设置线条颜色。
// 用 ctx.beginPath() 开始一个新的路径绘制。