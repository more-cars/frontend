import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {Price} from "../prices/types/Price"
import {convertPriceNode} from "../prices/convertPriceNode"

export async function findConnectedPrices(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedPriceNodes(id)
    const prices: Price[] = []

    for (const relation of relations) {
        prices.push(convertPriceNode(relation.partner_node))
    }

    return [...prices].sort((a, b) => a.fields.price - b.fields.price)
}
