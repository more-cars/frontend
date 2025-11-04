import {CarModelDataFacade} from "../../data/CarModelDataFacade"

export async function findNodeById(id: number) {
    return CarModelDataFacade.getNodeById(id)
}
