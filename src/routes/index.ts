import { Router } from "express";

const router = Router();

// router.use("/")
router.get("/", (req, res) => {
    res.send({msg: 'chegou'})
})

export { router };