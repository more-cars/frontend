import type {Video} from "./types/Video"

export function getNodeTitle(node: Video) {
    return `${node.fields.title}`
}
