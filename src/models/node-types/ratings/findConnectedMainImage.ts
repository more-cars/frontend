import {RatingDataFacade} from "../../../data/RatingDataFacade"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedMainImage(id: number) {
    const relation = await RatingDataFacade.getConnectedMainImageNode(id)

    if (!relation) {
        return null
    }

    return convertImageNode(relation.partner_node)
}
