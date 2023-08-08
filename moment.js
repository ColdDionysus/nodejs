const moment = require('moment')


const display = () => {
    const a = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    return a

}


console.log(display())
