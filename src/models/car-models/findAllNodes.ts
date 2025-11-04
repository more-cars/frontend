import {CarModelDataFacade} from "../../data/CarModelDataFacade"

export async function findAllNodes() {
    const nodes = await CarModelDataFacade.getNodeCollection()

    if (!nodes) {
        return []
    }

    return nodes
}
