const admin = require('../config/firebase')
const verifyAdmin  = async(req, resizeBy, next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.status(401).json({message: "unauthorized: no token provided"})
        }
        const token = authHeader.split(' ')[1]
        const decodedToken = await admin.auth().verifyIdToken(token)
        req.user = decodedToken
        next()
    }catch(error){
        return res.status(403).json({ message: 'Forbidden: Invalid or expired token', error: error.message });
    }
}
module.exports = verifyAdmin