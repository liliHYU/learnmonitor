/*
 * @Author: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @Date: 2024-06-18 11:31:22
 * @LastEditors: DESKTOP-U5R035U\lihouqiu 945298090@qq.com
 * @LastEditTime: 2024-06-18 16:39:02
 * @FilePath: \monitorSql\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from 'express';
import cors from 'cors';
import formidable from 'express-formidable';
import router from './route';
import expressIp from 'express-ip';
import { getUseablePort } from './lib/utils';

const app = express();

app.use(formidable());
app.use(cors());
app.use(expressIp().getIpInfoMiddleware);
app.use(router);

getUseablePort().then((port) => {
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
});
