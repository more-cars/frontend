import express from "express"
import {Response} from "express-serve-static-core"
import {pascalCase} from "change-case"
import {mockState, nodeRelationships, nodeState, typeOfNode} from "./mockState"

const router = express.Router()

router.get("/__admin/state", (req, res) => {
    respondWithAllStates(res)
})

router.post("/__admin/node-collection/:nodeType/:count", (req, res) => {
    const {nodeType, count} = req.params

    mockState.set(nodeType, Number(count))

    respondWithAllStates(res)
})

router.post("/__admin/node-state/:id/:state", (req, res) => {
    const {id, state} = req.params

    nodeState.set(Number(id), (state === 'true'))

    respondWithAllStates(res)
})

router.post("/__admin/node-type/:id/:nodeType", (req, res) => {
    const {id, nodeType} = req.params

    typeOfNode.set(Number(id), pascalCase(nodeType))

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
    typeOfNode.clear()
    nodeRelationships.clear()

    respondWithAllStates(res)
})

function respondWithAllStates(res: Response) {
    res.json({
        mock_state: [...mockState],
        node_state: [...nodeState],
        type_of_node: [...typeOfNode],
        node_relationships: [...nodeRelationships]
    })
}

export default router
