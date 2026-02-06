import {SessionResultDataFacade} from "../../../data/SessionResultDataFacade"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariant(id: number) {
    const relation = await SessionResultDataFacade.getConnectedCarModelVariantNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelVariantNode(relation.partner_node)
}
