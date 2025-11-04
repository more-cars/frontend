import {ImageDataFacade} from "../../data/ImageDataFacade"

export async function findNodeById(id: number) {
    return ImageDataFacade.getNodeById(id)
}
