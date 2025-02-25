import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
async function authMiddleware(req, res, next) {
  const verifyToken = req.cookies.token;

  if (!verifyToken) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(verifyToken, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export default authMiddleware;
