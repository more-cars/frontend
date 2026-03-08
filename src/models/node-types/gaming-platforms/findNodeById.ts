import {GamingPlatformDataFacade} from "../../../data/GamingPlatformDataFacade"
import {convertGamingPlatformNode} from "./convertGamingPlatformNode"

export async function findNodeById(id: number) {
    const node = await GamingPlatformDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertGamingPlatformNode(node)
}
