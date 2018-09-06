

if (process.env.NODE_ENV === 'production') {
    //We are in production - return production keys
    module.exports = require('./keysProd');
}else{
    //We are in development - return development keys
    module.exports = require('./keysDev');
}