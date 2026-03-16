import {ProgrammeNode} from "../../../data/node-types/programmes/types/ProgrammeNode"
import {Programme} from "./types/Programme"

export function convertProgrammeNode(dataNode: ProgrammeNode) {
    const programme: Programme = {
        id: dataNode.id,
        name: dataNode.name,
        aired_from_year: dataNode.aired_from_year || null,
        aired_until_year: dataNode.aired_until_year || null,
        channel: dataNode.channel || null,
        total_seasons: dataNode.total_seasons || null,
        total_episodes: dataNode.total_episodes || null,
        regular_episode_running_time: dataNode.regular_episode_running_time || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return programme
}
