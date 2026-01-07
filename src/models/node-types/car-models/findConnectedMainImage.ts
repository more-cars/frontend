import {CarModelDataFacade} from "../../../data/CarModelDataFacade"

export async function findConnectedMainImage(id: number) {
    const relationship = await CarModelDataFacade.getConnectedMainImageNode(id)

    if (relationship) {
        return relationship.partner_node
    }

    return null
}
