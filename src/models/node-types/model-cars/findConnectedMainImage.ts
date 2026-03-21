import {ModelCarDataFacade} from "../../../data/ModelCarDataFacade"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedMainImage(id: number) {
    const relation = await ModelCarDataFacade.getConnectedMainImageNode(id)

    if (!relation) {
        return null
    }

    return convertImageNode(relation.partner_node)
}
