# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 Nano Banana（Google 的 Gemini 2.5 Flash Image AI 工具）的静态 HTML 着陆页网站。项目是一个营销/推广网站，展示 Nano Banana 的 AI 图像编辑功能。

## 常用命令

### 本地运行网站
```bash
# 使用 Node.js serve（推荐）
npx serve -s . -p 8080

# 使用 Python（如果安装了 Python 3）
python -m http.server 8080

# 网站将在 http://localhost:8080 访问
```

### Windows 下打开浏览器
```bash
start http://localhost:8080
```

## 架构说明

### 项目结构
这是一个纯静态网站，无需构建过程：
- `index.html` - 主着陆页，包含完整的 SEO 优化
- `nano_banana_landing_page.html` - 另一个版本的着陆页
- `banana.md` - Nano Banana AI 工具的详细文档（功能、使用方法、技术原理）
- `.env` - 包含 API 密钥（目前有 Replicate API key）

### HTML 结构特点
- 单页面静态网站，CSS 和 JavaScript 内嵌
- 无需依赖项或构建工具
- 采用语义化 HTML5 标签
- 移动优先的响应式设计

### CSS 设计系统
- 使用 CSS 自定义属性定义香蕉主题配色
- 渐变色彩系统
- 模块化的区块样式
- 流畅的动画和过渡效果

### 核心配色方案
- 主色调香蕉黄：`--banana-peel: #FFE135`, `--banana-fresh: #FFE033`, `--banana-ripe: #F9A826`
- 背景色：奶油色和暖白色变体
- 辅助色：叶绿、紫色、科技蓝

### 页面区块组成
1. **导航栏** - 固定顶部，毛玻璃效果背景
2. **主视觉区** - 核心价值主张和 CTA 按钮
3. **核心价值** - 三大突破功能展示
4. **产品展示** - 3D 公仔化等效果演示
5. **使用指南** - 操作步骤说明
6. **对比分析** - 与传统 AI 工具的差异
7. **定价方案** - 免费版和 Pro 版对比
8. **常见问题** - FAQ 解答
9. **页脚** - 相关链接和资源

## 内容指南

### 品牌语调
- 对话式、兴奋的语调
- 强调"革命性"特性
- 中文为主
- 大量使用 emoji（🍌 香蕉图标贯穿全站）

### 核心信息要点
- "一句话编辑"
- "保持人物一致性"
- "多图无缝融合"
- "告别变脸尴尬"

## 技术注意事项

- 无外部依赖或框架
- 所有 CSS 嵌入在 `<style>` 标签中
- JavaScript 极简且内联
- 为桌面和移动端优化
- 包含完整的 SEO meta 标签

## API 集成

`.env` 文件包含 Replicate API 密钥，暗示可能与 AI 图像生成服务集成：
- 不要在客户端代码中暴露 API 密钥
- 使用环境变量管理敏感配置
- 注意使用限额和配额限制

## 测试要点

作为静态网站，测试重点包括：
- 跨浏览器视觉回归测试
- 移动端响应式验证
- SEO meta 标签检查
- 链接功能测试
- 性能优化（图片压缩、必要时进行代码压缩）