import {RacingGameDataFacade} from "../../../data/RacingGameDataFacade"
import {GamingPlatform} from "../gaming-platforms/types/GamingPlatform"
import {convertGamingPlatformNode} from "../gaming-platforms/convertGamingPlatformNode"

export async function findConnectedGamingPlatforms(id: number) {
    const relations = await RacingGameDataFacade.getConnectedGamingPlatformNodes(id)
    const gamingPlatforms: GamingPlatform[] = []

    for (const relation of relations) {
        gamingPlatforms.push(convertGamingPlatformNode(relation.partner_node))
    }

    return [...gamingPlatforms].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
