import {MotorShowDataFacade} from "../../../data/MotorShowDataFacade"
import {MotorShow} from "./types/MotorShow"
import {convertMotorShowNode} from "./convertMotorShowNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await MotorShowDataFacade.getNodeCollection(params)

    const motorShows: MotorShow[] = []

    nodes.forEach(node => {
        motorShows.push(convertMotorShowNode(node))
    })

    return motorShows.slice(0, nodeLimit)
}
