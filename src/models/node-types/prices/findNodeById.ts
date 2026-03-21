import {PriceDataFacade} from "../../../data/PriceDataFacade"
import {convertPriceNode} from "./convertPriceNode"

export async function findNodeById(id: number) {
    const node = await PriceDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertPriceNode(node)
}
