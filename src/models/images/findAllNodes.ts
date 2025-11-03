import {getAllImages} from "../../data/images/getAllImages"

export async function findAllNodes() {
    const images = await getAllImages()

    if (!images) {
        return []
    }

    return images
}
