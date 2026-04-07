import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {RacingSeriesDataFacade} from "../../../data/RacingSeriesDataFacade"
import {RacingSeries} from "./types/RacingSeries"
import {convertRacingSeriesNode} from "./convertRacingSeriesNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await RacingSeriesDataFacade.getNodeCollection(params)

    const racingSeries: RacingSeries[] = []

    nodes.forEach(node => {
        racingSeries.push(convertRacingSeriesNode(node))
    })

    return racingSeries.slice(0, nodeLimit)
}
