import {RacingSeriesDataFacade} from "../../../data/RacingSeriesDataFacade"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedMainImage(id: number) {
    const relation = await RacingSeriesDataFacade.getConnectedMainImageNode(id)

    if (!relation) {
        return null
    }

    return convertImageNode(relation.partner_node)
}
