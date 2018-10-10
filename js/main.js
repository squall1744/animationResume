


let result = `/* 
* 面试官你好，我是XXX
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
*{
 transition: all 1s;
}
html{
 background: #eee;
}
#code{
 border: 1px solid #aaa;
 padding: 16px;
}

/*我们需要一点代码高亮*/
.token.selector, 
.token.attr-name, 
.token.string, 
.token.char, 
.token.builtin, 
.token.inserted {
  color: #690;
}

.token.punctuation {
  color: #999;
}

.token.property, 
.token.tag, 
.token.boolean, 
.token.number, 
.token.constant, 
.token.symbol, 
.token.deleted {
  color: #905;
}

/*加点3D效果*/
#code {
  transform: rotate(360deg)
}

/* 
* 不玩了, 我来介绍一下我自己吧
* 我需要一张白纸 
*/
#code {
  position: fixed;
  width: 50%;
  height: 100%;
  left: 0;
  top: 0;
}
`

let result2 = `#paper {
  border: 1px solid #aaa;
  position: fixed;
  right: 0;
  top： 0;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border: 1px solid transparent;
}
.content {
  border: 1px solid #aaa;
  width: 100%;
  height: 100%;
  background: white;
}
`

let markdown = `## dff
---
dsfadsfdsafsad
dsfasfasdf
dsafsadf
dsafsadfsadfas

+ sdf
+ sdf
+ ffffff
`