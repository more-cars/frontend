import type {ModelCarBrand} from "./types/ModelCarBrand"

export function getNodeSubTitle(node: ModelCarBrand) {
    return `${node.fields.founded} - ${node.fields.defunct}`
}
