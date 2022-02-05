import { Bot } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot("1917307536:AAEhCsfHSVjl2FLKXtTmMEG_UwmVaUhCUkk");

bot.command("start", (ctx) => ctx.reply("welcome"));
bot.on("message", (ctx) => ctx.reply("got a message"));

bot.start();
