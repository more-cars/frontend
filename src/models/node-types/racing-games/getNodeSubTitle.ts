import type {RacingGame} from "./types/RacingGame"

export function getNodeSubTitle(node: RacingGame) {
    return `${node.release_year} | ${node.developer}`
}
