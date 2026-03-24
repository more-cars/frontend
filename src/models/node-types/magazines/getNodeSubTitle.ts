import type {Magazine} from "./types/Magazine"

export function getNodeSubTitle(node: Magazine) {
    return `${node.fields.founded} - ${node.fields.defunct} | ${node.fields.publisher}`
}
