import {ModelCarDataFacade} from "../../../data/ModelCarDataFacade"
import {convertModelCarNode} from "./convertModelCarNode"

export async function findNodeById(id: number) {
    const node = await ModelCarDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertModelCarNode(node)
}
