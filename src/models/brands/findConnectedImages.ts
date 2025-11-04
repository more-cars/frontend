import {BrandDataFacade} from "../../data/BrandDataFacade"
import type {ImageNode} from "../../types/images/ImageNode"

export async function findConnectedImages(brandId: number) {
    const imageRelations = await BrandDataFacade.getConnectedImageNodes(brandId)
    if (!imageRelations) {
        return []
    }

    const images = []
    for (const imageRelation of imageRelations) {
        images.push(imageRelation.data.relationship_partner as ImageNode)
    }

    return images
}
