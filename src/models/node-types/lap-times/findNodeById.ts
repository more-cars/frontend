import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {convertLapTimeNode} from "./convertLapTimeNode"

export async function findNodeById(id: number) {
    const node = await LapTimeDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertLapTimeNode(node)
}
