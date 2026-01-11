import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {convertCarModelNode} from "./convertCarModelNode"

export async function findConnectedPredecessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedPredecessorCarModelNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelNode(relation.partner_node)
}
