import type {GamingPlatform} from "./types/GamingPlatform"

export function getNodeTitle(node: GamingPlatform) {
    return node.fields.name
}
