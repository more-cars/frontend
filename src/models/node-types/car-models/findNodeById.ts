import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {convertCarModelNode} from "./convertCarModelNode"

export async function findNodeById(id: number) {
    const node = await CarModelDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertCarModelNode(node)
}
