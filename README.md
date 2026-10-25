# Nothin’ 中文静态网站

保留原站布局、字体、图片及动画的中文复刻，共 25 个页面。当前发布版本已移除网页编辑功能，无需账号、数据库或环境变量。

## 开发与构建

使用 Node.js 24.x。

```bash
npm ci
npm run dev
npm run deploy:check
```

Vercel 输出目录为 `dist/client`。项目和外层目录均有对应的 `vercel.json`，支持直接上传项目或保留子目录的两种仓库结构。详细操作及验证结果见 [部署说明.md](./部署说明.md)。

`.gitignore` 排除依赖、构建产物、截图和本地环境文件。原始本地化脚本和参考资料在外层目录中，部署时不需要它们。

源码组织与原站拆解见 [拆解说明.md](./拆解说明.md)。中文词典保留在 `src/zh-CN.json`，可用 `python3 scripts/translate-zh.py` 重新应用；发布构建不需要 Python。

旧编辑器源文件仅供本地维护参考，不加载、不发布。当前网站内容直接来自 HTML、CSS 和公开资源文件。
