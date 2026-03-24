import type {Image} from "./types/Image"

export function getNodeSubTitle(node: Image) {
    return `${node.license} | ${node.creator} | via ${node.image_provider}`
}
