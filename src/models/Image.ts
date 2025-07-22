import {getAllImages} from "../data/images/getAllImages.ts"
import type {ImageNode} from "../types/images/ImageNode.mts"

export class Image {
    static async findAll(): Promise<Array<ImageNode>> {
        const images = await getAllImages()

        if (!images) {
            return []
        }

        // TODO remove the limiter when pagination is implemented
        return images.slice(0, 1000)
    }
}
