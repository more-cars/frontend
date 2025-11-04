import {CarModelDataFacade} from "../../data/CarModelDataFacade"
import type {BrandNode} from "../../types/brands/BrandNode"

export async function findConnectedBrand(carModelId: number) {
    const brandRelation = await CarModelDataFacade.getConnectedBrandNode(carModelId)

    if (!brandRelation) {
        return false
    }

    return brandRelation.data.relationship_partner as BrandNode
}
