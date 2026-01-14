import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import express from 'express'; //! ONLY FOR RENDER (https://render.com)

dotenv.config({ quiet: true });

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID = process.env.ADMIN_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply('Hi, I am a moderation bot'));

bot.on('message', async (ctx) => {
	if (ctx.from.id == ADMIN_ID) {
		return;
	}

	ctx.reply('Your message has been sent for moderation');

	await ctx.telegram.copyMessage(ADMIN_ID, ctx.chat.id, ctx.message.message_id, {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'APPROVE',
						callback_data: `approve|${ctx.chat.id}|${ctx.message.message_id}|${ctx.message.text}`
					}
				],
				[{ text: 'REJECT', callback_data: `reject|${ctx.message.text}` }]
			]
		}
	});
});

bot.action(/approve\|(.+)\|(.+)\|(.+)/, async (ctx) => {
	let chatId = ctx.match[1];
	let messageId = ctx.match[2];
	let messageText = ctx.match[3] + '\n\nAPPROVED';

	await ctx.telegram.copyMessage(CHANNEL_ID, chatId, messageId);

	await ctx.editMessageText(messageText);
});

bot.action(/reject\|(.+)/, async (ctx) => {
	let messageText = ctx.match[1] + '\n\nREJECTED';

	await ctx.editMessageText(messageText);
});

bot.launch();

//! ONLY FOR RENDER (https://render.com)
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Express launched');
});

app.listen(port, () => {
	console.log('Express launched');
});
