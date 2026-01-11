import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import {CarModel} from "./types/CarModel"
import {convertCarModelNode} from "./convertCarModelNode"

const nodeLimit = 100

export async function findAllNodes() {
    const nodes = await CarModelDataFacade.getNodeCollection()

    const carModels: CarModel[] = []

    nodes.forEach(node => {
        carModels.push(convertCarModelNode(node))
    })

    return carModels.slice(0, nodeLimit)
}
