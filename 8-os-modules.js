const os=require('os')//indicates that we r looking for built in module
//info about curent user
const user=os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}seconds`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)