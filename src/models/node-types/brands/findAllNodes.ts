import {BrandDataFacade} from "../../../data/BrandDataFacade"

const nodeLimit = 100

export async function findAllNodes() {
    const nodes = await BrandDataFacade.getNodeCollection()

    return nodes.slice(0, nodeLimit)
}
