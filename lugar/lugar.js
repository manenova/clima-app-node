const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geo-services-by-mvpc-com.p.rapidapi.com/cities/findcitiesfromtext?q=${encodedUrl}&language=en`,
        headers: { 'x-rapidapi-key': '7c90caf24amsh6f1d6bd07e403c1p19f4b2jsnea0a02733467' }
    });

    const resp = await instance.get();

    if (resp.data === 0)
        throw new Error(`No hay resultados ${dir}`);

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng,
    }
}

module.exports = {
    getLugarLatLng
}