var {config} = require('../config/env');
var authMethod = require('../helpers/jwt');
var {isJwtExpired} = require('jwt-check-expiration');
const jwt_decode = require("jwt-decode");


var { rsErrorOperation, rsErrorUnauthorized, rsErrorPermission, rsErrorTokenExpired} = require('../helpers/respone');

const isAuth = async(req, res, next) => {
    try {
        const token = req.token;
        if(!token)
            return res.json(rsErrorUnauthorized());
        //if(isJwtExpired(token))
        //    return res.json(rsErrorTokenExpired());
        const data = jwt_decode(token);
        if(data.email == 'minhnn1403@gmail.com' || data.email == 'phuonguyen130820@gmail.com')
            return next();
        return res.json(rsErrorPermission());
        
    } catch (error) {
        return res.json(rsErrorOperation(error.message));
    }
}


module.exports = {
    isAuth,
};