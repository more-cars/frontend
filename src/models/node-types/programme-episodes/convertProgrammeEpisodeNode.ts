import {ProgrammeEpisodeNode} from "../../../data/node-types/programme-episodes/types/ProgrammeEpisodeNode"
import {ProgrammeEpisode} from "./types/ProgrammeEpisode"

export function convertProgrammeEpisodeNode(dataNode: ProgrammeEpisodeNode) {
    const programmeEpisode: ProgrammeEpisode = {
        id: dataNode.id,
        title: dataNode.title,
        season_number: dataNode.season_number || null,
        season_episode_number: dataNode.season_episode_number || null,
        original_air_date: dataNode.original_air_date || null,
        duration: dataNode.duration || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return programmeEpisode
}
