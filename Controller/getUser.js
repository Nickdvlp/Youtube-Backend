import User from "../Model/userSchema.js";
import jwt from "jsonwebtoken";

async function getUser(req, res) {
  try {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    jwt.verify(token, "myPassword", async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }

      // Fetch user from DB, excluding password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export default getUser;
