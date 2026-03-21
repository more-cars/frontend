import {ModelCarDataFacade} from "../../../data/ModelCarDataFacade"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariant(id: number) {
    const relation = await ModelCarDataFacade.getConnectedCarModelVariantNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelVariantNode(relation.partner_node)
}
