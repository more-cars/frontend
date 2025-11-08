import {ImageDataFacade} from "../../../data/ImageDataFacade"

const nodeLimit = 100

export async function findAllNodes() {
    const nodes = await ImageDataFacade.getNodeCollection()

    return nodes.slice(0, nodeLimit)
}
