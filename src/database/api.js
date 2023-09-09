const axios = require('axios');

const options = {
    method: 'GET',
    url: process.env.BASEURL,
    headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': process.env.APIHOST
    }
};

export const getAll = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

