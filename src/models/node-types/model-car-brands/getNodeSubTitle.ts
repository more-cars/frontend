import type {ModelCarBrand} from "./types/ModelCarBrand"

export function getNodeSubTitle(node: ModelCarBrand) {
    return `${node.founded} - ${node.defunct}`
}
