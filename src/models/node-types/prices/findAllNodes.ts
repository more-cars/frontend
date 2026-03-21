import {PriceDataFacade} from "../../../data/PriceDataFacade"
import {Price} from "./types/Price"
import {convertPriceNode} from "./convertPriceNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await PriceDataFacade.getNodeCollection(params)

    const prices: Price[] = []

    nodes.forEach(node => {
        prices.push(convertPriceNode(node))
    })

    return prices.slice(0, nodeLimit)
}
