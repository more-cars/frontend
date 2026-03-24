import type {RacingGame} from "./types/RacingGame"

export function getNodeSubTitle(node: RacingGame) {
    return `${node.fields.release_year} | ${node.fields.developer}`
}
