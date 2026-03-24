import type {Image} from "./types/Image"

export function getNodeSubTitle(node: Image) {
    return `${node.fields.license} | ${node.fields.creator} | via ${node.fields.image_provider}`
}
