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
    igdbRequest:  async function (games) {
        let requestOptions = await axios({
            method: 'get',
            url: 'https://api.igdb.com/v4/games',
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
        
       
    }
};