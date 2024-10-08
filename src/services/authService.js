const { UserModel } = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (user) => {
    try {
        const dbUser = await UserModel.find({ user_name: user.user_name })
        if (!dbUser) throw new Error("user not found");
        if(!await bcrypt.compare(user.password, dbUser.password)){
            throw new Error("wrong password!")
        }

        const token = await jwt.sign({user_name: dbUser.user_name, role:dbUser.role}, process.env.TOKEN_SECERET,{
            expiresIn: "3m"
        }
    );
    return token
    } catch (err) {
        throw err
    }
}


module.exports ={
    login
}

