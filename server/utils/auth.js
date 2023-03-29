const jwt = require('jsonwebtoken');
import apicalypse from 'apicalypse';
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

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
    igdbRequest:  async function (token) {
        const requestOptions = {
            queryMethod: 'url',
            // method might have to be get?
            method: 'post',
            baseURL: 'https://api.igdb.com/v4',
            headers: {
                'Accept': 'application/json',
                'Client_ID': process.env.CLIENT_ID,
                'Authorization': process.env.AUTHORIZATION 
            },
            responseType: 'json',
            timeout: 1000,
            auth: {
            email: token.email,
            password: token.password
            },
        };
        
        // will need to really work on getting this api request right
        const response = await apicalypse(requestOptions)
        // may need to use slug as well as name in case we use em for URL requests
        .fields(['id,name,first_release_date,cover,rating,summary'])
        .sort('name', 'desc')
        .search(`${game}`)
        .request('/games');
        
        return response 
    }
};