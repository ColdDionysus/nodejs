//axois package 

const axios = require('axios')
const url = "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
const getUser = async (url) => {
    try {
        const { data } = await axios.get(url)
        const { hourly } = data
        
        return { hourData: hourly.time, hourlyTemp: hourly.temperature_2m }
        
    } catch (error) {
        console.log(error)
    }
}
const solve = async () => {
    const sunrise = await getUser(url)
   const currentHour = new Date().getHours()
//    const getTime = sunrise.hourData.findIndex(currentHour)
   
   const closestIndex = sunrise.hourData.findIndex(getTime === currentHour);
   console.log(closestIndex)
}


solve()