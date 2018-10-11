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
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border: 1px solid #aaa;
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

writeCode('', result, 10, () => {
  createPaper(() => {
    writeCode(result, result2, 10, () => {
      writeMarkdown(markdown, 10)
    })
  })
})

/*
屏幕上自动写代码功能, 接受四个参数: 
preCode-上次写入屏幕的内容, code-本次写入屏幕的内容， speed- 显示速度, callback-回调函数

之所有需要上次写入的内容是为了解决Prism重复添加标签的bug
*/
function writeCode(preCode, code, speed, callback) {
  let dom = document.querySelector('#code')
  let styleTag = document.querySelector('#styleTag')
  let n = 0

  //用setTimeout模拟setInterval, 这么做主要是为了可以随意调速
  let id = setTimeout(function fn() {
    dom.innerHTML = Prism.highlight(
      preCode + code.substring(0, n),
      Prism.languages.css
    )
    styleTag.innerHTML = preCode + code.substring(0, n)

    //屏幕自动滚动
    dom.scrollTop = dom.scrollHeight

    n++

    if (n <= code.length) {
      id = setTimeout(fn, speed)
    } else if (n > code.length) {
      callback.call()
    }
  }, speed)
}

//创建paper功能
function createPaper(callback) {
  let div = document.createElement('div')
  div.id = 'paper'
  let content = document.createElement('pre')
  content.className = 'content'
  div.appendChild(content)
  document.body.appendChild(div)
  callback.call()
}

function writeMarkdown(markdown, callback, speed) {
  let markdowmDom = document.querySelector('.content')
  let n = 0
  let id = setTimeout(function fn() {
    markdowmDom.innerHTML = markdown.substring(0, n)
    markdowmDom.scrollTop = markdowmDom.scrollHeight
    n++
    if(n <= markdown.length) {
      id = setTimeout(fn, speed)
    }else if(n > markdown.length) {
      callback.call()
    }
  }, speed)
}
