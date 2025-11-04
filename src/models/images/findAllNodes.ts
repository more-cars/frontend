import {ImageDataFacade} from "../../data/ImageDataFacade"

export async function findAllNodes() {
    const images = await ImageDataFacade.getNodeCollection()

    if (!images) {
        return []
    }

    return images
}
