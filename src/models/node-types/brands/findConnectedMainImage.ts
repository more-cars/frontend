import {BrandDataFacade} from "../../../data/BrandDataFacade"

export async function findConnectedMainImage(id: number) {
    const relationship = await BrandDataFacade.fetchMainImageRelationship(id)

    if (relationship) {
        return relationship.partner_node
    }

    return null
}
