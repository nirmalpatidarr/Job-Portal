const express = require("express")
const router = express.Router();
const userSchema = require("../../Model/schema/user")

const register = async (req, res) => {
    const user = new userSchema(req.body);
    // in query we pass some key validation for fetching and not posting same data in database
    const check = await userSchema.find({ Role: req.body.Role, Email: req.body.Email })
    // console.log(check)
    try {
        if (check.length > 0) {

            res.status(400).send({ message: "try another Email or Role" });
        }
        else {
            await user.save();
            res.send({ result: user });
        }
    }
    catch (error) {
        res.status(500).send({ Error: error, message: "" });

    }
}

const login = async (req, res) => {

    //while login first we have to verify some key for login// in that we pass Role and email
    // console.log(req.body)
    const loginCheck = await userSchema.findOne({ Role: req.body.Role, Email: req.body.Email })
    console.log(loginCheck, "login")
    try {
        if (loginCheck) {
            // after geting/fetching both role and Email than passward is verifying //
            if (req.body.Password == loginCheck.Password) {
                console.log(loginCheck, "sucess")
                return res.status(200).send({ Error: "", message: "login success", result: loginCheck });

            }
            else {
                return res.status(400).send({ message: "passward not matched", result: "" })

            }
        } else {
            res.status(400).send({ Error: "", result: [], message: "user not found" })
        }
    }
    catch (error) {
        res.status(500).send({ Error: error, result: [], message: "" })
    }
}


module.exports = { register, login }