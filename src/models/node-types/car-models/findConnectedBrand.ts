import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import type {Brand} from "../brands/types/Brand"

export async function findConnectedBrand(id: number) {
    const relation = await CarModelDataFacade.getConnectedBrandNode(id)

    return relation?.partner_node as Brand || null
}
