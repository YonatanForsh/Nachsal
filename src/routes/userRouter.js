const exp = require("express")
const router = exp.Router()
const {} = require("../controllers/userController")

router.post("/register", register)

router.get("/profile", getProfile)

router.patch("/settings", setSettings)



module.export = router


