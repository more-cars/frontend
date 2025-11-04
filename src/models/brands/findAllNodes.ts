import {BrandDataFacade} from "../../data/BrandDataFacade"

export async function findAllNodes() {
    const nodes = await BrandDataFacade.getNodeCollection()

    if (!nodes) {
        return []
    }

    return nodes
}
