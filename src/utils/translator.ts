import { translate} from '@vitalets/google-translate-api'
import { redisClient } from './redis'

const translator = async(text: string, cid: number | string) => {
    const toLanguage = await redisClient.get(`${cid}-to`) || 'en'
    const result = await translate(text, {from: 'auto', to: toLanguage})
    return result.text
};

export default translator;