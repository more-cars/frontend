import {getConnectedBrand} from "../../data/car-models/getConnectedBrand"
import type {BrandNode} from "../../types/brands/BrandNode"

export async function findConnectedBrand(carModelId: number) {
    const brandRelation = await getConnectedBrand(carModelId)

    if (!brandRelation) {
        return false
    }

    return brandRelation.data.relationship_partner as BrandNode
}
