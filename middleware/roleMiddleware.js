const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Access Denied. You do not have permission." });
        }
        next();
    };
};

export default  roleMiddleware;
