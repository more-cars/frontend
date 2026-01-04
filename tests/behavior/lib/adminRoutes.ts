import express from "express"
import {mockState, nodeState} from "./mockState"

const router = express.Router()

router.get("/__admin/state", (req, res) => {
    res.json([...mockState, ...nodeState])
})

router.post("/__admin/node-type/:nodeType/:count", (req, res) => {
    const {nodeType, count} = req.params

    mockState.set(nodeType, Number(count))

    res.json([...mockState, ...nodeState])
})

router.post("/__admin/node-state/:id/:state", (req, res) => {
    const {id, state} = req.params

    nodeState.set(Number(id), (state === 'true'))

    res.json([...mockState, ...nodeState])
})

router.post("/__admin/reset", (req, res) => {
    mockState.clear()
    nodeState.clear()

    res.json([...mockState, ...nodeState])
})

export default router
