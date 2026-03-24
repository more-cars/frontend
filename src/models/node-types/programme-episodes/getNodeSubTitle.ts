import type {ProgrammeEpisode} from "./types/ProgrammeEpisode"

export function getNodeSubTitle(node: ProgrammeEpisode) {
    return `${node.fields.original_air_date} | Season ${node.fields.season_number} | Episode ${node.fields.season_episode_number}`
}
