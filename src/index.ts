import { Telegraf, Scenes, session } from "telegraf";
import { BOT_TOKEN } from './config'
import middlewares from "./middlewares";
import modules from "./module";
import redis from "./utils/redis";
import sequelize from "./utils/sequelize";
import { userModel } from './model'

const bot = new Telegraf<Scenes.WizardContext>(BOT_TOKEN)

redis()
sequelize.authenticate().then(() => console.log('Database connected')).catch(err => console.log(err))

bot.use(session())
middlewares(bot)
modules(bot)

bot.launch().then(() => console.log('Bot started'))