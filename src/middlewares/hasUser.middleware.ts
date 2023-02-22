import { Middleware, Context } from 'telegraf'
import userTypes from '../types/user.types'
import { redisClient } from '../utils/redis'

const hasUser: Middleware<Context> = async(ctx, next) => {

    const recentUsers = await redisClient.get('recentUsers')
    const recentUsersArray: userTypes[] = recentUsers ? JSON.parse(recentUsers) : []
    const findUser = recentUsersArray.find(user => user.id == ctx.from?.id)
    if(findUser) return next()
    
    const users = await redisClient.get('users')
    const user = users ? await JSON.parse(users).find((user: userTypes) => user.id == ctx.from?.id) : null
    if(user) return next()

    const id = Number(ctx.from?.id)
    const fullName = `${ctx.from?.first_name}${ctx.from?.last_name === undefined ? '' : ' ' + ctx.from?.last_name}`

    redisClient.set('recentUsers', JSON.stringify([...recentUsersArray, {
        id,
        name: fullName,
        username: ctx.from?.username || ''
    }]))
    .then(() => next())
    .catch(err => console.log(err))
}

export default hasUser;