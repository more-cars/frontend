import {RacingSessionDataFacade} from "../../../data/RacingSessionDataFacade"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedMainImage(id: number) {
    const relation = await RacingSessionDataFacade.getConnectedMainImageNode(id)

    if (!relation) {
        return null
    }

    return convertImageNode(relation.partner_node)
}
