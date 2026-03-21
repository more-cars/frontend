import {ModelCarBrandDataFacade} from "../../../data/ModelCarBrandDataFacade"
import {convertModelCarBrandNode} from "./convertModelCarBrandNode"

export async function findNodeById(id: number) {
    const node = await ModelCarBrandDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertModelCarBrandNode(node)
}
