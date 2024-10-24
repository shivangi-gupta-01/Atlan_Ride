import bcrypt from "bcryptjs"
import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create the new user object
    const newUser = new User({
      name: name,
      email: email,
      password: hash,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET, 
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1d' } // Default to 1 day if not set
    );

    // Define cookie options
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      sameSite: 'strict',
    };

    // Destructure user details, excluding password and isAdmin
    const { password: pwd, isAdmin, ...otherDetails } = newUser._doc;

    // Return response with the token and user details
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json({ user: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
  

export const login = async(req, res, next)=>{
  try{
    const user = await User.findOne({email: req.body.email})

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).json({message:"Wrong email or password"});
    }
    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });

    const options = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      sameSite: 'strict' 
    };

    const { password, isAdmin, ...otherDetails } = user._doc;
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json({ user: { ...otherDetails }, isAdmin });

  }catch(err){
    next(err);
  }
}

export const logout = async (req, res, next) => {
  try{
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};