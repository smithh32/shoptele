const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Import logic dari index.js
const handler = require('../index.js');

// Saat ada update masuk (via webhook)
bot.on('message', async (ctx) => {
  try {
    // Panggil handler utama (ronzz) yang ada di index.js
    await handler(ctx, bot);
  } catch (e) {
    console.error("Handler error:", e);
  }
});

module.exports = (req, res) => {
  if (req.method === 'POST') {
    bot.handleUpdate(req.body, res);
  } else {
    res.status(200).send("Bot jalan 😎");
  }
};
