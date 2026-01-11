import {ImageDataFacade} from "../../../data/ImageDataFacade"
import {convertImageNode} from "./convertImageNode"

export async function findNodeById(id: number) {
    const node = await ImageDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertImageNode(node)
}
