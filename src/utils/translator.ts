import { translate} from '@vitalets/google-translate-api'
import { redisClient } from './redis'

const translator = async(text: string, cid: number | string) => {

    const recentUsers = await redisClient.get('recentUsers') || 'en'
    const recentUser = JSON.parse(recentUsers).find((user: any) => user.id == cid)

    if(recentUser) {
        const result = await translate(text, {from: 'auto', to: recentUser.toTranslate})
        return result.text
    } 

    const users = await redisClient.get('users') || 'en'
    const user = JSON.parse(users).find((user: any) => user.id == cid)

    if(user) {
        const result = await translate(text, {from: 'auto', to: user.toTranslate})
        return result.text
    }
};

export default translator;