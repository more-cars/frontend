import type {SessionResult} from "./types/SessionResult"

export function getNodeSubTitle(node: SessionResult) {
    const raceNumber = node.fields.race_number
    const teamName = node.fields.team_name

    const subtitleParts = []

    if (raceNumber) {
        subtitleParts.push(`#${node.fields.race_number}`)
    }

    if (teamName) {
        subtitleParts.push(teamName)
    }

    return subtitleParts.join(' | ')
}
