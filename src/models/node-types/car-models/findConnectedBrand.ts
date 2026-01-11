import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {convertBrandNode} from "../brands/convertBrandNode"

export async function findConnectedBrand(id: number) {
    const relation = await CarModelDataFacade.getConnectedBrandNode(id)

    if (!relation) {
        return null
    }

    return convertBrandNode(relation.partner_node)
}
