import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {ModelCarBrandDataFacade} from "../../../data/ModelCarBrandDataFacade"
import {ModelCarBrand} from "./types/ModelCarBrand"
import {convertModelCarBrandNode} from "./convertModelCarBrandNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await ModelCarBrandDataFacade.getNodeCollection(params)

    const modelCarBrands: ModelCarBrand[] = []

    nodes.forEach(node => {
        modelCarBrands.push(convertModelCarBrandNode(node))
    })

    return modelCarBrands.slice(0, nodeLimit)
}
