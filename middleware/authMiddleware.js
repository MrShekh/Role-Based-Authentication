import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
  console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET);   

        console.log(decoded)
        req.user = decoded; // Attach user data to request
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

export default  authMiddleware;
