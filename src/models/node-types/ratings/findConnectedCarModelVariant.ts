import {RatingDataFacade} from "../../../data/RatingDataFacade"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariant(id: number) {
    const relation = await RatingDataFacade.getConnectedCarModelVariantNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelVariantNode(relation.partner_node)
}
