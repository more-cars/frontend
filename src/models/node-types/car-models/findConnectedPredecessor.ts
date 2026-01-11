import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {CarModel} from "./types/CarModel"

export async function findConnectedPredecessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedPredecessorCarModelNode(id)

    return relation?.partner_node as CarModel || null
}
