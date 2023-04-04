import apicalypse from 'apicalypse';

export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

export const topRated = async () => {
    const options = {
        queryMethod: 'body',
        method: 'post',
        baseURL: 'https://api.igdb.com/v4',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': process.env.AUTHORIZATION
        },
        responseType: 'json',
        timeout: 1000,
    };

    const response = await apicalypse(options)
    .fields('name,hypes,cover,summary,rating')
    .limit(15)
    .where('rating > 90')
    .request('/games');


    return response.data;
};

export const newReleases = async () => {
    const options = {
        queryMethod: 'body',
        method: 'post',
        baseURL: 'https://api.igdb.com/v4',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  };