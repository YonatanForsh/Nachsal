const { verify } = require("jsonwebtoken")

const onlyCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const userData = await jwt.verify(token, process.env.TOKEN_SECERET)
        if(userData.role != "commander"){
            req.status(403).send("youarn't a commander. you can't enter! HAHAHAHA")
        }
        req.user = userData
        next()        
    } catch (err) {
        res.status(401).send(err.message)
    }
}


const onlySoldiersAndCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const userData = await jwt.verify(token, process.env.TOKEN_SECERET)
        req.user = userData
        next()        
    } catch (err) {
        res.status(401).send(err.message)
    }
}



module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}