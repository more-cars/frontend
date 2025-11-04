import {CarModelDataFacade} from "../../data/CarModelDataFacade"
import type {BrandNode} from "../brands/types/BrandNode"

export async function findConnectedBrand(id: number) {
    const relation = await CarModelDataFacade.getConnectedBrandNode(id)

    return relation.partner_node as BrandNode
}
