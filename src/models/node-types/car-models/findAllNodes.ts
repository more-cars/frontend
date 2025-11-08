import {CarModelDataFacade} from "../../../data/CarModelDataFacade"

const nodeLimit = 100

export async function findAllNodes() {
    const nodes = await CarModelDataFacade.getNodeCollection()

    return nodes.slice(0, nodeLimit)
}
