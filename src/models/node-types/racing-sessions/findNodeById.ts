import {RacingSessionDataFacade} from "../../../data/RacingSessionDataFacade"
import {convertRacingSessionNode} from "./convertRacingSessionNode"

export async function findNodeById(id: number) {
    const node = await RacingSessionDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRacingSessionNode(node)
}
