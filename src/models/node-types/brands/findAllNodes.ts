import {BrandDataFacade} from "../../../data/BrandDataFacade"
import {Brand} from "./types/Brand"
import {convertBrandNode} from "./convertBrandNode"

const nodeLimit = 100

export async function findAllNodes() {
    const nodes = await BrandDataFacade.getNodeCollection()

    const brands: Brand[] = []

    nodes.forEach(node => {
        brands.push(convertBrandNode(node))
    })

    return brands.slice(0, nodeLimit)
}
