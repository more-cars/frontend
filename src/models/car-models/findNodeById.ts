import {CarModelDataFacade} from "../../data/CarModelDataFacade"
import type {CarModelNode} from "./types/CarModelNode"

export async function findNodeById(id: number) {
    return (await CarModelDataFacade.getNodeById(id)) as CarModelNode
}
