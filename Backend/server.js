const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Allow frontend to access backend (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Download Endpoint
app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url.includes("instagram.com/reel")) {
        return res.json({ success: false, message: "Invalid Instagram Reel URL!" });
    }

    try {
        // Here you would normally scrape Instagram
        // (This is a demo - real scraping requires more work)
        const videoUrl = "https://example-download-link.com/video.mp4";

        res.json({ success: true, videoUrl });
    } catch (error) {
        res.json({ success: false, message: "Failed to fetch video." });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
