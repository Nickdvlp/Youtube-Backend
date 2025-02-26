import User from "../Model/userSchema.js";
import bcrypt from "bcryptjs";

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const avatar = req.file ? req.file.path : undefined;
    console.log(req.file);
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, avatar });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default registerUser;
