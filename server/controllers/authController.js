const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const otpGenerator = require('otp-generator')

exports.verifyUser = async (req, res, next) => {
    try {
        const { name } = req.method == 'GET' ? req.query : req.body;
        let userExist = await User.findOne({ name });
        if (!userExist) return res.status(404).send({ error: "Can't find User" });
        next();

    } catch (error) {
        return res.status(404).json({ error: "Authentication Error" });
    }
}

exports.register = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        console.log(req.body)
        
        const existingUserEmail = await User.findOne({ email });
        if (existingUserEmail) {
            return res.status(500).json({ error: "Email is already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            password: hashedPassword,
            email,
        });
        await newUser.save();
        return res.status(201).json({ msg: "User Registered Successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Unable to register user" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({
                success: false,
                message: "Email or Password is missing"
            })
        const user = await User.findOne({ email })
        if (!user) return res.status(400).send({ error: "User not found" });

        const passwordCheck = await bcrypt.compare(password, user.password)
        if (!passwordCheck) return res.status(400).send({ error: "Invalid password" })
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            'secret', {
            expiresIn: "24h"
        });
        const options = {
            expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
            httpsOnly: true
        }

        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Login successfull..."
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
};

exports.getUser = async (req, res) => {
    const { name } = req.params;
    try {
        if (!name) return res.status(501).send({ error: "Invalid name" });
        const user = await User.findOne({ name })
        if (!user) return res.status(500).send({ error: "Couldn't find User" });
        const { password, ...rest } = Object.assign({}, user.toJSON());
        return res.status(201).send(rest);


    } catch (error) {
        return res.status(404).send({ error: "Cannot Find Data" })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.user
        if (userId) {
            const body = req.body
            const user = await User.updateOne({ _id: userId }, body)
            if (user) return res.status(201).send({ msg: "Record Updated..." });
        }
        else {
            return res.status(401).send({ error: "User not found" });
        }

    } catch (error) {
        return res.status(401).send({ error })
    }
}

exports.generateOTP = async (req, res) => {
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    res.status(201).send({ code: req.app.locals.OTP })
}

exports.verifyOTP = async (req, res) => {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null;
        req.app.locals.resetSession = true;
        return res.status(201).send({ msg: "Verify successfully..." })
    }
    return res.status(400).send({ error: "Invalid OTP!" })
}

exports.createResetSession = async (req, res) => {
    if (req.app.locals.resetSession) {
        req.app.locals.resetSession = false;
        return res.status(201).send({ msg: "Access granted" })
    }
    return res.status(440).send({ error: "Session expire..." })
}

exports.resetPassword = async (req, res) => {
    try {
        if (!req.app.locals.resetSession)
            return res.status(440).send({ error: "Session expired" });
        const { name, password } = req.body;
        const user = await User.findOne({ name });
        if (!user) return res.status(404).send({ error: "name not found" });

        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) return res.status(440).send({ error: "Couldn't hashed the password" });

        await User.updateOne({ name: user.name }, { password: hashedPassword });
        return res.status(201).send({ msg: "Record updated" });
    } catch (error) {
        return res.status(500).send({ error: "Unable to reset password" });
    }
}
