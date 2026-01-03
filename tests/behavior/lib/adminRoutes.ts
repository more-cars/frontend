import express from "express"
import {mockState} from "./mockState"

const router = express.Router()

router.get("/__admin/state", (req, res) => {
    res.json([...mockState])
})

router.get("/__admin/node-type/:nodeType/:count", (req, res) => {
    const {nodeType, count} = req.params

    mockState.set(nodeType, Number(count))

    res.json([...mockState])
})

export default router
