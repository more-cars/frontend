import type {Brand} from "./types/Brand"

export function getNodeSubTitle(node: Brand) {
    return `${node.founded} - ${node.defunct}`
}
