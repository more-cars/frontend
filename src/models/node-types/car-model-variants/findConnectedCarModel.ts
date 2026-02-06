import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {convertCarModelNode} from "../car-models/convertCarModelNode"

export async function findConnectedCarModel(id: number) {
    const relation = await CarModelVariantDataFacade.getConnectedCarModelNode(id)

    if (!relation) {
        return null
    }

    return convertCarModelNode(relation.partner_node)
}
