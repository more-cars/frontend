import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {convertTrackLayoutNode} from "../track-layouts/convertTrackLayoutNode"

export async function findConnectedTrackLayout(id: number) {
    const relation = await LapTimeDataFacade.getConnectedTrackLayoutNode(id)

    if (!relation) {
        return null
    }

    return convertTrackLayoutNode(relation.partner_node)
}
