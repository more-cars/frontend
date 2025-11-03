import {getConnectedNodes} from "../../data/images/getConnectedNodes"
import type {BrandNode} from "../../types/brands/BrandNode"

export async function findConnectedBrands(imageId: number) {
    const allRelations = await getConnectedNodes(imageId)
    if (!allRelations) {
        return []
    }

    const brands = []
    for (const relation of allRelations) {
        if (relation.data.relationship_partner.node_type === 'brand') {
            brands.push(relation.data.relationship_partner as BrandNode)
        }
    }

    return brands
}
