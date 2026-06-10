import type {ProgrammeEpisode} from "./types/ProgrammeEpisode"
import {formatDate} from "../../../views/lib/formatDate"

export function getNodeSubTitle(node: ProgrammeEpisode) {
    const date = node.fields.original_air_date
    const season = node.fields.season_number
    const episode = node.fields.season_episode_number

    const subtitleParts = []

    if (date) {
        subtitleParts.push(formatDate(date))
    }

    if (season) {
        subtitleParts.push(`Season ${season}`)
    }

    if (episode) {
        subtitleParts.push(`Episode ${episode}`)
    }

    return subtitleParts.join(' | ')
}
