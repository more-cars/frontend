import type {GamingPlatform} from "./types/GamingPlatform"

export function getNodeSubTitle(node: GamingPlatform) {
    return `${node.release_year} | ${node.manufacturer}`
}
