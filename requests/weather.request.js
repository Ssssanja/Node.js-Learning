const rp = require('request-promise')

module.exports = async function(city) {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }

    const KEY = '0c1688aca30194741d478936ff7451fd'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,   // uri: uri (тут ключ из коробки называется uri, поэтому под него обозвали переменную, что бы опустить написание через двоеточие)
        qs: {
            appid: KEY,
            q:city,
            units: 'imperial'
        },
        json: true
    }

    try{
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
    

        return {
            weather: ` ${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    }
    
    catch(error){
        return {
            weather: null,
            error: error.error.message
        }
    }
}    

    