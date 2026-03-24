import type {Magazine} from "./types/Magazine"

export function getNodeSubTitle(node: Magazine) {
    return `${node.founded} - ${node.defunct} | ${node.publisher}`
}
