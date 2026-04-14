import type {RacingGame} from "./types/RacingGame"

export function getNodeSubTitle(node: RacingGame) {
    const year = node.fields.release_year
    const developer = node.fields.developer

    const subtitleParts = []

    if (year) {
        subtitleParts.push(year)
    }

    if (developer) {
        subtitleParts.push(developer)
    }

    return subtitleParts.join(' | ')
}
