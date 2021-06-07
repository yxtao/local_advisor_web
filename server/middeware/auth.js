import jwt from 'jsonwebtoken';
const secret = "secret";

const auth = async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token) {
            const decodeData = jwt.verify(token, secret);
            req.userId = decodeData?.id;
        }
        next();
    } catch(err) {
        console.log(jwt.verify(token, secret));
    }
}

export default auth;