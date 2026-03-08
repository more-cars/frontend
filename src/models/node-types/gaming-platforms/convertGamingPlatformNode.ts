import {GamingPlatformNode} from "../../../data/node-types/gaming-platforms/types/GamingPlatformNode"
import {GamingPlatform} from "./types/GamingPlatform"

export function convertGamingPlatformNode(dataNode: GamingPlatformNode) {
    const gamingPlatform: GamingPlatform = {
        id: dataNode.id,
        name: dataNode.name,
        release_year: dataNode.release_year || null,
        manufacturer: dataNode.manufacturer || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return gamingPlatform
}
