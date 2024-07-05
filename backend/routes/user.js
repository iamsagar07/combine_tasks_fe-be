const router = require("express").Router();

const User = require("../models/user");
const bycrypt = require("bcrypt")
const jsonWebToken = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
    try {
        const { username } = req.body;
        const { email } = req.body;

        const existingUser = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingUser) {
            return res.status(300).json({
                message: "Username already exist",
            });
        } else if (username.length < 3) {
            return res.status(400).json({
                message: "Username should have at least 4 characters",
            });
        }

        if (existingEmail) {
            return res.status(300).json({
                message: "Email already exist",
            });
        }
const hashPass = await bycrypt.hash(req.body.password, 10)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        });

        await newUser.save();
        return res.status(200).json({
            message: "Sign-in Succesfully",
        });
    } catch (error) {
        console.error('error is -> ', error);
        return res.status(400).json({
            message: "Internal server error",
        });
     }
});

// login

router.get("/login", async (req, res) => {
    const {username, password} = req.body
    const existingUsername = await User.findOne({ username });
    if (!existingUsername) {
    return res.status(400).json({ message: "Invalid username or password" });
    }

    bycrypt.compare(password, existingUsername.password, (err, data) => {
        if (data) {
            const authClaims = [{ name: username }, { jti: jsonWebToken.sign({}, "tcmTM") }];
            const token = jsonWebToken.sign({ authClaims }, "tcmTM", { expiresIn: "2d" });
            res.status(200).json({ id: existingUsername._id, token: token });
        } else {
        return res.status(400).json({ message: "Invalid Credentials" });
        }
        });
    });

module.exports = router;
