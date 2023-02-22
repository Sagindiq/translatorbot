import { CronJob } from 'cron'
import { userModel } from '../model'
import { redisClient } from '../utils/redis'
import userTypes from '../types/user.types'
import { uniqBy } from 'lodash'
import myTelegraf from '../types/wizard.type'

const userCronFunction = async(bot: myTelegraf) => {

    const userCronJob = new CronJob({
        cronTime: '0 0 0 * * *',
        onTick: () => {
            redisClient.get('recentUsers')
            .then(async data => {
                const recentUsersArray: userTypes[] = data ? JSON.parse(data) : []
                const users = await userModel.findAll()
    
                const usersArray = recentUsersArray.filter((user: any) => users.find((user2: any) => user2.id !== user.id))
                const uniqueUsers = uniqBy(usersArray, JSON.stringify);
    
                uniqueUsers.map((el: userTypes) => {
                    userModel.create({
                        id: el.id,
                        name: el.name,
                        username: el.username
                    })
                })
            }).catch(err => console.log(err))
        },
        onComplete: async() => {
            const users = await userModel.findAll()
            await redisClient.del('recentUsers')
            await redisClient.set('users', JSON.stringify(users))
        },
        timeZone: 'Asia/Tashkent'
    })

    return userCronJob.start()
}

export default userCronFunction;