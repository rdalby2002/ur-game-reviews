import apicalypse from 'apicalypse';
// need people to be autherized to make these requests
const { signToken } = require('../utils/auth');

const game = '';

// will need to really work on getting this api request right
const response = await apicalypse({
    queryMethod: 'body'
})
.fields(['name', 'first_release_date', 'cover', 'rating', 'summary']);