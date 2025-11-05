import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import type {CarModelNode} from "./types/CarModelNode"

export async function findAllNodes() {
    return (await CarModelDataFacade.getNodeCollection()) as CarModelNode[]
}
