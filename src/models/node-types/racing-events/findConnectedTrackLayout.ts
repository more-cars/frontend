import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertTrackLayoutNode} from "../track-layouts/convertTrackLayoutNode"

export async function findConnectedTrackLayout(id: number) {
    const relation = await RacingEventDataFacade.getConnectedTrackLayoutNode(id)

    if (!relation) {
        return null
    }

    return convertTrackLayoutNode(relation.partner_node)
}
