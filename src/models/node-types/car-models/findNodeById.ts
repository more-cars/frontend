import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import type {CarModel} from "./types/CarModel"

export async function findNodeById(id: number) {
    return (await CarModelDataFacade.getNodeById(id)) as CarModel
}
