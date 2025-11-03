import {getAllCarModels} from "../../data/car-models/getAllCarModels"

export async function findAllNodes() {
    const nodes = await getAllCarModels()

    if (!nodes) {
        return []
    }

    return nodes
}
