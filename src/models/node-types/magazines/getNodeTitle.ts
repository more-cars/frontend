import type {Magazine} from "./types/Magazine"

export function getNodeTitle(node: Magazine) {
    return node.fields.name
}
