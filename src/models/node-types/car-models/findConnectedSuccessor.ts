import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {convertCarModelNode} from "./convertCarModelNode"

export async function findConnectedSuccessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedSuccessorCarModelNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelNode(relation.partner_node)
}
