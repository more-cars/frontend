import {PriceDataFacade} from "../../../data/PriceDataFacade"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariant(id: number) {
    const relation = await PriceDataFacade.getConnectedCarModelVariantNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelVariantNode(relation.partner_node)
}
