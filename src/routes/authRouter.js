const exp = require("express")
const router = exp.Router()
const {} = require("../controllers/authController")


router.post("/login", login)

router.delete("/logout", logout)


module.exports = router


