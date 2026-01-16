import {BrandDataFacade} from "../../../data/BrandDataFacade"
import {Brand} from "./types/Brand"
import {convertBrandNode} from "./convertBrandNode"

const nodeLimit = 100

export async function findAllNodes(params: { page: number }) {
    const nodes = await BrandDataFacade.getNodeCollection(params)

    const brands: Brand[] = []

    nodes.forEach(node => {
        brands.push(convertBrandNode(node))
    })

    return brands.slice(0, nodeLimit)
}
