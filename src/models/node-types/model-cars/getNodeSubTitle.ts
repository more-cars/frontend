import type {ModelCar} from "./types/ModelCar"

export function getNodeSubTitle(node: ModelCar) {
    return `${node.fields.scale} | ${node.fields.release_year}`
}
