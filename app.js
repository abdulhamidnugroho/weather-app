const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide the address')
} else {    
    geocode(address, (error, {latitude, longtitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)

        forecast(longtitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(forecastData)
        })
        
    })
}

