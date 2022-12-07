# 样式穿透

css -> >>>
less: /deep/
scss: :deep(选择器)

## 前端开发的各种官网:

1. vue 官网:[vue](https://cn.vuejs.org/index.html)
2. react 官网:[react](https://zh-hans.reactjs.org/)
3. 微信小程序官网:[wxApplet](https://mp.weixin.qq.com/cgi-bin/wx)
4. uni-app 官网:[uni-app](https://zh.uniapp.dcloud.io/)
5. webapck 官网:[webpack](https://webpack.docschina.org/)
6. Pinia 官网:[Pinin](https://pinia.web3doc.top/core-concepts/state.html)
7. Redux 官网:[Redux](http://cn.redux.js.org/)
8. axios 官网:[Axios](http://www.axios-js.com/zh-cn/)
9. node 官网:[node](http://nodejs.cn/)
10. Vite 官网:[Vite](https://cn.vitejs.dev/)
11. [echarts 社区](https://www.isqqw.com/homepage):网友设计了很多好看的 echarts 图标

# 开发常用的库:

::: tip
以下列举了一些开发中我常用到的库
:::

1. vue2 和 vue3 常用的库:[ElementUI](https://element.eleme.cn/#/zh-CN)

```js
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
```

2. react 常用的库:[Ant Design](https://ant.design/components/overview-cn/)
3. vue 和小程序手机端常用的组件库:[Vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/)

4. 初始化样式的库: [normalize.css](http://www.baidu.com)

```js
npm i --save normalize.css
import 'normalize.css'
```

5. 处理时间的库:[moment](http://momentjs.cn/)

```js
import moment from "moment";
// 将其挂载到vue的原型上
Vue.prototype.$moment = moment;
```

6. 处理时间的库:[dayjs](https://dayjs.fenxianglu.cn/)

7. 页面上方显示进度条的库,一般配合网络请求的拦截器使用:[nprogress.js](https://ricostacruz.com/nprogress/)

```js
npm install --save nprogress
```

8. 动画库(一般与 vue 配合使用):[animate.css](https://animate.style/)

9. 数字滚动组件:[vue-count-to]()

```js
npm i vue-count-to
```

10. 可视化的库:[dataV](http://datav.jiaminghi.com/)

```js
// 将自动注册所有组件为全局组件
npm install @jiaminghi/data-view
import dataV from "@jiaminghi/data-view";
Vue.use(dataV);
```

11. 一些动态中常见的'刚刚'，'几小时前'等,使用的一般是[timego.js]()

```js
npm install timeago.js
```

12. echarts 中的资源网站:[madeapie](https://madeapie.com/#/)

# 好用的工具

1. [图床](https://img.top-unistar.com/):有时候，我们希望将一张图片转为服务器的地址,就可以使用到这个工具
2. [书栈网](https://www.bookstack.cn/cate): 特别喜欢这个网站，基本包含计算机的方方面面

# vscode 常用的插件:

1. auto rename tag: 自动同步修改标签
2. Bundle Size: 可以分析导入包的大小
3. EditorConfig for VS Code:对于有些项目有对应的 edit 规范
4. Live Server: 可以开启一个本地服务，直接打开 html 文件
5. Code Runner: 方便直接在本地运行 js 文件
6. Chinese: 将 vscode 设置为中文
7. Project Manager: 很方便的在多个项目中来回切换
8. Remote - SSH: ssh 连接服务器的工具
9. Bracket Pair Colorizer: 方便我们在文件中找到对应的括号
10. JS JSX Snippets: 在开发 React 项目中,可以很方便的提供一些代码片段，比如 rfc
11. Prettier: 代码格式化的插件
12. Vetur: 开发 vue 常用的插件
13. uni-\*系列:方便给出 uni-app 的一些代码提示
14. DotENV: 将一些 dot 文件也将代码显示出不同的颜色

## 大屏可视化适配问题

::: tip
大屏适配问题是一个很重要的问题,对于一个项目，要全屏展示在一个屏幕上
:::

```js
// 在utils中定义 drawMixin.js 文件,
// * 默认缩放值
const scale = {
  width: "1",
  height: "1",
};
// * 设计稿尺寸（px）
const baseWidth = 1920;
const baseHeight = 1080;
// * 需保持的比例（默认1.77778）
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));
export default {
  data() {
    return {
      // * 定时函数
      drawTiming: null,
    };
  },
  mounted() {
    this.calcRate();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    calcRate() {
      const chartHomeRef = this.$refs["chartHomeRef"];
      if (!chartHomeRef) return;
      // 当前宽高比
      const currentRate = parseFloat(
        (window.innerWidth / window.innerHeight).toFixed(5)
      );
      if (chartHomeRef) {
        if (currentRate > baseProportion) {
          // 表示更宽
          scale.width = (
            (window.innerHeight * baseProportion) /
            baseWidth
          ).toFixed(5);
          scale.height = (window.innerHeight / baseHeight).toFixed(5);
          chartHomeRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`;
        } else {
          // 表示更高
          scale.height = (
            window.innerWidth /
            baseProportion /
            baseHeight
          ).toFixed(5);
          scale.width = (window.innerWidth / baseWidth).toFixed(5);
          chartHomeRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`;
        }
      }
    },
    resize() {
      clearTimeout(this.drawTiming);
      this.drawTiming = setTimeout(() => {
        this.calcRate();
      }, 200);
    },
  },
};
```

```html
<div id="app">
  <div id="index">
    <router-view />
  </div>
</div>
```

```css
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
}
#index {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
}
```

# 常见的好的框架
uni-app: http://ruoyi.vip/(若依)
