import {BrandDataFacade} from "../../../data/BrandDataFacade"
import {convertBrandNode} from "./convertBrandNode"

export async function findNodeById(id: number) {
    const node = await BrandDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertBrandNode(node)
}
