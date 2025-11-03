import {getAllBrands} from "../../data/brands/getAllBrands"

export async function findAllNodes() {
    const nodes = await getAllBrands()

    if (!nodes) {
        return []
    }

    return nodes
}
