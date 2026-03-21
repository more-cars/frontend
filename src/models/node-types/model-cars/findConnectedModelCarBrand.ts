import {ModelCarDataFacade} from "../../../data/ModelCarDataFacade"
import {convertModelCarBrandNode} from "../model-car-brands/convertModelCarBrandNode"

export async function findConnectedModelCarBrand(id: number) {
    const relation = await ModelCarDataFacade.getConnectedModelCarBrandNode(id)

    if (!relation) {
        return null
    }

    return convertModelCarBrandNode(relation.partner_node)
}
