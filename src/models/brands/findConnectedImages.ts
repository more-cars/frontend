import {getConnectedImages} from "../../data/brands/getConnectedImages"
import type {ImageNode} from "../../types/images/ImageNode"

export async function findConnectedImages(brandId: number) {
    const imageRelations = await getConnectedImages(brandId)
    if (!imageRelations) {
        return []
    }

    const images = []
    for (const imageRelation of imageRelations) {
        images.push(imageRelation.data.relationship_partner as ImageNode)
    }

    return images
}
