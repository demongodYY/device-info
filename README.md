# 设备信息录入并生成二维码系统
一个简单的设备信息管理系统，用于实践 next.js 在 SSR 中的作用
## 应用库
- next.js
- react
- express
- sqlite
## 运行开发环境
1. 在 /services/db/目录下创建 database.db 文件
2. 运行 node ./services/db/createDB.js 创建数据库表
3. npm run dev 运行开发环境
4. 访问 localhost:3000