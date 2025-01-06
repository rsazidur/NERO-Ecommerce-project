const jwt = require('jsonwebtoken');
const User = require('../users/user.model');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyToken = async (req, res, next) => { 
   try {
        const token = req.cookies.token;
        // const token = req.headers["authorization"].split(" ")[1];
        if (!token) {
            return res.status(401).send({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);

        if (!decoded) {
            return res.status(401).send({ message: "Unauthorized" });
        }   
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
   } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).send({ message: "Error verifying token" });

   }
}

module.exports = verifyToken;