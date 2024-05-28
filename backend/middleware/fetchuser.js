const jwt = require('jsonwebtoken');
let jwt_secret = "thisisdemoofinotes"
const fetchuser = (req,res,next) =>
{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "this is not valid token"});
    }
    try {
        const data = jwt.verify(token, jwt_secret);
        req.user =data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "this is not valid token"});
    }

}


module.exports = fetchuser;