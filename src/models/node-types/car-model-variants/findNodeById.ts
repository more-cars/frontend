import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {convertCarModelVariantNode} from "./convertCarModelVariantNode"

export async function findNodeById(id: number) {
    const node = await CarModelVariantDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertCarModelVariantNode(node)
}
