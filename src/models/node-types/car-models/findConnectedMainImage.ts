import {CarModelDataFacade} from "../../../data/CarModelDataFacade"

export async function findConnectedMainImage(id: number) {
    const relationship = await CarModelDataFacade.fetchMainImageRelationship(id)

    if (relationship) {
        return relationship.partner_node
    }

    return null
}
