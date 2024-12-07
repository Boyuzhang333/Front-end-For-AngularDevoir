const express = require('express');
const path = require('path');

const app = express();

// 指定静态文件目录
app.use(express.static(path.join(__dirname, 'dist/assignment-app/browser')));

// 处理所有其他路由，返回 index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assignment-app/browser/index.csr.html'));
});

// 监听端口
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
