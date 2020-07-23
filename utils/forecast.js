const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c90f0019c3df883b03f871920f7fb9fc&query=' + latitude + ',' + longtitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to the service!', undefined)
        } else if (body.error) {
            console.log('Unable to find location', undefined)
        } else {
            console.log(body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. But feelslike " + body.current.feelslike + " degrees")
        }
    })
}

module.exports = forecast