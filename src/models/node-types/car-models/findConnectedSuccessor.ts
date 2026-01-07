import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {CarModelNode} from "./types/CarModelNode"

export async function findConnectedSuccessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedSuccessorCarModelNode(id)

    return relation?.partner_node as CarModelNode || null
}
