import myTelegraf from '../types/wizard.type';
import hasUser from './hasUser.middleware';

export default async function middlewares(bot: myTelegraf) {
    bot.use(hasUser)
}