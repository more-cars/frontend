import type {GamingPlatform} from "./types/GamingPlatform"

export function getNodeSubTitle(node: GamingPlatform) {
    return `${node.fields.release_year} | ${node.fields.manufacturer}`
}
