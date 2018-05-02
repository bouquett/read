# 新web计划
标签（空格分隔）： 技术

---

vue全家桶：vue2+vuex+vue-router-webpack  
网络请求：axios  

#### 页面框架:iview  

------

1. web端+客户端 

   UI库：iview+electron-vue

2. 手机端

   UI库：Mand Mobile

    https://didi.github.io/mand-mobile/#/home

后台：  
数据库： 

#### 跨平台框架：Electron  

------

##### electron的安装

1. win环境下electron+vue demo的准备工作

   - 安装vue-cli 

     ```
     npm install -g vue-cli
     ```

     ​

   - 安装windows-build-tools  

      这个工具包的安装，特别要求使用管理员权限的powershell。

     ```
     npm install --global --production windows-build-tools
     ```

     ​

#####           

##### electron的打包  

1. 调用init脚本  

     在初始化脚本中，请注意选择 builder，注意填写author姓名。否则在最后构建的那一步，会显示错误。

   ```
   # 安装 vue-cli 和 脚手架样板代码
   npm install -g vue-cli
   vue init simulatedgreg/electron-vue my-project

   # 安装依赖并运行你的程序
   cd my-project
   yarn # 或者 npm install
   yarn run dev # 或者 npm run dev

   ```

2. 选择build打包

   ​

   ![win环境，利用builder构建electron+vue的demo - 020_vue_init.png](https://newsn.net/usr/img/4ce4f681d76618fe166f5c72dfc32df7.png)



3. npm install 安装插件
4. npm run build 打包成功