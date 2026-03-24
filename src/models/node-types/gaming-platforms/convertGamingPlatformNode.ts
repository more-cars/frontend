import {GamingPlatformNode} from "../../../data/node-types/gaming-platforms/types/GamingPlatformNode"
import {GamingPlatform} from "./types/GamingPlatform"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertGamingPlatformNode(dataNode: GamingPlatformNode) {
    const gamingPlatform: GamingPlatform = {
        type: ModelNodeType.GAMING_PLATFORM,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            release_year: dataNode.data.release_year || null,
            manufacturer: dataNode.data.manufacturer || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return gamingPlatform
}
