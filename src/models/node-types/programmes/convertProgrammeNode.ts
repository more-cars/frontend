import {ProgrammeNode} from "../../../data/node-types/programmes/types/ProgrammeNode"
import {Programme} from "./types/Programme"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertProgrammeNode(dataNode: ProgrammeNode) {
    const programme: Programme = {
        type: ModelNodeType.PROGRAMME,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            aired_from_year: dataNode.data.aired_from_year || null,
            aired_until_year: dataNode.data.aired_until_year || null,
            channel: dataNode.data.channel || null,
            total_seasons: dataNode.data.total_seasons || null,
            total_episodes: dataNode.data.total_episodes || null,
            regular_episode_running_time: dataNode.data.regular_episode_running_time || null,
            country_code: dataNode.data.country_code || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return programme
}
