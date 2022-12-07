<!--
 * @Autor: GXL
 * @Date: 2022-08-07 21:12:58
 * @E-mail: 1515533507@qq.com
 * @LastEditTime: 2022-08-17 23:36:14
 * @FilePath: \note\blogcode\docs\fontend\css\README.md
 * @Description: I see that all living beings have no intention, but I moved my heart to you
-->
# CSS常见易忘实用的一些知识点


## 比较不常见的选择器
* font-size的最小值为12px
* font-style:italic为斜体
* text-indent:2em一般为缩进两个字符
* line-height可以为纯数字，表示的是当前元素的字体大小
* letter-space 文字间隙


# 选择器
选择器:帮助精确的选中想要的元素

## 简单的选择器

1. ID选择器
2. 类选择器
3. 通配符选择器
4. 属性选择器  [class="b"]
5. 元素选择器
6. 伪类选择器
7. 伪元素选择器

a标签的四种伪类选择器
1) link:超链接未访问的状态
2) visited:超链接访问过后的状态
3) hover:鼠标悬停的状态
4) active: 激活状态，鼠标按下状态

after和before两个伪元素选择器:


## 选择器的组合
1. 并且 p.red -> 带有class为red的p元素
2. 后代元素
3. 子元素  >  p>a 表示p元素的后代为a元素的子元素
4. 后面的第一个兄弟元素 +  .mian+li:表示跟.mian相邻的兄弟元素
5. 后面的所有兄弟元素 ~


# 层叠
声明冲突:同一个样式，多次应用到同一个元素
层叠:解决声明冲突的过程,浏览器主动处理(按权重计算)

## 常见的重置样式表
* normalize.css reset.css 

# 属性继承

通常，跟文字内容相关的属性都能被继承

## 属性值的计算过程
浏览器的渲染过程: 渲染每个元素的前提条件,改元素的所有css属性必须有值
过程: 
* 1.确定声明值:参考样式表中没有冲突的声明,作为css属性值
* 2.层叠冲突:对样式表有冲突的声明使用层叠规则，确定css属性值
* 3.使用继承:对任然没有值的属性，若可以继承，则继承父元素的值
* 4.使用默认值:对任然没有值的属性，使用默认值
```HTMl
<!-- 如果设置了div的color,由于a标签有默认的颜色，所以不会改变a标签的颜色 -->
<div>  
  <!-- 可以对a标签使用 color:inherit 强制继承父元素的值 -->
  <a href="http://"></a>  
  <p>p元素</p>
</div>
```
## 盒子模型
box: 盒子，每个元素在页面中都会生成一个矩形区域
盒子类型:
1. 行盒：display等于inline的元素,不独占一行
2. 块盒: display等于block的元素,独占一行
常见的块盒: 容器元素 div p h1-h6 span
常见的行盒: span a img video audio

盒子的组成: 
内容(content)+填充(padding)+边框(border)+外边距(margin)

# 盒模型的应用
## 改变内容的宽高
普通情况下，设置宽高为内容盒的宽高
解决方法：
1. 自己手动计算
2. 设置box-sizing: border-box;   // 表示宽高为边框盒子

## 改变背景的覆盖范围
默认情况下，背景覆盖边框盒
通过background-clip进行修改
   
