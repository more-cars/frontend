import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {LapTime} from "./types/LapTime"
import {convertLapTimeNode} from "./convertLapTimeNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await LapTimeDataFacade.getNodeCollection(params)

    const lapTimes: LapTime[] = []

    nodes.forEach(node => {
        lapTimes.push(convertLapTimeNode(node))
    })

    return lapTimes.slice(0, nodeLimit)
}
