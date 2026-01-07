import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {CarModelNode} from "./types/CarModelNode"

export async function findConnectedPredecessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedPredecessorCarModelNode(id)

    return relation?.partner_node as CarModelNode || null
}
