/*
 * @Author: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @Date: 2024-06-18 11:31:22
 * @LastEditors: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @LastEditTime: 2024-06-18 16:39:02
 * @FilePath: \monitorSql\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
import express from 'express';
import cors from 'cors';
import formidable from 'express-formidable';
import router from './src/route';
const app = express();
app.use(formidable());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3033, () => {
  console.log(`server running on `);
});