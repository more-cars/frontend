import type {ModelCar} from "./types/ModelCar"

export function getNodeSubTitle(node: ModelCar) {
    return `${node.scale} | ${node.release_year}`
}
