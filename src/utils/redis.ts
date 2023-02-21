import { createClient } from 'redis'

export const redisClient = createClient()

export default function redis() {
    return redisClient.connect().then(() => console.log('Redis connected')).catch((err) => console.log(err))
}