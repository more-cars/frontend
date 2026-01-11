import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {CarModel} from "./types/CarModel"

export async function findConnectedSuccessor(id: number) {
    const relation = await CarModelDataFacade.getConnectedSuccessorCarModelNode(id)

    return relation?.partner_node as CarModel || null
}
