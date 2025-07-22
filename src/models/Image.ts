import {getAllImages} from "../data/images/getAllImages.ts"
import type {ImageNode} from "../types/images/ImageNode.mts"
import {getImageById} from "../data/images/getImageById.ts"

export class Image {
    static async findAll(): Promise<Array<ImageNode>> {
        const images = await getAllImages()

        if (!images) {
            return []
        }

        // TODO remove the limiter when pagination is implemented
        return images.slice(0, 100)
    }

    static async findById(id: number): Promise<false | ImageNode> {
        const image = await getImageById(id)

        if (!image) {
            return false
        }

        return image
    }
}
