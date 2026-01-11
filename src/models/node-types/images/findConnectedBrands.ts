import {ImageDataFacade} from "../../../data/ImageDataFacade"
import {Brand} from "../brands/types/Brand"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {convertBrandNode} from "../brands/convertBrandNode"

export async function findConnectedBrands(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const brands: Brand[] = []

    for (const relation of relations) {
        if (relation.partner_node_type === DataNodeType.BRAND) {
            brands.push(convertBrandNode(relation.partner_node))
        }
    }

    return brands
}
