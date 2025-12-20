const express = require('express');
const cors = require('cors');
const Replicate = require('replicate');
require('dotenv').config();

// 初始化 Replicate
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY
});

const app = express();
const PORT = 8080;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // 提供静态文件服务

// 生成图片
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;

        const input = {
            prompt: prompt,
            aspect_ratio: "1:1",
            safety_filter_level: "block_medium_and_above"
        };

        const output = await replicate.run("google/imagen-4", { input });

        res.json({
            status: 'succeeded',
            output: [output]
        });

    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: error.message });
    }
});


// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});