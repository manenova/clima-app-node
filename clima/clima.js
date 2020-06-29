const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1152718315a23f216bea4faf17ab2f95&units=metric`);
    return resp.data.main.temp
}

module.exports = {
    getClima
}