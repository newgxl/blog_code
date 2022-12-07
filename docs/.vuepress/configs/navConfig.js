const navs = [
  {
    text: '首页',
    link: '/',
  },

  {
    text: '最新文章',
    link: '/latestarticle/',
  },
  {
    text: '前端',
    items: [
      { text: 'HTML', link: '/fontend/html/' },
      { text: 'CSS', link: '/fontend/css/' },
      { text: 'JavaScript', link: '/fontend/js/' },
      { text: 'vue', link: '/fontend/vue/' },
      { text: 'react', link: '/fontend/react/' },
      { text: '小程序', link: '/fontend/applet/' },
      { text: 'uni-app', link: '/fontend/uni-app/' },
      { text: '常用组件', link: '/fontend/common/' },
    ],
  },

  {
    text: '后端',
    items: [
      {
        text: 'Node',
        link: '/backend/node/',
      },
    ],
  },
  {
    text: '其他',
    items: [
      {
        text: 'git',
        link: '/other/git/',
      },
    ],
  },
  
  {
    text: '社交',
    items: [
      {
        text: '掘金',
        link: 'https://juejin.im/user/5900e97b1b69e60058b936ed/posts',
      },
      { text: '简书', link: 'https://www.jianshu.com/u/5ee7ee7fd180' },
      {
        text: 'segmentfault',
        link: 'https://segmentfault.com/u/suibichuanji_5900e1f5bcf67',
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/itclan',
      },
      {
        text: '视频教程',
        link: 'https://space.bilibili.com/267957620',
      },
    ],
  },
  { text: '关于我', link: '/about/' },
];

module.exports = navs;