import {getConnectedImages} from "../../data/car-models/getConnectedImages"
import type {ImageNode} from "../../types/images/ImageNode"

export async function findConnectedImages(carModelId: number) {
    const imageRelations = await getConnectedImages(carModelId)
    if (!imageRelations) {
        return []
    }

    const images = []
    for (const imageRelation of imageRelations) {
        images.push(imageRelation.data.relationship_partner as ImageNode)
    }

    return images
}
