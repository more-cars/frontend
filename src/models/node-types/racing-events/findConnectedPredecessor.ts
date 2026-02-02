import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertRacingEventNode} from "./convertRacingEventNode"

export async function findConnectedPredecessor(id: number) {
    const relation = await RacingEventDataFacade.getConnectedPredecessorNode(id)

    if (!relation) {
        return null
    }

    return convertRacingEventNode(relation.partner_node)
}
