const exp = require("express")
const router = exp.Router()
const {} = require("../controllers/greenEyeController")


router.post("/", createPoll)

router.get("/my", getNotification)

router.get("/:id", getPollById)

router.post("/reply", reply)

router.delete("/:id", deletePoll)


module.export = router


