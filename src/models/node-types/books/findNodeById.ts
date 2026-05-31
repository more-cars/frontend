import {BookDataFacade} from "../../../data/BookDataFacade"
import {convertBookNode} from "./convertBookNode"

export async function findNodeById(id: number) {
    const node = await BookDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertBookNode(node)
}
