import express from "express"
import {mockState, nodeRelationships, nodeState} from "./mockState"
import {Response} from "express-serve-static-core"

const router = express.Router()

router.get("/__admin/state", (req, res) => {
    respondWithAllStates(res)
})

router.post("/__admin/node-type/:nodeType/:count", (req, res) => {
    const {nodeType, count} = req.params

    mockState.set(nodeType, Number(count))

    respondWithAllStates(res)
})

router.post("/__admin/node-state/:id/:state", (req, res) => {
    const {id, state} = req.params

    nodeState.set(Number(id), (state === 'true'))

    respondWithAllStates(res)
})

router.post("/__admin/node-relationships/:id/:count", (req, res) => {
    const {id, count} = req.params

    nodeRelationships.set(Number(id), Number(count))

    respondWithAllStates(res)
})

router.post("/__admin/reset", (req, res) => {
    mockState.clear()
    nodeState.clear()
    nodeRelationships.clear()

    respondWithAllStates(res)
})

function respondWithAllStates(res: Response) {
    res.json([...mockState, ...nodeState, ...nodeRelationships])
}

export default router
