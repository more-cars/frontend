import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {ModelCarDataFacade} from "../../../data/ModelCarDataFacade"
import {ModelCar} from "./types/ModelCar"
import {convertModelCarNode} from "./convertModelCarNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await ModelCarDataFacade.getNodeCollection(params)

    const modelCars: ModelCar[] = []

    nodes.forEach(node => {
        modelCars.push(convertModelCarNode(node))
    })

    return modelCars.slice(0, nodeLimit)
}
