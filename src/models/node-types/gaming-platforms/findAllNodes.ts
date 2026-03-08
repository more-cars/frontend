import {GamingPlatformDataFacade} from "../../../data/GamingPlatformDataFacade"
import {GamingPlatform} from "./types/GamingPlatform"
import {convertGamingPlatformNode} from "./convertGamingPlatformNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await GamingPlatformDataFacade.getNodeCollection(params)

    const gamingPlatforms: GamingPlatform[] = []

    nodes.forEach(node => {
        gamingPlatforms.push(convertGamingPlatformNode(node))
    })

    return gamingPlatforms.slice(0, nodeLimit)
}
