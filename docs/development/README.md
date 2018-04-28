#### mobile开发流程  

## 安装vue项目

```html
vue init webpack my-project
 cd my-project
 npm run dev


```

## 安装插件

```js
yarn add mand-mobile
yarn add babel-plugin-import
yarn add sass-loader
yarn add style-loader
yarn add postcss-pxtorem
```

```javascript
修改代码//

// .babelrc
{
  plugins: [
    [import, {
      libraryName: "mand-mobile"
    }]
  ]
}
```



```js
// .postcssrc.js配置
module.exports = {
  'plugins': [
    require('postcss-pxtorem')({
      rootValue: 100,
      propWhiteList: []
    })
  ]
}
```

## 配置hotcss，解决手机端自适应的问题

```js
export var hotcss = {};
        //根据devicePixelRatio自定计算scale
        //可以有效解决移动端1px这个世纪难题。
        var viewportEl = document.querySelector('meta[name="viewport"]'),
            hotcssEl = document.querySelector('meta[name="hotcss"]'),
            dpr = window.devicePixelRatio || 1,
            maxWidth = 540,
            designWidth = 0;

        dpr = dpr >= 3 ? 3 : ( dpr >=2 ? 2 : 1 );

        //允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
        if (hotcssEl) {
            var hotcssCon = hotcssEl.getAttribute('content');
            if (hotcssCon) {
                var initialDprMatch = hotcssCon.match(/initial\-dpr=([\d\.]+)/);
                if (initialDprMatch) {
                    dpr = parseFloat(initialDprMatch[1]);
                }
                var maxWidthMatch = hotcssCon.match(/max\-width=([\d\.]+)/);
                if (maxWidthMatch) {
                    maxWidth = parseFloat(maxWidthMatch[1]);
                }
                var designWidthMatch = hotcssCon.match(/design\-width=([\d\.]+)/);
                if (designWidthMatch) {
                    designWidth = parseFloat(designWidthMatch[1]);
                }
            }
        }

        document.documentElement.setAttribute('data-dpr', dpr);
        hotcss.dpr = dpr;

        document.documentElement.setAttribute('max-width', maxWidth);
        hotcss.maxWidth = maxWidth;

        if( designWidth ){
            document.documentElement.setAttribute('design-width', designWidth);
            hotcss.designWidth = designWidth;
        }

        var scale = 1 / dpr,
            content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';

        if (viewportEl) {
            viewportEl.setAttribute('content', content);
        } else {
            viewportEl = document.createElement('meta');
            viewportEl.setAttribute('name', 'viewport');
            viewportEl.setAttribute('content', content);
            document.head.appendChild(viewportEl);
        }



    hotcss.px2rem = function( px , designWidth ){
        //预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem。就是这么贴心。
        if( !designWidth ){
            //如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸;
            //否则可以在第二个参数告诉我你的设计图是多大。
            designWidth = parseInt(hotcss.designWidth , 10);
        }

        return parseInt(px,10)*320/designWidth/20;
    }

    hotcss.rem2px = function( rem , designWidth ){
        //新增一个rem2px的方法。用法和px2rem一致。
        if( !designWidth ){
            designWidth = parseInt(hotcss.designWidth , 10);
        }
        //rem可能为小数，这里不再做处理了
        return rem*20*designWidth/320;
    }

    hotcss.mresize = function(){
        //对，这个就是核心方法了，给HTML设置font-size。
        var innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;

        if( hotcss.maxWidth && (innerWidth/hotcss.dpr > hotcss.maxWidth) ){
            innerWidth = hotcss.maxWidth*hotcss.dpr;
        }

        if( !innerWidth ){ return false;}

        document.documentElement.style.fontSize = ( innerWidth*20/320 ) + 'px';

        hotcss.callback && hotcss.callback();

    };

    hotcss.mresize(); 
    //直接调用一次

    window.addEventListener( 'resize' , function(){
        clearTimeout( hotcss.tid );
        hotcss.tid = setTimeout( hotcss.mresize , 33 );
    } , false ); 
    //绑定resize的时候调用

    window.addEventListener( 'load' , hotcss.mresize , false ); 
    //防止不明原因的bug。load之后再调用一次。


    setTimeout(function(){
        hotcss.mresize(); 
        //防止某些机型怪异现象，异步再调用一次
    },333)

```

```js
// main.js
import {hotcss} from './hotcss'

```

## 解决中文在cmd乱码的问题

```js
// cmd命令
chcp 936

```

## 文件目录

```js
src
    components
    store
    pages
    
```

src

-   component

  ​        head

  ​        main

  ​        foot

-   store

-   pages 

  ​        login

- ​

- ​

##### svg

- 安装依赖

```js
npm install svg-sprite-loader --save-dev
or
yarn add svg-sprite-loader
```

- webpack配置

```js
     {
        test: /\.svg$/i,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/svg')],
      },
       //resolve后不需要加..src是因为新的脚手架已经在之前定义了
          {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/svg')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
          在这里配置加上exclude：
```

