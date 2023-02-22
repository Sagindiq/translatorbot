import myTelegraf from "../types/wizard.type";
import userCronFunction from "./user.cron";


export default function cronsJobs(bot: myTelegraf) {
    userCronFunction(bot)
}