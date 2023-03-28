import apicalypse from 'apicalypse';
// need people to be autherized to make these requests
const { signToken } = require('../utils/auth');

const game = '';

const requestOptions = {
    queryMethod: 'url',
    // method might have to be get?
    method: 'post',
    baseURL: 'https://api.igdb.com/v4',
    headers: {
        'Accept': 'application/json',
        'Client-ID': 'i98gt92fpw1mxgt5x39ffm47s3ehr1',
        'Authorization': 'Bearer 8haqod3b087geqce4c1oteg8q8wyxr'
    },
    responseType: 'json',
    timeout: 1000,
    auth: {
        // will figure this out in a bit, will have to use token i assume
    }
};

// will need to really work on getting this api request right
const response = await apicalypse(requestOptions)
// may need to use slug as well as name in case we use em for URL requests
.fields(['id,name,first_release_date,cover,rating,summary'])
.sort('name', 'desc')
.search(`${game}`)
.request('/games');





