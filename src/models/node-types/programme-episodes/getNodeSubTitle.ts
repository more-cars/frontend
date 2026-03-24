import type {ProgrammeEpisode} from "./types/ProgrammeEpisode"

export function getNodeSubTitle(node: ProgrammeEpisode) {
    return `${node.original_air_date} | Season ${node.season_number} | Episode ${node.season_episode_number}`
}
