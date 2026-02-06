import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariant(id: number) {
    const relation = await LapTimeDataFacade.getConnectedCarModelVariantNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelVariantNode(relation.partner_node)
}
