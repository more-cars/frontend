import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertRacingEventNode} from "./convertRacingEventNode"

export async function findNodeById(id: number) {
    const node = await RacingEventDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRacingEventNode(node)
}
