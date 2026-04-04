import {VideoDataFacade} from "../../../data/VideoDataFacade"
import {convertVideoNode} from "./convertVideoNode"

export async function findNodeById(id: number) {
    const node = await VideoDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertVideoNode(node)
}
