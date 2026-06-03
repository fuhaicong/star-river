# 🌌 星河漫游 · Star River Wander

> 基于 Three.js 的交互式星空网页 — 送给她做六一儿童节礼物 💫

## ✨ 特性

- **2000+ 粒子星空**：三维分布的星光粒子，缓慢漂移
- **极光光幕**：自定义 Shader 实现的动态极光效果
- **流光拖尾**：手指/鼠标滑动产生辉光拖尾
- **星座发现**：探索星空，发现隐藏的星座图案
- **专属文案**：每个星座配有自定义情话
- **终章彩蛋**：发现全部星座后触发粒子大汇聚

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

1. 创建 GitHub 仓库 `star-river`
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "🌌 星河漫游初版"
   git remote add origin git@github.com:你的用户名/star-river.git
   git push -u origin main
   ```
3. 在仓库 Settings → Pages 中，Source 选择 `main` 分支，根目录
4. 等待几分钟后访问 `https://你的用户名.github.io/star-river`

### 方式二：本地运行

用任意 HTTP 服务器打开：
```bash
npx serve .
# 或
python -m http.server 8000
```
然后访问 `http://localhost:8000`

## 🎨 自定义配置

打开 `index.html`，找到开头的配置对象 `C`：

```js
const C = {
  name: '小云',                              // 她的名字/昵称
  finaleMessage: '{name}，你是我眼中最亮的星', // 终章大标题
  finaleSubtitle: '六一儿童节快乐 · 永远做我的小朋友', // 副标题
  constellations: [
    { name: '初见', text: '那天遇见了{name}，\n整个星河都黯然失色。' },
    // ... 修改或新增星座
  ],
};
```

文案中的 `{name}` 会自动替换为上面的名字。

## 📱 兼容性

- 桌面端：Chrome / Firefox / Safari / Edge
- 移动端：iOS Safari / Android Chrome
- 移动端自动降低粒子数以优化性能

## 🛠 技术栈

- **Three.js** — WebGL 渲染引擎
- **自定义 GLSL Shader** — 极光效果
- **EffectComposer + UnrealBloomPass** — 辉光后处理
- **纯静态** — 无构建工具，无需服务端
