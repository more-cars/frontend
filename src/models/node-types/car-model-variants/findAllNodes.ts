import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {CarModelVariant} from "./types/CarModelVariant"
import {convertCarModelVariantNode} from "./convertCarModelVariantNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await CarModelVariantDataFacade.getNodeCollection(params)

    const carModelVariants: CarModelVariant[] = []

    nodes.forEach(node => {
        carModelVariants.push(convertCarModelVariantNode(node))
    })

    return carModelVariants.slice(0, nodeLimit)
}
