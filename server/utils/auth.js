require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';
const axios = require('axios');
// const { response } = require('express');

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if ( req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, name, password }) {
        const payload = { email, name, password };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    igdbRequest:  async function (email, password) {
        let requestOptions = await axios({
            method: 'get',
            url: 'https://api.igdb.com/v4/games',
            auth: {
                email: email,
                password: token.password
            },
            headers: {
                'accept': 'application/json',
                'Client_ID': process.env.CLIENT_ID,
                'Authorization': process.env.AUTHORIZATION
            }
        });
        // axios(requestOptions)
        // .then((response) => {
        //     return(response.data);
        // })
        // .catch(error => {
        //     return error;
        // });
        // const requestOptions =  {
        //     method: 'url',
        //     baseURL: 'https://api.igdb.com/v4',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Client_ID': process.env.CLIENT_ID,
        //         'Authorization': process.env.AUTHORIZATION 
        //     },
        //     responseType: 'json',
        //     timeout: 1000,
        //     auth: {
        //     email: token.email,
        //     password: token.password
        //     },
        // };
        
        // will need to really work on getting this api request right
        // const response = await apicalypse(requestOptions)
        // may need to use slug as well as name in case we use em for URL requests
        // .fields(['id,name,first_release_date,cover,rating,summary'])
        // .sort('name', 'desc')
        // .search(`${game}`)
        // .request('/games');
        
        // return response 
    }
};