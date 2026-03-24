import {ProgrammeEpisodeNode} from "../../../data/node-types/programme-episodes/types/ProgrammeEpisodeNode"
import {ProgrammeEpisode} from "./types/ProgrammeEpisode"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertProgrammeEpisodeNode(dataNode: ProgrammeEpisodeNode) {
    const programmeEpisode: ProgrammeEpisode = {
        type: ModelNodeType.PROGRAMME_EPISODE,
        fields: {
            id: dataNode.data.id,
            title: dataNode.data.title,
            season_number: dataNode.data.season_number || null,
            season_episode_number: dataNode.data.season_episode_number || null,
            original_air_date: dataNode.data.original_air_date || null,
            duration: dataNode.data.duration || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return programmeEpisode
}
