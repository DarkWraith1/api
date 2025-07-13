const express = require("express");
const axios = require("axios");
const app = express();

app.get("/asset/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`https://economy.roblox.com/v1/assets/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asset info" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
