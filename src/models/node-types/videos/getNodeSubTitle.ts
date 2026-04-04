import type {Video} from "./types/Video"

export function getNodeSubTitle(node: Video) {
    return `${node.fields.creator} | ${node.fields.duration}`
}
